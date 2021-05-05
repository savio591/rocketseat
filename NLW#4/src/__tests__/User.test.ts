import request from 'supertest';
import { app } from '../app';

import createConnection from '../database';

describe('Users', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it('Should be able to create a new user', async () => {
    const response = await request(app).post('/users').send({
      email: 'user@savil.com',
      name: 'Saviir',
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('Should not be able to create a new user if email exists', async () => {
    const response = await request(app).post('/users').send({
      email: 'user@savil.com',
      name: 'Saviir',
    });
    expect(response.status).toBe(400);
  });
});
