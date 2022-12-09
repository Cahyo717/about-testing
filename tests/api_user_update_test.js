const { expect, assert } = require('chai');
const chai = require('chai');
const assertArrays = require('chai-arrays');
const jsonSchema = require('chai-json-schema');
chai.use(assertArrays);
chai.use(jsonSchema);
const apiUser = require('../api/api_user');
const apiData = require('../data/api_user_data');
const scenario = require('../scenario/scenario');
const responseBody = require('../data_json/create-user.json');
const createUserSchema = require('../schema/create_user_schema.json');

describe(scenario.UpdateData.description, async () => {
    // it('Test Apakah Get Username Salah itu tidak dikeluarkan data ', async() => {
    //     //Your scripting code start
    //     const response = await apiUser.getUserByName('Cahyo');
    // });
    before(async() => {
        
    })
    
    it(scenario.UpdateData.PositivetestCases.case1,async() => {
        //Your scripting code start
        let body = {}
        Object.assign(body,responseBody);
        body.occupation = "Back End Engineer";
        body.nationality = "Indonesia"
        const response = await apiUser.postUpdateData(body);
        console.log(response);
        expect(response.status).to.equal(200);
        assert.equal(response.status, 200, 'status code is wrong');
        expect(response.status).equal(200);
    });

    
    it(scenario.UpdateData.NegativetestCases.case2, async() => {
        //Your scripting code start
        let body = {}
        Object.assign(body,responseBody);
        body.age = 0;
        const response = await apiUser.postUpdateData(body);
        console.log(response);
        expect(response.status).to.equal(400);
        assert.equal(response.status, 400, 'status code is wrong');
        expect(response.status).equal(400);

    });

    it(scenario.UpdateData.NegativetestCases.case3, async() => {
        //Your scripting code start
      let body = {}
      Object.assign(body,responseBody);
      body.hobbies = [];
      const response = await apiUser.postUpdateData(body);
      console.log(response);
      expect(response.status).to.equal(400);
      assert.equal(response.status, 400, 'status code is wrong');
      expect(response.status).equal(400);
    //   expect(response.body.message).to.include('you must specify');
    });

    it(scenario.UpdateData.NegativetestCases.case4, async() => {
        //Your scripting code start
      let body = {}
      Object.assign(body,responseBody);
      body.id = null;
      const response = await apiUser.postUpdateData(body);
      expect(response.status).to.equal(200);
      assert.equal(response.status, 200, 'status code is wrong');
      expect(response.status).equal(200);
    //   expect(response.body.message).to.include('you must specify');
    });

    it(scenario.GetData.PositivetestCases.case5, async() => {
        let body = {}
        Object.assign(body, responseBody);
        const response = await apiUser.getUserById('59fc6f6f-d3f3-414d-9c94-fad8d05a976a')
        console.log(body)
        expect(response.status).to.equal(400);
        console.log(createUserSchema)
        //logic API get user by ID
    })

    it(scenario.GetData.NegativetestCases.case6, async() => {
        let body = {}
        Object.assign(body, responseBody);
        const response = apiUser.getUserById('59fc6f6f-d3f3-414d-9c94-fad8d05a976a')
        console.log(body)
        console.log((await response).status)
        console.log(createUserSchema);
        //logic API get user by ID
    })

    before(async() => {
        console.log("before")
    })    
    
    after(async() => {
        console.log('after');
    })

    
    beforeEach(async() => {
        console.log("BeforeEach")
        let body = {}
        Object.assign(body , responseBody);
        response = await apiUser.postUserCreate(body);
        expect(response.status).to.equal(200);
    })

    
    afterEach(async() => {

        console.log('after Each');
    })
});


