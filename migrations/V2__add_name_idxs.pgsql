CREATE TABLE IF NOT EXISTS topping (
  id          UUID                     DEFAULT uuid_generate_v4() NOT NULL,
  name        VARCHAR                                             NOT NULL,
  price       NUMERIC(5, 2)            DEFAULT '0'::NUMERIC       NOT NULL,
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()              NOT NULL,
  "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()              NOT NULL,
  CONSTRAINT "PK__TOPPING_ID" PRIMARY KEY (id),
  CONSTRAINT "UQ__TOPPING_NAME" UNIQUE (name)
);

ALTER TABLE topping OWNER TO pg;

CREATE TABLE IF NOT EXISTS pizza (
  id          UUID                     DEFAULT uuid_generate_v4()    NOT NULL,
  name        VARCHAR                                                NOT NULL,
  size        PIZZA_SIZE_ENUM          DEFAULT 'sm'::PIZZA_SIZE_ENUM NOT NULL,
  price       NUMERIC(5, 2)            DEFAULT '0'::NUMERIC          NOT NULL,
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()                 NOT NULL,
  "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()                 NOT NULL,
  CONSTRAINT "PK__PIZZA_ID" PRIMARY KEY (id),
  CONSTRAINT "UQ__PIZZA_NAME" UNIQUE (name)
);

ALTER TABLE pizza OWNER TO pg;

CREATE TABLE IF NOT EXISTS pizza_topping_junction (
  pizza_id   UUID NOT NULL,
  topping_id UUID NOT NULL,
  CONSTRAINT "PK__PIZZA_TOPPING_JUNCTION__PIZZA_ID__TOPPING_ID" PRIMARY KEY (pizza_id, topping_id),
  CONSTRAINT "FK__PIZZA_ID" FOREIGN KEY (pizza_id) REFERENCES pizza ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT "FK__TOPPING_ID" FOREIGN KEY (topping_id) REFERENCES topping ON UPDATE CASCADE ON DELETE CASCADE
);

ALTER TABLE pizza_topping_junction OWNER TO pg;

CREATE INDEX IF NOT EXISTS "IDX__PIZZA_TOPPING_JUNCTION__PIZZA_ID" ON pizza_topping_junction (pizza_id);

CREATE INDEX IF NOT EXISTS "IDX__PIZZA_TOPPING_JUNCTION__TOPPING_ID" ON pizza_topping_junction (topping_id);