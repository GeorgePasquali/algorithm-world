\connect educationaldb

CREATE TABLE topics
(
    id serial PRIMARY KEY,
    title  VARCHAR (50)  NOT NULL,
    description  VARCHAR (100)  NOT NULL
);

ALTER TABLE "topics" OWNER TO eduuser;

Insert into topics(title,description) values( 'Title 1','Description 1');
Insert into topics(title,description) values( 'Title 2','Description 2');
Insert into topics(title,description) values( 'Title 3','Description 3');
Insert into topics(title,description) values( 'Title 4','Description 4');