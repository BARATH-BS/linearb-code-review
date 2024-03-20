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


(async function main(){
    try{
        let result = '';
        result = await getItem('curd')
        console.log(result);
        
        result = await getItem('rice').catch((err) => {
            console.log(`Inner catch: ${err}`);
            throw new Error(err);
        })
        console.log(result);
        
        result = await putItem()
        console.log(result);

        result = await cook()
        console.log(result);

        result = await readyToServer()
        console.log(result);
        return "DONE"
    }
    catch(err){
        console.log(`Outer catch ${err}`);
    }
})()
