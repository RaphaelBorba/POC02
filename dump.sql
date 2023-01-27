CREATE TABLE movies(
	id SERIAL PRIMARY KEY,
	title TEXT NOT NULL,
	genre integer NOT NULL,
	streamer integer NOT NULL,
	status BOOLEAN NOT NULL,
	resume TEXT
);



CREATE TABLE genre (
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL
);



CREATE TABLE streamer (
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL
);



ALTER TABLE movies ADD CONSTRAINT "Movies_fk0" FOREIGN KEY (genre) REFERENCES genre(id);
ALTER TABLE movies ADD CONSTRAINT "Movies_fk1" FOREIGN KEY (streamer) REFERENCES streamer(id);





