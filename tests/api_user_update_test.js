const { expect, assert } = require('chai');
const chai = require('chai');
const assertArrays = require('chai-arrays');
const jsonSchemas = require('../schema/create_user_schema');
const apiUser = require('../api/api_user');
const scenario = require('../scenario/scenario');
const responseBody = require('../data/create-user.json');
const dataUser = require('../data/api_user_data');


chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(assertArrays);
chai.use(require('chai-json-schema'));

describe(scenario.UpdateData.description, async () => {
    before(async() => {
        console.log("Before Hook, Post User Data")
        let response = await apiUser.createUser(responseBody);
        dataUser.UserID = response.body.id;
        expect(response.status).to.equal(200);
    })

      
    after(async() => {
        console.log('After Hook,Delete User Data')
        let response = await apiUser.deleteUser(dataUser.UserID);
        expect(response.status).to.equal(200);
    })
    
    it(scenario.UpdateData.PositivetestCases.case1,async() => {
        //Your scripting code start
        let response = await apiUser.updateDataUser(dataUser.editData(dataUser.UserID))
        expect(response.status).to.equal(200);
        expect(response.body.occupation).not.to.equal(responseBody.occupation);
        expect(response.body.occupation).not.to.equal(responseBody.occupation);
        expect(response.body).has.jsonSchema(jsonSchemas.editData);
    });

    
    it(scenario.UpdateData.NegativetestCases.case2, async() => {
        //Your scripting code start
        let response = await apiUser.updateDataUser(dataUser.zeroAge);
        expect(response.status).to.equal(400);
        expect(response.body.errorCode).to.equal("ER-03");
        expect(response.body.message).to.equal('you must specify data for firstname, lastName, age, occupation, nationality, hobbies (at least 1), and gender');
        expect(response.body).has.jsonSchema(jsonSchemas.zeroAge);

    });

    it(scenario.UpdateData.NegativetestCases.case3, async() => {
        //Your scripting code start
        let response = await apiUser.updateDataUser(dataUser.emptyArray);
        expect(response.status).to.equal(400);
        expect(response.body.errorCode).to.equal("ER-03");
        expect(response.body.message).to.equal('you must specify data for firstname, lastName, age, occupation, nationality, hobbies (at least 1), and gender');
        expect(response.body).has.jsonSchema(jsonSchemas.emptyArray);
    });

    it(scenario.UpdateData.NegativetestCases.case4, async() => {
        //Your scripting code start
        let response = await apiUser.updateDataUser(dataUser.idIsNull);
        expect(response.status).to.equal(404);
        expect(response.body.errorCode).to.equal("ER-01");
        expect(response.body.message).to.equal("user not found");
        expect(response.body).has.jsonSchema(jsonSchemas.idIsNull);
    //   expect(response.body.message).to.include('you must specify');
    });
  
});

describe(scenario.GetData.description, async() => {
    before(async() => {
        console.log("Before Hook, Post User Data")
        let response = await apiUser.createUser(responseBody);
        dataUser.UserID = response.body.id;
        expect(response.status).to.equal(200);
    })

      
    after(async() => {
        console.log('After Hook,Delete User Data')
        let response = await apiUser.deleteUser(dataUser.UserID);
        expect(response.status).to.equal(200);
    })
    it(scenario.GetData.PositivetestCases.case5, async() => {
        let response = await apiUser.getUserById(dataUser.UserID);
        expect(response.status).to.equal(200);
        expect(response.body.id).to.equal(dataUser.UserID);
        expect(response.body).has.jsonSchema(jsonSchemas.getUser);
        //logic API get user by ID
    })

    it(scenario.GetData.NegativetestCases.case6, async() => {
        let response = await apiUser.getUserById('error');
        expect(response.status).to.equal(404);
        expect(response.body.errorCode).to.equal('ER-01');
        expect(response.body.message).to.equal('user not found');
        expect(response.body).has.jsonSchema(jsonSchemas.invalidUserId);
        //logic API get user by ID
    })
})


