\connect educationaldb



CREATE TABLE traits
(
    id serial PRIMARY KEY,
    title  VARCHAR (50)  NOT NULL,
    description  VARCHAR (100)  NOT NULL,
    imageurl VARCHAR (100),
    nosqlarticlepage varchar (50) NOT NULL,
    topic_id integer REFERENCES topics(id),
);

CREATE TABLE topics
(
    id serial PRIMARY KEY,
    title  VARCHAR (50)  NOT NULL,
    description  VARCHAR (100)  NOT NULL,
    imageurl VARCHAR (100)
 );



ALTER TABLE "topics" OWNER TO eduuser;
ALTER TABLE "traits" OWNER TO eduuser;



Insert into traits(title,description) values( 'Title 1','Description 1');
Insert into traits(title,description) values( 'Title 2','Description 2');
Insert into traits(title,description) values( 'Title 3','Description 3');
Insert into traits(title,description) values( 'Title 4','Description 4');


Insert into topics(title,description, topic_id) 
    values( 'Title 1','Description 1', 1);
Insert into topics(title,description, topic_id) 
    values( 'Title 2','Description 2', 1);
Insert into topics(title,description, topic_id) 
    values( 'Title 3','Description 3', 2);
Insert into topics(title,description, topic_id) 
    values( 'Title 4','Description 4', 2);