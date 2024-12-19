const users = [
  {
    id: 1,
    name: "Lasan",
    isActive: true
  },
  {
    id: 2,
    name: "Magan",
    isActive: true
  },
  {
    id: 3,
    name: "Manjoo",
    isActive: false
  },
  {
    id: 4,
    name: "Chucha",
    isActive: true
  },
  {
    id: 5,
    name: "Lata",
    isActive: false
  }
];

console.log(users);
//option 1

// To Print names from Object of an array,
//  i need to initialize new empty array
//  iterate over an array obeject where i want to get name attribute
// using push method i can ger index of user.name

const names = [];
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
