DROP DATABASE if exists grocerylistdatabase;
DROP ROLE if exists super_user;

CREATE ROLE super_user LOGIN password 'super_pass';

CREATE DATABASE grocerylistdatabase
   WITH OWNER super_user
   ENCODING 'UTF8'
   TABLESPACE  pg_default
   CONNECTION LIMIT  -1;

\connect grocerylistdatabase;

CREATE TABLE IF NOT EXISTS groceries (
  id SERIAL NOT NULL PRIMARY KEY,
  name character varying(255) NOT NULL
);

ALTER TABLE groceries OWNER TO super_user;
GRANT ALL PRIVILEGES ON TABLE groceries TO super_user;\connect grocerylistdatabase;