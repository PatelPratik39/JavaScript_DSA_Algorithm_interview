/**
 * Convert Callback to Promise
 */

const asyncFunc = (callback) => {
  setTimeout(() => {
    callback(100);
  }, 3000);
};

const promisifyAsyncFunc = () => {
  return new Promise((resolve) => {
    asyncFunc((data) => {
      resolve(data);
    });
  });
};

promisifyAsyncFunc().then((result) => console.log(result));
