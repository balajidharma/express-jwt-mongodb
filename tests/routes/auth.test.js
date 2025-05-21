import { describe, expect, test, it } from 'vitest'
import request from 'supertest';
import app from '../../server.js';

describe('GET /', () => {
    it('should respond with a 200 status code', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});

describe('POST /api/auth/register', () => {
    it('should respond with a 200 status code', async () => {
      const response = await request(app).post('/api/auth/register').send({
        username: 'testuser',
        password: 'password',
      });
      expect(response.statusCode).toBe(200);
    });
});

describe('POST /api/auth/login', () => {
    it('should respond with a 200 status code', async () => {
      const response = await request(app).post('/api/auth/login').send({
        username: 'testuser',
        password: 'password',
      });
      console.log(response.body);
      expect(response.statusCode).toBe(200);
    });

    it('should respond with a 401 status code', async () => {
      const response = await request(app).post('/api/auth/login').send({
        username: 'XXXXXXXX',
        password: 'XXXXXXXXXXXXX',
      });
      console.log(response.body);
      expect(response.statusCode).toBe(401);
    });
});