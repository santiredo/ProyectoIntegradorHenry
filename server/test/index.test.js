const app = require('../src/app')
const session = require('supertest')
const agent = session(app)
const users = require('../src/utils/users')

describe('Test de RUTAS', () => {

    const char1 = {id: 1, name: 'Rick Sanchez'}
    const char2 = {id: 2, name: 'Morty Smith'}
    const char3 = {id: 3, name: 'Summer Smith'}

    describe('GET /rickandmorty/character/:id', () => {

        it('Responde con status: 200', async () => {
            const response = await agent.get('/rickandmorty/character/1');

            expect(response.statusCode).toBe(200)
        })

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await agent.get('/rickandmorty/character/1')
            const body = response.body;
            expect(body).toHaveProperty("id", "name", "species", "gender", "status", "origin", "image")
        })

        it('Si hay un error responde con status: 500', async () => {
            const idIncorrecto = 827;
            const response = await agent.get(`/rickandmorty/character/${idIncorrecto}`)
            expect(response.statusCode).toBe(500)

        })
    })

    describe('POST /rickandmorty/login', () => {
        it('Se debe obtener true en la propiedad access si los datos son correctos', async () => {
            const response = await agent.post(`/rickandmorty/login?email=${users[0].email}&password=${users[0].password}`)
            expect(response.body.access).toEqual(true)            
        })
        it('Se debe obtener false en la propiedad access si los datos no coinciden', async () => {
            const response = await agent.post(`/rickandmorty/login?email=${!users[0].email}&password=${!users[0].password}`)
            expect(response.body.access).toEqual(false)            
        })
    })

    describe('POST /rickandmorty/fav', () => {

        it('Lo que se envie por body debe ser devuelto en un arreglo en el body de la respuesta', async () => {
            const response = await agent.post('/rickandmorty/fav').send(char1)

            expect(response.body).toContainEqual(char1)
        })
        it('Al enviar un nuevo objeto debe de ser devuelto en el mismo arreglo que el objeto anterior', async () => {
            await agent.post('/rickandmorty/fav').send(char2)
            const response = await agent.post('/rickandmorty/fav').send(char3)

            expect(response.body.length).toBeGreaterThan(2)

        })
    })

    describe('DELETE /rickandmorty/fav/:id', () => {

        // Si no hubiese agregado personajes en el describe anterior, deberia de invocar un beforeEach

        it('Si no se envia un ID correcto se devuelve el mismo array', async () => {
            
            const response = await agent.delete('/rickandmorty/fav/0')

            expect(response.body).toContainEqual(char1, char2)
        })
    })
}) 
