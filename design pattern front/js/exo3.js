let Person = (function(){

    let age
    let name
    let firstname

    function setAge(ageParam) {
        age = ageParam
    }

    function getName() {
        return name
    }
        
    function getFirstName() {
        return "Pierre" + age
    }

    return {
        setAge: setAge,
        getName: getName,
        FirstName: getFirstName
    }

})()

Person.setAge('21')
console.log(Person.getName())
console.log(Person.getFirstname())