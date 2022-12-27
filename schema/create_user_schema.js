const editData = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "id": {
        "type": ["string", "null" ]
      },
      "firstName": {
        "type": "string"
      },
      "lastName": {
        "type": "string"
      },
      "age": {
        "type": "integer"
      },
      "occupation": {
        "type": "string"
      },
      "nationality": {
        "type": "string"
      },
      "hobbies": {
        "type": "array",
        "items": [
          {
            "type": ["string","null"] 
          }
        ]
      },
      "gender": {
        "type": "string"
      },
      "createdDate": {
        "type": ["string", "null"]
      },
      "updatedDate": {
        "type": ["string", "null"]
      }
    },
    "required": [
      "id",
      "firstName",
      "lastName",
      "age",
      "occupation",
      "nationality",
      "hobbies",
      "gender",
      "createdDate",
      "updatedDate"
    ]
  }
const getUser = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "id": {
        "type": ["string", "null" ]
      },
      "firstName": {
        "type": "string"
      },
      "lastName": {
        "type": "string"
      },
      "age": {
        "type": "integer"
      },
      "occupation": {
        "type": "string"
      },
      "nationality": {
        "type": "string"
      },
      "hobbies": {
        "type": "array",
        "items": [
          {
            "type": ["string","null"] 
          }
        ]
      },
      "gender": {
        "type": "string"
      },
      "createdDate": {
        "type": ["string", "null"]
      },
      "updatedDate": {
        "type": ["string", "null"]
      }
    },
    "required": [
      "id",
      "firstName",
      "lastName",
      "age",
      "occupation",
      "nationality",
      "hobbies",
      "gender",
      "createdDate",
      "updatedDate"
    ]
  }

const zeroAge = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "errorCode": {
      "type": "string"
    },
    "statusCode": {
      "type": "integer"
    },
    "message": {
      "type": "string"
    },
    "timestamp": {
      "type": "string"
    }
  },
  "required": [
    "errorCode",
    "statusCode",
    "message",
    "timestamp"
  ]
}
const idIsNull = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "errorCode": {
      "type": "string"
    },
    "statusCode": {
      "type": "integer"
    },
    "message": {
      "type": "string"
    },
    "timestamp": {
      "type": "string"
    }
  },
  "required": [
    "errorCode",
    "statusCode",
    "message",
    "timestamp"
  ]
}
const emptyArray = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "errorCode": {
      "type": "string"
    },
    "statusCode": {
      "type": "integer"
    },
    "message": {
      "type": "string"
    },
    "timestamp": {
      "type": "string"
    }
  },
  "required": [
    "errorCode",
    "statusCode",
    "message",
    "timestamp"
  ]
}
const invalidUserId = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "errorCode": {
      "type": "string"
    },
    "statusCode": {
      "type": "integer"
    },
    "message": {
      "type": "string"
    },
    "timestamp": {
      "type": "string"
    }
  },
  "required": [
    "errorCode",
    "statusCode",
    "message",
    "timestamp"
  ]
}

module.exports = {
  editData,
  idIsNull,
  emptyArray,
  zeroAge,
  getUser,
  invalidUserId,
}