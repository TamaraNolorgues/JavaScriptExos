/* Petit programme de simulation d'une boutique en ligne offrant la possibilitée donc d'inter agir avec l'utilisateur lui permettant
   de voir une liste de produits dont il pourra constituer son caddy puis passer commande.

Fonctionalites:

    1. Voir la liste des produits

    2. Voir le contenu de son caddy

    3. Ajout ou suppression de produits au caddy

    4. Sortir du programme

    5. Passer commande qui revient à afficher le résumé avec une demande confirmation :

       -> RESUME DE VOTRE COMMANDE

         -> id:1 s8 samsung 250€ quantity:2

         -> id:3 ipad apple 350€ quantity:1

         -> prix total de la commande : 850€


*/



// Create class

class Product{

    constructor(id,name,brand,price,quantity){
        this.id = id ;
        this.name = name;
        this.brand = brand ;
        this.price = price ;
        this.quantity = quantity;     
    }
    getId(){
      return this.id.toString() ;
    }
    getName(){
      return this.name.toString();
    }
    getBrand(){
      return this.brand.toString();
    }
    getPrice(){
      return this.price.toString();
    }
    getQuantity(){
      return this.quantity;
    }
    setQuantity(quantity){
      this.quantity = quantity;
    }    

    toString(){
      return this.id + " " + this.name + " " + this.price + "€";
    }

}


// Create array items
let items = [ new Product(1,"s8","samsung",250,1),
              new Product(2 ,"iphone11","apple",800,1),
              new Product(3,"ipad","apple",450,1)     
];


let cart = new Map();
cart.set(1,new Product(1,"s8","samsung",250,1));

total = 0; 
function totalCart(){
  let totalCart = 0;
  for(let item in cart) {
    totalCart += cart[item].getPrice * cart[item].setQuantity;
  }
  return Number(totalCart.toFixed(2));
};



// Program functions
function displayProducts(){
  console.log("********list of products*********")
  items.forEach(p => console.log(p.toString()));
}

function productsCart(){
  console.log("********Items in the cart*********")
  if(cart.size > 0)   cart.forEach(p => console.log(p.toString()));
  else console.log("Your cart is empty")
}

function addProducts(){
  let newProduct = parseInt(prompt("Write the ID of the product",))
  let add=true;  
  if(Number.isNaN(newProduct)){
    alert("This is not a valid number");
  }
  else {
    //cart.forEach(p => console.log(p.toString())); 
    for (const item of items) {  
        if(item.getId() == newProduct){
            if(cart.size > 0) {
              let p = new Product(item.getId(),item.getName(),item.getBrand(),item.getPrice(),item.getQuantity());
              //console.log(p);
              cart.set(item.getId(),p);
              console.log(cart); 
            }
            else {
              cart.forEach(p => {
                if(p.getId() == item.getId()){
                  p.setQuantity(p.getQuantity()+1); 
                  add=false; 
                }                   
              });
            }
            if(add) {
               let prod = new Product(item.getId(),item.getName(),item.getBrand(),item.getPrice(),item.getQuantity());
               cart.set(item.getId(),prod);           
            }
        }
    }
  }
}


function deleteProducts() {
    let menu = parseInt(prompt("Write the ID of the product"));
    cart.forEach(p => {
      if(p.getId() == menu){
          if(cart.size > 0) {
             p.setQuantity(p.getQuantity()-1);
             console.log("Item deleted");

            }
    }
  });
 }


function order(){
  if (cart.size == 0 ){
  console.log("Your cart is empty")
  }
   else{
      cart.forEach(p => console.log(p.toString()));
      console.log("Purchase summary = " + total + "€");       
    if (cart > 0)
      //let c = confirm("Click a button!");
        if (c == true) {
         console.log("Thanks for your order!");     
      }
    }
  }


  
  
// Program starts here
function menu(){

  let menu = 0;
    while (menu != 6) {
      menu = parseInt(prompt("WHAT WOULD YOU LIKE TO DO? \n   1. Check out our products \n   2. Check out the items in your cart \n   3. Add items to your cart \n   4. Delete items from your cart \n   5. Check out  \n   6. Leave store" ));

    if(isNaN(menu) || menu<=0 ||  menu>6){
        alert("invalide input");        
    }
    
    else if(menu == 1) displayProducts();
        
    else if(menu == 2) productsCart(); 
    
    else if(menu == 3) addProducts();

    else if (menu == 4) deleteProducts();

    else if (menu == 5) order();
  }
 }

menu();

