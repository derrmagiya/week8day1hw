// Question 1
// Create a type to represent the following instances of CTStudent Also declare three 3 students below as type CTStudent and set their values

/* let student1 = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'

}
let student2= {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}

let student3 = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
}
*/
type CTStudent = {
    id: string;
    name: string;
    age: number;
    isTired: boolean;
    projectsCompleted: string[];
    pet?: string;
  }
  
  const student1: CTStudent = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
  }
  
  const student2: CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
  }
  
  const student3: CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
  }

// Question 2

/*
Write a function that will accept a an object of type Fruit, the object of type Fruit could also be null. 
If their is a Fruit print the color of the fruit, otherwise print You ate my fruit already be sure to annoate 
the return type of the function.
*/

//Given
type Fruit = {
    color: string;
    shape: string;
};

let apple:Fruit={color:"red", shape: "sphere"}
let eaten:Fruit=null

funtion fruitFunc(fruit.Fruit):string {
    if (fruit){
        return fruit.color
    }else {
        return you ate my fruit
