<!-- Database has some issues, it's here but we can't use it yet -->

CREATE TABLE user (
  "id" PRIMARY KEY,
  "address" address,
  "firstName" varchar,
  "lastName" varchar,
  "accountCreationTime" timestamp DEFAULT (now()),
  "dateOfBirth" timestamp,
  "email" varchar,
  "mobileNumber" varchar,
  "hasCovid" boolean
);

CREATE TABLE "venue" (
  "id" SERIAL PRIMARY KEY,
  "venueManager" user,
  "address" address,
  "venueName" varchar,
  "contactNo" varchar,
  "lat" float,
  "lon" float,
  "caseTotal" int
);

CREATE TABLE "address" (
  "id" SERIAL PRIMARY KEY,
  "addressLine1" varchar,
  "addressLine2" varchar,
  "suburb" varchar,
  "postCode" int
);

CREATE TABLE "admin" (
  "user" SERIAL PRIMARY KEY
);

CREATE TABLE "checkin" (
  "id" SERIAL PRIMARY KEY,
  "user" user NOT NULL,
  "venue" venue NOT NULL,
  "dateTime" datetime
);

ALTER TABLE "checkin" ADD FOREIGN KEY ("user") REFERENCES "user" ("id");

ALTER TABLE "checkin" ADD FOREIGN KEY ("venue") REFERENCES "venue" ("id");

ALTER TABLE "admin" ADD FOREIGN KEY ("user") REFERENCES "user" ("id");

ALTER TABLE "user" ADD FOREIGN KEY ("address") REFERENCES "address" ("id");

ALTER TABLE "venue" ADD FOREIGN KEY ("address") REFERENCES "address" ("id");

ALTER TABLE "venue" ADD FOREIGN KEY ("venueManager") REFERENCES "user" ("id");
