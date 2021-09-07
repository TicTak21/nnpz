CREATE TYPE PIZZA_SIZE_ENUM AS ENUM ('sm', 'md', 'lg');
ALTER TYPE PIZZA_SIZE_ENUM OWNER TO pg;

CREATE TABLE IF NOT EXISTS topping (
  id          UUID                     DEFAULT uuid_generate_v4() NOT NULL,
  name        VARCHAR                                             NOT NULL,
  price       NUMERIC(5, 2)            DEFAULT '0'::NUMERIC       NOT NULL,
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()              NOT NULL,
  "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()              NOT NULL,
  CONSTRAINT "PK_00dfdd569594e8162447ec4b629" PRIMARY KEY (id),
  CONSTRAINT "UQ_efda785d7e0fdbbd81cfdcc689a" UNIQUE (name)
);
ALTER TABLE topping OWNER TO pg;

CREATE TABLE IF NOT EXISTS pizza (
  id          UUID                     DEFAULT uuid_generate_v4()    NOT NULL,
  name        VARCHAR                                                NOT NULL,
  size        PIZZA_SIZE_ENUM          DEFAULT 'sm'::PIZZA_SIZE_ENUM NOT NULL,
  price       NUMERIC(5, 2)            DEFAULT '0'::NUMERIC          NOT NULL,
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()                 NOT NULL,
  "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()                 NOT NULL,
  CONSTRAINT "PK_cb1970bd1d17619fd6bc1ec7414" PRIMARY KEY (id)
);
ALTER TABLE pizza OWNER TO pg;

CREATE TABLE IF NOT EXISTS pizza_topping_junction (
  pizza_id   UUID NOT NULL,
  topping_id UUID NOT NULL,
  CONSTRAINT "PK_11f69d260f16a2ec5b1017f1747" PRIMARY KEY (pizza_id, topping_id),
  CONSTRAINT "FK_d8ff34014ec27c23b3a94b99f8e" FOREIGN KEY (pizza_id) REFERENCES pizza ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT "FK_0b86240ba560daf145bce40f914" FOREIGN KEY (topping_id) REFERENCES topping ON UPDATE CASCADE ON DELETE CASCADE
);
ALTER TABLE pizza_topping_junction OWNER TO pg;

CREATE INDEX IF NOT EXISTS "IDX_d8ff34014ec27c23b3a94b99f8" ON pizza_topping_junction (pizza_id);
CREATE INDEX IF NOT EXISTS "IDX_0b86240ba560daf145bce40f91" ON pizza_topping_junction (topping_id);

