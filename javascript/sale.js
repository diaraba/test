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

let priceElement= document.getElementById("product");
let numberElement= document.getElementById("number");
let commandes=[];


function add(){
    const price= parseInt(priceElement.value);
    const numb= parseInt(numberElement.value);
    let commande={
    price:price,
    numb:numb,
    };
    commandes.push(commande);
    // alert(commandes);    
}

function calc(){
    let sum=0;
    for(let i=0;i<commandes.length;i++){
        sum+=(commandes[i]["price"]*commandes[i]["numb"]);
    }

alert(`Le montant total est de ${sum}yen`);
commandes=[];
priceElement="";
numberElement="";
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

