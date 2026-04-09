ALTER TABLE para_contacts
  ADD COLUMN IF NOT EXISTS email VARCHAR(200),
  ADD COLUMN IF NOT EXISTS status VARCHAR(30) NOT NULL DEFAULT 'new',
  ADD COLUMN IF NOT EXISTS source VARCHAR(100) DEFAULT 'website',
  ADD COLUMN IF NOT EXISTS note TEXT;

COMMENT ON COLUMN para_contacts.status IS 'new | contacted | scheduled | done | cancelled';
