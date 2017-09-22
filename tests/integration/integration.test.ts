import { app, request, expect } from './config/helpers';

describe('Testes de integração', () => {
    describe('GET /api/users/all', () => {
        it('Deve retornar um json com todos os usuários', done => {
            request(app).get('/api/users/all').end((error, res) => {
                expect(res.status).to.equal(200)
            })
        });
    });
    
    describe('GET /api/users/:id', () => {
        it('Deve retornar um usuário', done => {
            request(app).get(`/api/users/${1}`).end((error, res) => {
                expect(res.status).to.equal(200)
            })
        });
    });
    
    describe('POST /api/users/new', () => {
        it('Deve criar um novo usuario', done => {
            const user = {
                name: 'Teste'
            }
            request(app).post('/api/users/new').send(user).end((error, res) => {
                expect(res.status).to.equal(200)
            })
        });
    });
    
    describe('GET /api/users/:id/edit', () => {
        it('Deve editar um usuário', done => {
            const user = {
                name: 'Teste'
            }
            request(app).get('/api/users/all').end((error, res) => {
                expect(res.status).to.equal(200)
            })
        });
    });
    
    describe('PUT /api/users/:id/put', () => {
        it('Deve ataulizar um usuário', done => {
            const user = {
                name: 'Teste'
            }
            request(app).put('/api/users/:id/put').send(user).end((error, res) => {
                expect(res.status).to.equal(200)
            })
        });
    });
    
    describe('DELETE /api/users/:id/delete', () => {
        it('Deve apagar um usuário', done => {
            const user = {
                name: 'Teste'
            }
            request(app).delete('/api/users/all').send(user).end((error, res) => {
                expect(res.status).to.equal(200)
            })
        });
    });
});