function getItem(itemName) {
    return new Promise(function(resolve,reject) {
        setTimeout(() => {
            // if(itemName === 'rice') {
            //     reject(`${itemName} not found`);
            // }
            // else{
            //     resolve(`${itemName} - added`);
            // }
            resolve(`${itemName} - added`);
        }, 2000);
    })
}


function putItem(){
    return new Promise(function(resolve,reject) {
        setTimeout(() => {
            resolve(`Item added to the dish`)
        }, 1000);
    })
}


function cook(){
    return new Promise(function(resolve,reject) {
        setTimeout(() => {
            resolve(`Cooking......`)
        }, 5000);
    })
}

function readyToServer(){
    return new Promise(function(resolve,reject) {
        setTimeout(() => {
            resolve(`Ready to serve`)
        }, 2000);
    })
}



// getItem(`curd`)
// .then((result)=> {
//     console.log(result);
//     return getItem(`rice`);
// })
// .catch((err)=> {
//     console.log(`Inner catch ${err}`);
//     throw new Error(err);
// })
// .then((result)=> {
//     console.log(result);
//     return putItem();
// })
// .then((result)=> {
//     console.log(result);
//     return cook();
// })
// .then((result)=> {
//     console.log(result);
//     return readyToServer();
// })
// .then((result) =>{
//     console.log(result);
//     console.log("Done");
// })
// .catch((err)=> {
//     console.log(`Outer catch ${err}`);
// })
// .finally(() => {
//     console.log(`TASK COMPLETED`);
// })




let items = [getItem('curd'), getItem('rice')]

Promise.allSettled(items)
.then((result) => {
    for(let res of result){
        console.log(res.value);
    }
    return putItem();
})
.then((result)=> {
    console.log(result);
    return cook();
})
.then((result)=> {
    console.log(result);
    return readyToServer();
})
.then((result) =>{
    console.log(result);
    console.log("Done");
})
.catch((err)=> {
    console.log(`Outer catch ${err}`);
})
.finally(() => {
    console.log(`TASK COMPLETED`);
})