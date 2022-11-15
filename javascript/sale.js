// var firstName = "Taro";

// function greeting() {
//   var familyName = "DIVE";
//   console.log(familyName,firstName); //Appeler une variable définie en dehors d'une fonction
// }

// greeting();
// // console.log(familyName); 

// let a = 5;
// console.log(--a); //aの値を1減らし、その後aの値を評価するので4になる
// console.log(--a); //aの値を1減らし、その後aの値を評価するので4になる

// console.log(a--); //aの値を評価した後に1減らすので4のまま
// console.log(a--); //上記で1減っているので4が評価され、その後1減る

// console.log(a--); //上記で1減っているので4が評価され、その後1減る

// console.log(a--); //上記で1減っているので4が評価され、その後1減る

// console.log(a--); //上記で1減っているので4が評価され、その後1減る

// console.log(a--); //上記で1減っているので4が評価され、その後1減る

// let priceElement= document.getElementById("product");
// let numberElement= document.getElementById("number");
// let commandes=[];




// function add(){
//     const price= parseInt(priceElement.value);
//     let commande = {
//         price: parseInt(price),
//         number: parseInt(number),
//       };
    
//       const newPurchase = commandes.findIndex((item) => item.price === commande.price) // --1
//       if(commandes.length < 1 || newPurchase === -1) {
//         commandes.push(commande)
//       } else {
//         commandes[newPurchase].number += commande.number
//       }
//     // alert(commandes);   
    
    
//     window.alert(`${display()}\n Le sous total est de ${subtotal()} yen`);
// }




// function display() {
//     let string = "";
//     for(let i=0; i<commandes.length; i++){
//       string += `${commandes[i].number} articles pour ${commandes[i].price} yen \n`;
//     }
//     return string;
//   }

// function subtotal() {
//     return commandes.reduce((prev, commande) => {
//       return prev + commande.price * commande.number 
//     }, 0);
//   }

// function calc(){
//     let sum=0;
//     let exp_price=0;
//     for(let i=0;i<commandes.length;i++){
//         sum+=(commandes[i]["price"]*commandes[i]["numb"]);
//     }
//     if(sum<2000&&sum>0)
//     {
//         exp_price=500;
//     }
//     else if(sum>=2000&&sum<=3000)
//     {
//         exp_price=250;
//     }
//     else if(sum>=3000&&sum==0)
//     {
//         exp_price=0
//     }


// alert(`Les frais d'expéditions sont de ${exp_price} yen .\n Le sous total est de ${sum} yen \nLe montant total est de ${sum + exp_price} yen`);
// commandes=[];
// priceElement="";
// numberElement="";
// }

const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let commandes = [];
let produits = [];
let ajout = [];



function add() {
  const price = parseInt(priceElement.value);
  const number = parseInt(numberElement.value);

  function Produit(nom, prix) {
    this.nom = nom;
    this.prix = prix;
  }

  let produit = new Produit("", 0);
  produits.push(produit);

  let produit3 = new Produit("Mélange cremeux", 900);
  produits.push(produit3);

  let produit2 = new Produit("Mélange latté", 700);
  produits.push(produit2);

  let produit1 =  new Produit("Mélange cremeux latté", 1200);
  produits.push(produit1);

  let produit4 = new Produit("Mélange original", 500);
  produits.push(produit4);



console.log(produits);
      let commande = {
          price: parseInt(produits[price].prix),
          number: parseInt(number),
          nom:  produits[price].nom,
        };
        console.log(commande);

        const newPurchase = commandes.findIndex((item) => item.price === commande.price) // --1
        if(commandes.length < 1 || newPurchase === -1) {
          commandes.push(commande)
          ajout.push(display());

        } else {
          commandes[newPurchase].number += commande.number
          ajout.push(display());

        }

  window.alert(`${display()}\n Le sous total est de ${subtotal()} yen`);
  // for(let i=0; i<ajout.length; i++)
  // {

  //   if(ajout[i]==display()){
  //     ajout[i]=display();
  //   }
    
  //   else{
  //     ajout.push(display());
  //   }
  //   console.log(ajout);
  // }
 
}

  // for(let i=0; i<ajout.length; i++)
  // {

  //   if(ajout[i]==display()){
  //     delete  ajout[i];
  //     ajout[i] =display();
  //   }
    
    
  // }

  console.log(ajout);


function display() {
    let string = "";
    for (let i = 0; i < commandes.length; i++) {
        string += `${commandes[i].number} ${commandes[i].nom} pour ${commandes[i].price} yen \n`;
       
    }

  return string;
}
;
// function subtotal() {
//   let sum = 0;
//     for(let i=0; i<purchases.length; i++){
//     sum += purchases[i].price * purchases[i].number;
//   }
//   return sum;
// }

function subtotal() {
    return commandes.reduce((prev, commande) => {
      return prev + commande.price * commande.number 
    }, 0);
  }

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  alert(`${ajout.join("\n")}  est la liste d'ajout final\n Les frais d'expéditions sont de ${postage} yen .\n Le sous total est de ${sum} yen \nLe montant total est de ${sum + postage} yen`);
  commandes = [];
  priceElement.value= "";
  numberElement.value = "";
  ajout=[];
  produits=[];
}

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 1000){
   return 500;
  } else {
   return 250;
  }
}





// function calc() {
//     const price = document.getElementById("product").value;
//     const number = document.getElementById("number").value;
//     // price * number を price + number に変更している
//     window.alert(`${price}円が${number}個。小計は${price + number}円です`);
//   }


// const priceElement = document.getElementById("product");
// const numberElement = document.getElementById("number");

// function calc() {
//   const price = parseInt(priceElement.value);
//   const number = parseInt(numberElement.value);
//   window.alert(`${price}円が${number}個。小計は${price * number}円です`);
// }

