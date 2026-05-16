interface flyable{
    fly();
}

class Bird {
    speak(){
        console.log("speak...");
    }
    eat(){
        console.log("eat...");
    }
}

class Sparrow extends Bird implements flyable {
    fly(){
        console.log("Sparrow flying...");
    }
}

class Ostrict extends Bird {
}