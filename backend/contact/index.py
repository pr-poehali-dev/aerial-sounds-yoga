"""
Обработчик заявок с формы обратной связи студии Пространство Пара.
GET  /  — список всех клиентов (для CRM)
POST /  — создать новую заявку
PATCH / — обновить статус или заметку по id
"""
import json
import os
import psycopg2
from datetime import datetime

ALLOWED_STATUSES = {"new", "contacted", "scheduled", "done", "cancelled"}


def get_conn():
    return psycopg2.connect(os.environ["DATABASE_URL"])


def handler(event: dict, context) -> dict:
    cors = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors, "body": ""}

    method = event.get("httpMethod")

    # ── GET: список клиентов ──────────────────────────────
    if method == "GET":
        conn = get_conn()
        cur = conn.cursor()
        cur.execute("""
            SELECT id, name, phone, email, service, message, status, source, note, created_at
            FROM para_contacts
            ORDER BY created_at DESC
            LIMIT 200
        """)
        rows = cur.fetchall()
        cur.close()
        conn.close()
        contacts = [
            {
                "id": r[0], "name": r[1], "phone": r[2], "email": r[3],
                "service": r[4], "message": r[5], "status": r[6],
                "source": r[7], "note": r[8],
                "created_at": r[9].isoformat() if r[9] else None,
            }
            for r in rows
        ]
        return {
            "statusCode": 200,
            "headers": {**cors, "Content-Type": "application/json"},
            "body": json.dumps({"contacts": contacts}, ensure_ascii=False),
        }

    # ── POST: создать заявку ──────────────────────────────
    if method == "POST":
        body = json.loads(event.get("body") or "{}")
        name = (body.get("name") or "").strip()
        phone = (body.get("phone") or "").strip()
        email = (body.get("email") or "").strip() or None
        service = (body.get("service") or "").strip() or None
        message = (body.get("message") or "").strip() or None
        source = (body.get("source") or "website").strip()

        if not name or not phone:
            return {
                "statusCode": 400,
                "headers": {**cors, "Content-Type": "application/json"},
                "body": json.dumps({"error": "Имя и телефон обязательны"}, ensure_ascii=False),
            }

        conn = get_conn()
        cur = conn.cursor()
        cur.execute(
            """INSERT INTO para_contacts (name, phone, email, service, message, source, created_at)
               VALUES (%s, %s, %s, %s, %s, %s, %s) RETURNING id""",
            (name, phone, email, service, message, source, datetime.utcnow()),
        )
        new_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()

        return {
            "statusCode": 200,
            "headers": {**cors, "Content-Type": "application/json"},
            "body": json.dumps({"success": True, "id": new_id}, ensure_ascii=False),
        }

    # ── PATCH: обновить статус / заметку ─────────────────
    if method == "PATCH":
        body = json.loads(event.get("body") or "{}")
        contact_id = body.get("id")
        new_status = body.get("status")
        new_note = body.get("note")

        if not contact_id:
            return {
                "statusCode": 400,
                "headers": {**cors, "Content-Type": "application/json"},
                "body": json.dumps({"error": "id обязателен"}, ensure_ascii=False),
            }

        if new_status and new_status not in ALLOWED_STATUSES:
            return {
                "statusCode": 400,
                "headers": {**cors, "Content-Type": "application/json"},
                "body": json.dumps({"error": f"Недопустимый статус: {new_status}"}, ensure_ascii=False),
            }

        conn = get_conn()
        cur = conn.cursor()
        if new_status is not None and new_note is not None:
            cur.execute("UPDATE para_contacts SET status=%s, note=%s WHERE id=%s", (new_status, new_note, contact_id))
        elif new_status is not None:
            cur.execute("UPDATE para_contacts SET status=%s WHERE id=%s", (new_status, contact_id))
        elif new_note is not None:
            cur.execute("UPDATE para_contacts SET note=%s WHERE id=%s", (new_note, contact_id))
        conn.commit()
        cur.close()
        conn.close()

        return {
            "statusCode": 200,
            "headers": {**cors, "Content-Type": "application/json"},
            "body": json.dumps({"success": True}, ensure_ascii=False),
        }

    return {
        "statusCode": 405,
        "headers": cors,
        "body": json.dumps({"error": "Method not allowed"}),
    }
