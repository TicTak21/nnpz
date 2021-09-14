CREATE TABLE IF NOT EXISTS "user" (
  id             UUID                     DEFAULT uuid_generate_v4() NOT NULL,
  email          VARCHAR(100)                                        NOT NULL,
  "password"     VARCHAR                                             NOT NULL,
  "createdAt"    TIMESTAMP WITH TIME ZONE DEFAULT NOW()              NOT NULL,
  "updatedAt"    TIMESTAMP WITH TIME ZONE DEFAULT NOW()              NOT NULL,
  role           VARCHAR(20)                                         NOT NULL,
  CONSTRAINT "PK__USER_ID" PRIMARY KEY (id)
);

CREATE UNIQUE INDEX IF NOT EXISTS "UQ__IDX__USER_EMAIL" ON "user" (email);