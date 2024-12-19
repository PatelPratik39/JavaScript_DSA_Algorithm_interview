# JavaScript_DSA_Algorithm_interview

# JavaScipt Interview Question Answers

1.  Q1: Write code to get an array of names from given array of users
    ```
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

         const names = users.sort((a,b) => a.age < b.age ? 1 : -1)
                            .filter(user => user.isActive)
                            .map((user) => user.name)
        console.log("Names : ", names);
    ```

2.  Difference between null and undefined Q1: What will be logged in this example?
```

```