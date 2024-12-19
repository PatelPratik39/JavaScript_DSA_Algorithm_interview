const users = [
  {
    id: 1,
    name: "Lasan",
    isActive: true,
    age: 20
  },
  {
    id: 2,
    name: "Magan",
    isActive: true,
    age: 33
  },
  {
    id: 3,
    name: "Manjoo",
    isActive: false,
    age: 38
  },
  {
    id: 4,
    name: "Chucha",
    isActive: true,
    age: 21
  },
  {
    id: 5,
    name: "Lata",
    isActive: false,
    age: 60
  }
];

console.log(users);
//option 1

// To Print names from Object of an array,
//  i need to initialize new empty array
//  iterate over an array obeject where i want to get name attribute
// using push method i can ger index of user.name

const names = [];
users.sort((user1, user2) => (user1.age < user2.age ? 1 : -1));
for (let i = 0; i < users.length; i++) {
  if (users[i].isActive) names.push(users[i].name);
}
console.log("Names 1: ", names);

// Option 2
const names1 = [];
users.forEach((user) => {
  if (user.isActive) {
    names1.push(user.name);
  }
});
console.log("Names 2: ", names1);

// Option 3  => Best Approch using map function
//  Using map() we can get name attribute from users object array
// but if i want to get a user is active then print name so i need to filter the users array Object based on isactive status
// then use map method

const names3 = users.filter((user) => user.isActive).map((user) => user.name);
console.log("Names 3 :", names3);

// Chaing opration to get a user array who is active and i want to set all the user name in descending order
const name4 = users
  .sort((a, b) => (a < b ? 1 : -1)) //descending order
  //.sort((a, b) => (a < b ? -1 : 1)) //Ascending order
  .filter((user) => user.isActive)
  .map((user) => user.name);
console.log("Names 4 : ", name4);
