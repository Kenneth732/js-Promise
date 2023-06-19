let success = true;

function getUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { username: 'john', email: 'john@test.com' },
                { username: 'jane', email: 'jane@test.com' },
            ]);
        }, 1000);
    });
}

function onFulfilled(users){
    console.log(users)
}
function onRejected(error){
    console.log(error);
}

const promise = getUser();
promise.then(onFulfilled, onRejected)
