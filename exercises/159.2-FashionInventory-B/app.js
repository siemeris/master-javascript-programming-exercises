var currentInventory = [
    {
        name: 'Brunello Cucinelli',
        shoes: [
            { name: 'tasselled black low-top lace-up', price: 1000 },
            { name: 'tasselled green low-top lace-up', price: 1100 },
            { name: 'plain beige suede moccasin', price: 950 },
            { name: 'plain olive suede moccasin', price: 1050 }
        ]
    },
    {
        name: 'Gucci',
        shoes: [
            { name: 'red leather laced sneakers', price: 800 },
            { name: 'black leather laced sneakers', price: 900 }
        ]
    }
];

function renderInventory(inventory) {
    const arr = [];
    var sumPrice;
    for (var i = 0; i < inventory.length; i++) {
        var currentInventory = inventory[i];
        var sumPrice = 0;
      for (var n = 0; n < inventory[i].shoes.length; n++) {
        var currentShoe = currentInventory.shoes[n];
        sumPrice += inventory[i].shoes[n].price;
        //arr.push([inventory[i].name + ', ' + inventory[i].shoes[n].name + ', ' + inventory[i].shoes[n].price]);
        //obj[namer] =  inventory[i].name;
        //obj[averagePrice] = inventory[i].shoes[n].price
        //arr.push([inventory[i].name, inventory[i].shoes[n].name, inventory[i].shoes[n].price]);
    }
    //averagePrice= sumPrice/inventory[i].shoes.length;
    arr.push({name: currentInventory.name, averagePrice: sumPrice/currentInventory.shoes.length});
    }
    //return arr;
    return arr
}
console.log(renderInventory(currentInventory));