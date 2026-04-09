"""
Обработчик заявок с формы обратной связи студии Пространство Пара.
Сохраняет заявку в базу данных и возвращает подтверждение. v2
"""
import json
import os
import psycopg2
from datetime import datetime


def handler(event: dict, context) -> dict:
    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    if event.get("httpMethod") == "GET":
        # Список всех заявок (для администратора)
        conn = psycopg2.connect(os.environ["DATABASE_URL"])
        cur = conn.cursor()
        cur.execute(
            "SELECT id, name, phone, service, message, created_at FROM para_contacts ORDER BY created_at DESC LIMIT 100"
        )
        rows = cur.fetchall()
        cur.close()
        conn.close()
        contacts = [
            {
                "id": r[0],
                "name": r[1],
                "phone": r[2],
                "service": r[3],
                "message": r[4],
                "created_at": r[5].isoformat() if r[5] else None,
            }
            for r in rows
        ]
        return {
            "statusCode": 200,
            "headers": {**cors_headers, "Content-Type": "application/json"},
            "body": json.dumps({"contacts": contacts}, ensure_ascii=False),
        }

    if event.get("httpMethod") == "POST":
        body = json.loads(event.get("body") or "{}")
        name = (body.get("name") or "").strip()
        phone = (body.get("phone") or "").strip()
        service = (body.get("service") or "").strip()
        message = (body.get("message") or "").strip()

        if not name or not phone:
            return {
                "statusCode": 400,
                "headers": {**cors_headers, "Content-Type": "application/json"},
                "body": json.dumps({"error": "Имя и телефон обязательны"}, ensure_ascii=False),
            }

        conn = psycopg2.connect(os.environ["DATABASE_URL"])
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO para_contacts (name, phone, service, message, created_at) VALUES (%s, %s, %s, %s, %s) RETURNING id",
            (name, phone, service or None, message or None, datetime.utcnow()),
        )
        new_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()

        return {
            "statusCode": 200,
            "headers": {**cors_headers, "Content-Type": "application/json"},
            "body": json.dumps(
                {"success": True, "id": new_id, "message": "Заявка принята!"},
                ensure_ascii=False,
            ),
        }

    return {
        "statusCode": 405,
        "headers": cors_headers,
        "body": json.dumps({"error": "Method not allowed"}),
    }