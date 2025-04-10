function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getItem(itemName) {
    await delay(2000);
    console.log(`${itemName} - added`);
}

async function putItem() {
    await delay(1000);
    console.log(`Item added to the dish`);
}

async function cook() {
    await delay(5000);
    console.log(`Cooking......`);
}

async function readyToServe() {
    await delay(2000);
    console.log(`Ready to serve`);
}

async function prepareDish() {
    await getItem('curd');
    await getItem('rice');
    await putItem();
    await cook();
    await readyToServe();
}

prepareDish();
