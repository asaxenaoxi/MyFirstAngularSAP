// automatically compile typescript file into JS : tsc *.ts --watch --target ES5
var myName = "Ankur Saxena";
var myAge = 38;
var canVote = true;
var anything = "Hello";
anything = 2;
document.getElementById("tsStuff").innerHTML = "My name is " + myName + "<br>";
document.write("myName is of type " + typeof (myName) + "<br>");
document.write("myAge is of type " + typeof (myAge) + "<br>");
//here anything is of type number because we assigned anything a vlue of numeric 2
document.write("anything is of type " + typeof (anything) + "<br>");
var num2Str = parseInt("5");
var str2Num = num2Str;
document.write("str2Num is of type " + typeof (str2Num) + ", converting to string value " + str2Num.toString() +
    " which is of type " + typeof (str2Num.toString()) + "<br>");
document.write("num2Str is of type " + typeof (num2Str) + "<br><br>");
const PI = 3.141; //can not be changed
var superman = {
    realName: "Clark Kent",
    superName: "Superman"
};
document.write(superman.realName + " is " + superman.superName + "<br><br>");
//Arrays
var employees = ["Bob", "Sally", "Sam"];
employees.push(myName);
document.write("Print the contents of a string array :<br>" + employees.toString() + "<br><br>");
var superheros = [];
superheros.push({ realName: "Bruce Wayne", superName: "Batman" });
superheros.push({ realName: "Toby Maguire", superName: "Toyman" });
document.write("Print the contents of a complex/struct array :<br>" +
    superheros[0].realName + " is " + superheros[0].superName + "<br>");
// seeing how let vs var scoping works
document.write("<br>VAR /w VAR in another scope Scoping<br>");
var sampleLet = 123;
if (true) {
    var sampleLet = 456;
}
// output 456
document.write("sampleLet = " + sampleLet + "<br>");
// ---------
document.write("<br>LET or VAR /w LET in another scope Scoping<br>");
var sampleLet2 = 123;
if (true) {
    let sampleLet2 = 456;
}
// output 123
document.write("sampleLet2 = " + sampleLet2 + "<br><br>");
// using for loops
document.write("Testing For IN vs OF in arrays <br>Following is For IN<br>");
var randArray = [1, 11, 22, 33];
// This somehow prints the incides instead of the content
var i = 0;
for (var arrayVal in randArray) {
    document.write("randArray[" + i++ + "] = " + arrayVal + "<br>");
}
document.write("<br>Following is For OF<br>");
i = 0;
for (var arrayVal2 of randArray) {
    document.write("randArray[" + i++ + "] = " + arrayVal2 + "<br>");
}
// converts array into string
var strRandArray = randArray.map(String);
document.write("strRandArray (using map function) = " + strRandArray + " [How is map function different?]<br>");
document.write("strRandArray (simply printed) = " + randArray + "<br>");
// functions
var getSum = function (num1, num2 = 2, num3) {
    // when you do this with a optional param and its not passed them we have a problem
    // return num1+num2+num3;
    if (typeof (num3) !== 'undefined') {
        return num1 + num2 + num3;
    }
    return num1 + num2;
};
document.write("getSum(1,2,3) = " + getSum(1, 2, 3) + "<br>");
document.write("getSum(1,2) = " + getSum(1, 2) + " (checking for optional)<br>");
document.write("getSum(1) = " + getSum(1) + " (using the default)<br>");
var sumAll = function (...nums) {
    // this is an interesting function which cycles through an array and processes a formula here it will 
    // take first value put them in b, then add a+b making making a as default value of 0 as specified and 
    // then feed it back to a for the next callback 
    var sum = nums.reduce((a, b) => a + b, 0);
    return sum;
};
document.write("sumAll(1,2,3,4,5) = " + sumAll(1, 2, 3, 4, 5) + "<br><br>");
// arrow functions
var addOne = (x) => x + 1;
document.write("addOne(5) arrow function = " + addOne(5) + "<br><br>");
// Classes
document.write("<br>Class examples<br><br>");
class Animals {
    // here the name and owner will get declared as private within the class and 
    // once set through the constructors will be immutable as they will not be accessible.
    // so these are class variables that can only be set in the constructor.
    constructor(name, owner) {
        this.name = name;
        this.owner = owner;
        Animals.numOfAnimals++;
    }
    ownerInfo() {
        document.write(this.name + " is owned by " + this.owner + "<br>");
    }
    static howManyAnimals() {
        //should it be this or Animals?
        return Animals.numOfAnimals;
    }
    get weight() {
        return this._weight;
    }
    set weight(weight) {
        this._weight = weight;
    }
}
Animals.numOfAnimals = 0;
var spot = new Animals("Spot", "Ankur");
spot.ownerInfo();
// we can call a setter function like you are accessing a variable itself and not like a function
spot.weight = 100;
document.write("Spot's weight is " + spot.weight + "<br>");
document.write("# of animals " + Animals.numOfAnimals + "<br>");
class Dog extends Animals {
    constructor(name, owner) {
        super(name, owner);
        Dog.numOfAnimals++;
    }
    static howManyAnimals() {
        return Dog.numOfAnimals;
    }
}
var romeo = new Dog("Romeo", "Pramod");
document.write("How many animals: " + Animals.howManyAnimals() + "<br>How many Dogs: " + Dog.howManyAnimals() + "<br>");
// How to check if a class is an instance of another superclass.
document.write("Is Dog an Animal: " + (romeo instanceof Animals) + "<br>");
// How to check if a variable is in an instance of a class.
document.write("Is name in Dog: " + ('name' in romeo) + "<br>");
class Car {
    //wheels will get added to Car as a member variable of type private 
    constructor(wheels) {
        this.wheels = wheels;
    }
    drive() {
        document.write("The Car drives with " + this.wheels + " wheels <br>");
    }
}
class Bicycle {
    //wheels will get added to Car as a member variable of type private 
    constructor(wheels) {
        this.wheels = wheels;
    }
    drive() {
        document.write("The Bicyle drives with " + this.wheels + " wheels <br>");
    }
}
var bmw = new Car(4);
var bike = new Bicycle(2);
bmw.drive();
bike.drive();
// Generic templated functions
function getType(val) {
    return typeof (val);
}
var aStr = "A String";
var aNum = 10;
document.write("aStr is of type : " + getType(aStr) + "<br>");
document.write("aNum is of type : " + getType(aNum) + "<br>");
function getWheels(val) {
    val.drive();
}
getWheels(bmw);
getWheels(bike);
// Generic classes
class GenericNumber {
}
var aGenericNum = new GenericNumber();
aGenericNum.add = function (x, y) { return x + y; };
document.write("aGenericNum<number>.add(5, 4) = " + aGenericNum.add(5, 4) + "<br>");
var aGenericStrNum = new GenericNumber();
aGenericStrNum.add = function (x, y) { return (parseInt(x) + parseInt(y)).toString(); };
document.write("aGenericStrNum<string>.add(\"5\", \"6\") = " + aGenericStrNum.add("5", "6") + "<br>");
// Destructuing : asigning multiple values in one line ??
var randVals = { x: 2, y: 4, z: 6 };
// Below is not valid because x, y, z are inside of randVals
//document.write (x+y+z + "<br>");
document.write("randVals.x+randVals.y+randVals.z = " + randVals.x + randVals.y + randVals.z + "<br>");
//now these are in scope variables x, y & z not to be confused with randVals.x,y,z
var { x, y, z } = randVals;
document.write("x+y+z = (after deconstructing into seperate vars in one line) " + x + y + z + "<br>");
//how did this become string because output above was number addition, output below is string addition
[x, y, z] = [y, z, x];
document.write("x+y+z = (after deconstructing using arrays) " + x + y + z + "<br>");
// other cool things
var multStr = `I go on 
for many
lines<br>`;
document.write(multStr);
// both statements are identical
document.write(`<b>${multStr}</b>`);
document.write("<b>" + multStr + "</b>");
function theSum(x, y, z) {
    document.write("theSum = " + (x + y + z) + "<br>");
}
var args = [4, 5, 6];
//theSum(...args);
// Enum
var Emotion;
(function (Emotion) {
    Emotion[Emotion["Happy"] = 10] = "Happy";
    Emotion[Emotion["Sad"] = 20] = "Sad";
    Emotion[Emotion["Angry"] = 100] = "Angry";
})(Emotion || (Emotion = {}));
var myFeelings = Emotion.Angry;
document.write("myFeeling = " + myFeelings + "<br>");
// scrolls to the bottom of the page
//window.scrollTo(0,document.querySelector(".scrollingContainer").scrollHeight);
