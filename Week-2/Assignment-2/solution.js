function avg(data) {
    let n = data["size"];
    let ans = 0;
    for (let product of data["products"]) {
        let price = product["price"];
        ans += price;
    }
    return ans / n;
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