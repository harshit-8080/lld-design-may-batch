class Parent{
    walk(){
        console.log("walking");
    }
    eat(){
        console.log("eating");
    }

    makeInvestMent():void{
        console.log("I am making investment in stock market");
    }
}


class Child extends Parent{
    makeInvestMent():void {
        console.log("making investment in bitcoin");
    }
}


const child_obj = new Child();
child_obj.makeInvestMent(); // I am making investment in bitcoin
child_obj.eat();