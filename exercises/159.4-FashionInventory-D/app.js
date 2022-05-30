function getLaceNameDataForShoes(inventory) {

  var nameWords;
  var targetWordIndex;
  var obj={};
  var newArray = [];
  if (typeof inventory === "undefined"){
    return []
  }
  else{
  for (var i = 0; i < inventory.length; i++) {
    for (var n = 0; n < inventory[i].shoes.length; n++) {
      if (inventory[i].shoes[n].name.includes('lace')){
        nameWords = inventory[i].shoes[n].name.split(' ');
        console.log(nameWords);
        for (let h = 0; h < nameWords.length; h++) {
          if (nameWords[h].includes('lace') == true) {
            targetWordIndex = h;
          }
        }
      } 
      obj.nameWords = nameWords;
      obj.targetWordIndex = targetWordIndex;
      newArray.push(obj);
    }
    return newArray
  }
}  
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

console.log(getLaceNameDataForShoes(inventory));