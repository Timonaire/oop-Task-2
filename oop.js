// class Shape {
//     constructor (){
//         if (this.constructor === Shape) {
//             throw new Error ('Get lost');
//         }
//     }
//     area() {
//         throw new Error ('keep off');
//     }
// }

// class Circle extends Shape {
//     constructor (radius){
//         super()
//         this.radius = radius;
//     }
//     area (){
//         const d_area = Math.PI * (this.radius ** 2);
//         return d_area;
//     }
// }
// const circle = new Circle(5);
// console.log (circle.area());
// class Square extends Shape{
//     constructor (length){
//         super()
//         this.length = length;
//     }
//     area(){
//         const d_area = this.length * this.length;
//         return d_area;
//     }
// }
// const square = new Square(3);
// console.log (square.area());
// console.log (square.length);
// square.area();


// class WarmBlooded {
//     constructor (){
//         if (this.constructor === WarmBlooded) {
//             throw new Error ('Get lost');
//         }
//     }
//     bodyTemp() {
//         throw new Error ('keep off');
//     }
// }
// class ColdBlooded {
//     constructor (){
//         if (this.constructor === ColdBlooded) {
//             throw new Error ('Get lost');
//         }
//     }
//     bodyTemp() {
//         throw new Error ('keep off');
//     }
// }

// class Circle extends Shape {
//     constructor (radius){
//         super()
//         this.radius = radius;
//     }
//     area (){
//         const d_area = Math.PI * (this.radius ** 2);
//         return d_area;
//     }
// }
// const circle = new Circle(5);
// console.log (circle.area());

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