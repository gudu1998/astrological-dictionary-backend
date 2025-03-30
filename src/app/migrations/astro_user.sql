CREATE TABLE astrological_user (
    "userId" SERIAL PRIMARY KEY,
    "userName" VARCHAR(200) NOT NULL,
    "email" VARCHAR(40) UNIQUE NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
