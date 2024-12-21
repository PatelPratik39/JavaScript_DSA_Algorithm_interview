/**
 *
 * Callback Function
 */

const asyncFn = (callback) => {
  setTimeout(() => {
    callback("done");
  }, 1000);
};

asyncFn((message) => {
  console.log("Callback", message);
});
