class Backbone {
    constructor() {
        if (this.constructor === Backbone){
                throw new Error('Implement this class instead');
        }
    }
    #bodyTemp(temperature) {
        if (temperature >= 35 && temperature <= 40){
            console.log ('A warm blooded animal');
        }
        else {
            console.log('A cold blooded animal');
        }
    }
}

class NoBackbone {
    constructor() {
        if (this.constructor === NoBackbone){
            throw new Error('Implement this class instead');
        }
    }
    #bodyTemp(temperature) {
        if (temperature >= 35 && temperature <= 40){
            console.log ('A warm blooded animal');
        }
        else {
            console.log('A cold blooded animal');
        }
    }
}
class Arthropoda extends NoBackbone{
    constructor(exoskeleton){
        super();
        this.exoskeleton = "exoskeleton";
    }
    bodyTemp(){
        console.log('Temperature fluctuates');
    }
}
class Fish extends Backbone{
    constructor(endoskeleton){
        super();
        this.endoskeleton = "endoskeleton";
    }
    bodyTemp(){
        console.log('Temperature fluctuates');
    }
}
class Amphibia extends Backbone{
    constructor(endoskeleton){
        super();
        this.endoskeleton = "endoskeleton";
    }
    bodyTemp(){
        console.log('Temperature fluctuates');
    }
}
class Reptiles extends Backbone{
    constructor(endoskeleton){
        super();
        this.endoskeleton = "endoskeleton";
    }
    bodyTemp(){
        console.log('Temperature fluctuates');
    }
}
class Aves extends Backbone{
    constructor(endoskeleton){
        super();
        this.endoskeleton = "endoskeleton";
    }
    bodyTemp(){
        console.log('Temperature falls between 35 and 40 degree celsius');
    }
}
class Mammals extends Backbone{
    constructor(endoskeleton){
        super();
        this.endoskeleton = "endoskeleton";
    }
    bodyTemp(){
        console.log('Temperature falls between 35 and 40 degree celsius');
    }
}
const butterfly = new Arthropoda();
const fish = new Fish();
const toad = new Amphibia();
const turtle = new Reptiles();
const eagle = new Aves();
const cat = new Mammals();
console.log(butterfly.bodyTemp());