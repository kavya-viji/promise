var departments = ["EEE", "MECH", "IT"];      //array
var studentsReport = {                        //
    "EEE":{
      "Vel": "Good Boy",
    "Murugan": "Good Boy",
    "Oliver": "Bad Boy",
    "Elijah": "Good Boy",
    "William": "Bad Boy",
    "Benjamin": "Bad Boy",
    "Henry": "Bad Boy",
  },
    "MECH":{
      "Kai": "Good Boy",
    "Murugan": "Good Boy",
    "Eliana": "Bad Boy",
    "Jayden": "Good Boy",
    "Ezra": "Bad Boy",
    "Luca": "Bad Boy",
    "Rowan": "Bad Boy",
  },
    "IT":{
      "Finn": "Good Boy",
    "Kayden": "Good Boy",
    "Mia": "Bad Boy",
    "Aurora": "Good Boy",
    "Amaya": "Bad Boy",
    "Ari": "Bad Boy",
    "Amara": "Bad Boy",
  }
}

let getDepartmentsPromise = new Promise(function(resolve, reject){

    let getDeptName = prompt("Enter Departmet Name");
  if(departments.indexOf(getDeptName) >= 0){
        resolve(getDeptName);
    }else{
      reject("There is no department:" + getDeptName);
  }
});

let getStudentPromise =  (dept) => new Promise(function(resolve, reject){ //dout

  let studentNames = Object.keys(studentsReport[dept]);//dout

    let getStuName = prompt("Choose Student" + studentNames.toString());

  if(studentNames.indexOf(getStuName) >= 0){
        resolve(studentsReport[dept][getStuName]);
    }else{
      reject("There is no student:" + getStuName);
  }

})

getDepartmentsPromise.then(getStudentPromise)
.then(function(response){
    console.log(response);
})
.catch((error) => {
    console.log(error);
})