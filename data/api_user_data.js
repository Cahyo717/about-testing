const userData = function(occupation, nationality){
    return {
        id: "1",
        firstName: "cahyo",
        lastName: "novianto",
        age: 25,
        occupation: occupation,
        nationality: nationality,
        hobbies: [
          "Game", "Manga", "Reading"
        ],
        gender: "MALE",
        createdDate: "2022-12-05T10:16:37.174Z",
        updatedDate: "2022-12-05T10:16:37.174Z"
      };
    
}

const userData2 = function(age){
  return {
      id: "1",
      firstName: "cahyo",
      lastName: "novianto",
      age: age,
      occupation: "Back End",
      nationality: "Indonesia",
      hobbies: [
        "Game", "Manga", "Reading"
      ],
      gender: "MALE",
      createdDate: "2022-12-05T10:16:37.174Z",
      updatedDate: "2022-12-05T10:16:37.174Z"
    };
  
}

const userData3 = function(id, firstName, lastName, age, occupation, nationality, [hobbies] , gender){
  return {
      id: id,
      firstName: firstName,
      lastName: lastName,
      age: age,
      occupation: occupation,
      nationality: nationality,
      hobbies: [
        hobbies
      ],
      gender: gender,
      createdDate: "2022-12-05T10:16:37.174Z",
      updatedDate: "2022-12-05T10:16:37.174Z"
    };
  
}


module.exports = {
    userData, userData2 , userData3
}

