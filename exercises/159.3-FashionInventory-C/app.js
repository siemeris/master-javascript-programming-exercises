function renderInventory(inventory) {
    let arr = [];
    if (typeof inventory === "undefined"){
      return []
    }
    else{
    for (var i = 0; i < inventory.length; i++) {
      for (var n = 0; n < inventory[i].shoes.length; n++) {
        if (inventory[i].shoes[n].name.includes('black')){
            arr.push([inventory[i].name, inventory[i].shoes[n].name, inventory[i].shoes[n].price]);
        }
        }
    }
    }
    return arr;
}

var inventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];

  console.log(renderInventory(inventory));
