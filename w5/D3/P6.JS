// Await with non-promise values

function getReadyValue(){
    return 25;
}
function getDelayedValue(){
    return Promise.resolve(75);
}

async function showValues() {
    const readyValue = await getReadyValue();
    const dealyvalue = await getDelayedValue();

    console.log("Ready value:",readyValue);
    console.log("Delayed value:",dealyvalue);
}
showValues();