import { faker } from "@faker-js/faker";
import pool from "../config/db.ts";

export const createClients = () => {
  const clients = Array.from({ length: 10 }, () => ({
    nom: faker.person.lastName().toUpperCase(),
    prenom: faker.person.firstName(),
    adresse: faker.location.street(),
    contact: faker.internet.email(),
  }));

  clients.map((client) => {
    (async () => {
      await pool.promise().query(`
        INSERT INTO CLIENT (nom, prenom, adresse, contact) VALUES ('${client.nom}', '${client.prenom}', '${client.adresse}', '${client.contact}')    
    `);
    })();
  });
};
