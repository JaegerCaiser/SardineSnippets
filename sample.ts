interface Motorcycle {
    handlebar: string
}

interface Car {
    windshield: string
}

//Type Narrowing with type Predicate
function isCar(vehicle: Motorcycle | Car): vehicle is Car {
    return 'windshield' in vehicle;
}

//Promise function with, async, then, catch and await
async function findBadGuys(filter: Record<string, string>): Promise<BadGuys> {
    try{
        await axios.get('/badguys/search', { data: filter })
        .then((data) => { console.log(data) })
    } catch (e) {
        console.error(e);
    }
}