const scenario = {
    "UpdateData" : {
        description : "User API",
        PositivetestCases : {
            case1 : '[@TC1] Success update user',
        },
        NegativetestCases : {
            case2 : '[@TC2] Verify create user API return 400 when using data age <= 0',
            case3 : '[@TC3] Verify when data array are empty',
            case4 : '[@TC4] Verify when id is null'

        }
    },

    "GetData" : {
        description : "[@GetData]Get Data User API",
        PositivetestCases : {
            case5 : '[@TC5]User Using Valid ID',
        },
        NegativetestCases : {
            case6 : '[@TC6]User using invalid ID'
        }
    }
}

module.exports = scenario