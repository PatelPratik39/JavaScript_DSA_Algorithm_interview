/***
 *  Create a counter function which has increment and getValue functionality
 */

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
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());



