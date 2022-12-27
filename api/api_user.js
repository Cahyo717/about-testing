const postmanSaya = require('supertest');
const postmanSaya2 = require('supertest');
const serverAPI = postmanSaya('http://localhost:1234');
const serverAPI2 = postmanSaya2('http://localhost:1234/v1');


function createUser(payload) {
    return serverAPI.post('/v1/users')
    .set('Authorization', 'Hahahahaha')
    .set('Content-Type', 'application/json').send(
        payload
    );
}


function getUserById(id){
    return serverAPI2.get(`/users/${id}`)
    .set('Authorization','Hahahaha')
    .set('Content-type', 'application/json');
}

function updateDataUser(send){
    return serverAPI.put('/v1/users')
    .set('Authorization','Hahahaha')
    .set('Content-type', 'application/json')
    .send(send)
}

function deleteUser(id) {
    return serverAPI.delete(`/v1/users/${id}`)
    .set('Authorization','Hahahaha')
    .set('Content-type', 'application/json')
}

module.exports = {
    getUserById, updateDataUser, createUser, deleteUser, serverAPI2
}

