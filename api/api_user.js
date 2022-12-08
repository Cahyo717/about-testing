const postmanSaya = require('supertest');
const serverAPI = postmanSaya('http://localhost:1234/v1');

function getUserByName(name){
    return serverAPI.get('/users?name=' + name)
    .set('Authorization','Hahahaha')
    .set('Content-type', 'application/json');
}

function postUpdateData(payLoad){
    return serverAPI.get('/users')
    .set('Authorization','Hahahaha')
    .set('Content-type', 'application/json')
    .send(payLoad)
}

module.exports = {
    getUserByName, postUpdateData
}

