CREATE TABLE IF NOT EXISTS topping (
  id          UUID                     DEFAULT uuid_generate_v4() NOT NULL CONSTRAINT "PK_00dfdd569594e8162447ec4b629" PRIMARY KEY,
  name        VARCHAR                                             NOT NULL CONSTRAINT "UQ_efda785d7e0fdbbd81cfdcc689a" UNIQUE,
  price       NUMERIC(5, 2)            DEFAULT '0'::NUMERIC       NOT NULL,
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()              NOT NULL,
  "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()              NOT NULL
);

ALTER TABLE topping
  OWNER TO pg;

CREATE TABLE IF NOT EXISTS pizza (
  id          UUID                     DEFAULT uuid_generate_v4()    NOT NULL CONSTRAINT "PK_cb1970bd1d17619fd6bc1ec7414" PRIMARY KEY,
  name        VARCHAR                                                NOT NULL,
  size        PIZZA_SIZE_ENUM          DEFAULT 'sm'::PIZZA_SIZE_ENUM NOT NULL,
  price       NUMERIC(5, 2)            DEFAULT '0'::NUMERIC          NOT NULL,
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()                 NOT NULL,
  "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()                 NOT NULL
);

ALTER TABLE pizza
  OWNER TO pg;

CREATE TABLE IF NOT EXISTS pizza_topping_junction (
  pizza_id   UUID NOT NULL CONSTRAINT "FK_d8ff34014ec27c23b3a94b99f8e" REFERENCES pizza ON UPDATE CASCADE ON DELETE CASCADE,
  topping_id UUID NOT NULL CONSTRAINT "FK_0b86240ba560daf145bce40f914" REFERENCES topping ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT "PK_11f69d260f16a2ec5b1017f1747" PRIMARY KEY (pizza_id, topping_id)
);

ALTER TABLE pizza_topping_junction
  OWNER TO pg;

CREATE INDEX IF NOT EXISTS "IDX_d8ff34014ec27c23b3a94b99f8" ON pizza_topping_junction (pizza_id);

CREATE INDEX IF NOT EXISTS "IDX_0b86240ba560daf145bce40f91" ON pizza_topping_junction (topping_id);