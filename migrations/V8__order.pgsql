CREATE TABLE IF NOT EXISTS "order" (
  id             UUID                     DEFAULT uuid_generate_v4() NOT NULL,
  total          NUMERIC(5, 2)            DEFAULT '0'::NUMERIC       NOT NULL,
  "createdAt"    TIMESTAMP WITH TIME ZONE DEFAULT NOW()              NOT NULL,
  "updatedAt"    TIMESTAMP WITH TIME ZONE DEFAULT NOW()              NOT NULL,
  CONSTRAINT "PK__ORDER_ID" PRIMARY KEY (id)
);