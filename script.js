
let products = [];

function AddCart(name, price){
    let newProduct = {
        Name: name,
        Price: price
    }

    products.push(newProduct);
}

function DisplayCart(){
    products.forEach((p) => {
        console.log(`Item: ${p.Name} Price: ${p.Price}`);

    })
}


function TotalCost(){
    let sum = 0;
    products.forEach((i) => {
       sum = sum + i.Price
    });
    console.log(`Total: $${sum}`);
 }
