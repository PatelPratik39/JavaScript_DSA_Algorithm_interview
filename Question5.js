/**
 *  Asynchronous Request
 *   Write an example of fetching data with XMLHttpRequest
 */

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.github.com/users/gaearon/repos");

// xhr.onload = function () {
//   if (xhr.status !== 200) {
//     console.log("Error " + xhr.status + ": " + xhr.statusText);
//   } else {
//     console.log("Success", JSON.parse(xhr.response));
//   }
// };

// xhr.onerror = function () {
//   console.log("XHR request failed");
// };

// xhr.send();

fetch("https://api.github.com/users/gaearon/repos")
  .then((res) => res.json())
  .then((data) => {
    console.log("Success", data);
  })
  .catch((error) => {
    console.log("Error");
  });
