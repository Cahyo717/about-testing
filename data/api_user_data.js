const editData = (editId) => { 
  return {
  "id": editId,
  "firstName": "Cahyo",
  "lastName": "Novianto",
  "age": 25,
  "occupation": "Masih Nganggur",
  "nationality": "Indonesia",
  "hobbies": [
    "anime"
  ],
  "gender": "MALE",
  "createdDate": "2022-08-10T09:56:55.959Z",
  "updatedDate": "2022-08-10T09:56:55.959Z"
} 
}
const zeroAge = {
  "id": "1",
  "firstName": "Cahyo",
  "lastName": "Novianto",
  "age": 0,
  "occupation": "Pengangguran",
  "nationality": "Indonesia",
  "hobbies": [
    "anime"
  ],
  "gender": "MALE",
  "createdDate": "2022-08-10T09:56:55.959Z",
  "updatedDate": "2022-08-10T09:56:55.959Z"
  }
const emptyArray = {
  "id": "1",
  "firstName": "Cahyo",
  "lastName": "Novianto",
  "age": 25,
  "occupation": "Pengangguran",
  "nationality": "Indonesia",
  "hobbies": [],
  "gender": "MALE",
  "createdDate": "2022-08-10T09:56:55.959Z",
  "updatedDate": "2022-08-10T09:56:55.959Z"
  }

  const idIsNull = {
    "id": null,
    "firstName": "Cahyo",
    "lastName": "Novianto",
    "age": 25,
    "occupation": "Pengangguran",
    "nationality": "Indonesia",
    "hobbies": [
      "anime"
    ],
    "gender": "MALE",
    "createdDate": "2022-08-10T09:56:55.959Z",
    "updatedDate": "2022-08-10T09:56:55.959Z"
    }

  const UserID = '';

  module.exports = {
    editData,
    zeroAge,
    emptyArray,
    idIsNull,
    UserID
  }