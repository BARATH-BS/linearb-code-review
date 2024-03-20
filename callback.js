function getItem(itemName,callback) {
    setTimeout(() => {
        console.log(`${itemName} - added`);
        callback()
    }, 2000);
}

function putItem(callback){
    setTimeout(() => {
        console.log(`Item added to the dish`)
        callback()
    }, 1000);
}

function cook(callback){
    setTimeout(() => {
        console.log(`Cooking......`)
        callback()
    }, 5000);
}

function readyToServer(){
    setTimeout(() => {
        console.log(`Ready to serve`)
    }, 2000);
}

getItem(`curd`, () => {
    getItem(`rice`, () => {
        putItem(() => {
            cook( () => {
                readyToServer()
            })
        })
    })
})
