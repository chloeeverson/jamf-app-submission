-- CREATE DATABASE: 'jamf_submission'

CREATE TABLE "group" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (30) NOT NULL
);

INSERT INTO "group" ("name") 
VALUES ('Group A'), ('Group B'), ('Group C');