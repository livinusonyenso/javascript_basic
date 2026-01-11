const NameData = {
    firstName:"ugwuja",
    lastName:"Ekene",
    getFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`);
        
    }
}

NameData.getFullName()

const NameData2 = {
    firstName:"john",
    lastName:"Emekea",
}

// To  use GetfullName function we have call() methode which is also called function borrowing

NameData.getFullName.call(NameData2)

// second ways of doing this

const schoolData = {
    firstName:"css",
    lastName:"enugu"
}
const schoolData1 = {
    firstName:"unn",
    lastName:"christ the King"
}

const getAllSchoolData = function(address,company) {
        console.log(`${this.firstName} ${this.lastName} ${address}  ${company}`);
    
}

getAllSchoolData.call(schoolData,"nkalagu","rocktama")


// In apply method paramters us []
getAllSchoolData.apply(schoolData1,["nkalagu","rocktama"])

// learn about binding,