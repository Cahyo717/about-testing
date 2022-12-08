const scenario = {
    "UpdateData" : {
        description : "[@UpdateData]Update User API",
        PositivetestCases : {
            case1 : '[@TC1] Success update user',
        },
        NegativetestCases : {
            case2 : '[@TC2] Verify create user API return 400 when using data age <= 0',
            case3 : '[@TC3] Verify when data array are empty',
            case4 : '[@TC4] Verify when id is null'

        }
    }
}

module.exports = scenario