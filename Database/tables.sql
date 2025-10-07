CREATE DATABASE TRAVELER;
USE TRAVELER;

CREATE TABLE CATEGORIE (
    nom_categorie VARCHAR(10) PRIMARY KEY,
    CHECK (nom_categorie IN ('Individuel', 'Groupe'))
);

CREATE TABLE CLIENT (
    id_client INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    adresse VARCHAR(50) NOT NULL,
    contact VARCHAR(50) NOT NULL
);

CREATE TABLE CLIENT_CATEGORIE (
    id_client INT,
    nom_categorie VARCHAR(10),
    PRIMARY KEY (id_client, nom_categorie),
    FOREIGN KEY (id_client) REFERENCES CLIENT(id_client),
    FOREIGN KEY (nom_categorie) REFERENCES CATEGORIE(nom_categorie)
);

CREATE TABLE HOTEL (
    id_hotel INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    nb_etoile INT NOT NULL,
    prix_chambre INT NOT NULL,
    localisation VARCHAR(50) NOT NULL
);

CREATE TABLE COMPAGNIE_AERIENNE (
    id_compagnie_aerienne INT PRIMARY KEY NOT NULL,
    nom VARCHAR(50) NOT NULL
);

CREATE TABLE EVALUATION (
    num_evaluation INT PRIMARY KEY,
    note_hotel INT NOT NULL,
    note_compagnie_aerienne INT NOT NULL,
    avis_hotel VARCHAR(200) NOT NULL,
    avis_compagnie_aerienne VARCHAR(200) NOT NULL,
    id_hotel INT NOT NULL,
    id_compagnie_aerienne INT NOT NULL,
    FOREIGN KEY (id_hotel) REFERENCES HOTEL(id_hotel),
    FOREIGN KEY (id_compagnie_aerienne) REFERENCES COMPAGNIE_AERIENNE(id_compagnie_aerienne)
);

CREATE TABLE CONVENTION_HOTEL (
    num_convention INT PRIMARY KEY,
    date_convention DATE NOT NULL,
    id_hotel INT,
    FOREIGN KEY (id_hotel) REFERENCES HOTEL(id_hotel)
);

CREATE TABLE CONVENTION_HOTEL_EVALUATION (
    num_convention INT,
    num_evaluation INT,
    PRIMARY KEY (num_convention, num_evaluation),
    FOREIGN KEY (num_convention) REFERENCES CONVENTION_HOTEL(num_convention),
    FOREIGN KEY (num_evaluation) REFERENCES EVALUATION(num_evaluation)
);

CREATE TABLE CONVENTION_COMPAGNIE_AERIENNE (
    num_convention INT PRIMARY KEY,
    date_convention DATE NOT NULL,
    id_compagnie_aerienne INT,
    FOREIGN KEY (id_compagnie_aerienne) REFERENCES COMPAGNIE_AERIENNE(id_compagnie_aerienne)
);

CREATE TABLE CONVENTION_COMPAGNIE_AERIENNE_EVALUATION (
    num_convention INT,
    num_evaluation INT,
    PRIMARY KEY (num_convention, num_evaluation),
    FOREIGN KEY (num_convention) REFERENCES CONVENTION_COMPAGNIE_AERIENNE(num_convention),
    FOREIGN KEY (num_evaluation) REFERENCES EVALUATION(num_evaluation)
);

