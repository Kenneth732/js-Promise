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

const promise = getUser();

