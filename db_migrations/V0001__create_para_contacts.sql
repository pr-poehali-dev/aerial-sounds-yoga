CREATE TABLE IF NOT EXISTS para_contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  service VARCHAR(100),
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
