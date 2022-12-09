const postmanSaya = require('supertest');
const serverAPI = postmanSaya('http://localhost:1234/v1');


function postUserCreate(payload) {
    return serverAPI.post('/users')
    .set('Authorization', 'Hahahahaha')
    .set('Content-Type', 'application/json').send(
        payload
    );
}


function getUserById(id){
    return serverAPI.get(`/users?id=${id}`)
    .set('Authorization','Hahahaha')
    .set('Content-type', 'application/json');
}

function postUpdateData(send){
    return serverAPI.post('/users')
    .set('Authorization','Hahahaha')
    .set('Content-type', 'application/json')
    .send(send)
}

module.exports = {
    getUserById, postUpdateData, postUserCreate
}

