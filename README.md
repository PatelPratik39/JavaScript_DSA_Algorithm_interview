# JavaScript_DSA_Algorithm_interview

# JavaScipt Interview Question Answers

1.  Q1: Write code to get an array of names from given array of users
    * Get Active User Names Sorted by Age in Descending Order

        This code snippet demonstrates how to:
        1. Sort users by age in descending order.
        2. Filter only active users (`isActive: true`).
        3. Extract the names of the active users.

        ```js
        const users = [
            { id: 1, name: "Lasan", isActive: true, age: 20 },
            { id: 2, name: "Magan", isActive: true, age: 33 },
            { id: 3, name: "Manjoo", isActive: false, age: 38 },
            { id: 4, name: "Chucha", isActive: true, age: 21 },
            { id: 5, name: "Lata", isActive: false, age: 60 },
        ];

        // Step 1: Sort by age in descending order, Step 2: Filter active users, Step 3: Map to names
        const names = users
            .sort((a, b) => (a.age < b.age ? 1 : -1)) // Sort descending by age
            .filter(user => user.isActive)           // Filter only active users
            .map(user => user.name);                 // Extract names

        console.log("Names: ", names); // Output: ["Magan", "Chucha", "Lasan"]


2.  Difference between null and undefined Q1: What will be logged in this example?
    ```js
    let var1;
    console.log(var1);  //Undefind
    console.log(typeof(var1)); //undefined
    
    let var2 = null;
    console.log(var2);  //assign null to var2 so it will be var2
    console.log(typeof var2);  /// null is Object so output will be "Object"

3.   Create a counter function which has increment and getValue functionality ?
    ```js
        const createCounter = () => {
            let count = 0;

            return {
                increment : () => {
                    count++
                },
                getValue: () => {
                    return count;
                }
            }
        }
    let counter = createCounter();
    counter.increment();
    counter.increment();
    console.log(counter.getValue());
    console.log(counter.getValue());