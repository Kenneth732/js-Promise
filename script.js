// let success = true;

// function getUser(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 { username: 'john', email: 'john@test.com' },
//                 { username: 'jane', email: 'jane@test.com' },
//             ]);
//         }, 1000);
//     });
// }

// function onFulfilled(users){
//     console.log(users)
// }
// function onRejected(error){
//     console.log(error);
// }

// const promise = getUser();
// promise.then(onFulfilled, onRejected)


// The following example changes the success flag to false to simulate the error scenario:

let success = false;

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      } else {
        reject('Failed to the user list');
      }
    }, 1000);
  });
}

const promise = getUsers();

promise.catch((error) => {
  console.log(error);
});