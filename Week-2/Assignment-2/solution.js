function avg(data) {
    let productLength = data["size"];
    let avgPrice = 0;
    for (let product of data["products"]) {
        let price = product["price"];
        avgPrice += price;
    }
    avgPrice /= productLength;
    return avgPrice;
}
console.log(
    avg({
        size:3, 
        products:[
            {
                name:"Product 1",
                price:100 
            },
            {
                name:"Product 2",
                price:700 
            },
            {
                name:"Product 3",
                price:250 
            }
        ]
    })
) // should print the average price of all products