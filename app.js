let AllButtons = document.querySelectorAll('.button');
let cartValue = document.getElementById('cart-value');
let cartDiv = document.getElementById('cart');
let cartItems = [];
let total_quantity = 0;
const items  = [
    {
        item :"This was our pact",
        numberof : 0,
        cost : 7.49
    },
    {
        item :"The famous five",
        numberof : 0,
        cost : 4.50
    },
    {
        item :"Matlida",
        numberof : 0,
        cost : 6.80
    },
    {
        item :"Harry Potter",
        numberof : 0,
        cost : 10
    },
    {
        item :"For Young Readers",
        numberof : 0,
        cost : 7.29
    },
    {
        item :"Wimpy Kid-DIY",
        numberof : 0,
        cost : 4.99
    },
    {
        item :"Dart Board",
        numberof : 0,
        cost : 17.49
    },
    {
        item :"Connect 4",
        numberof : 0,
        cost : 19.99
    },
    {
        item :"Jenga",
        numberof : 0,
        cost : 20.99
    },
    {
        item :"Monopoly",
        numberof : 0,
        cost : 19.49
    },
    {
        item :"Bookmarks",
        numberof : 0,
        cost : 12.49
    },
    {
        item :"Birthday card",
        numberof : 0,
        cost : 19.99
    },
    {
        item :"Stuffed toys",
        numberof : 0,
        cost : 15.99
    },
    {
        item :"Dream catcher drawing",
        numberof : 0,
        cost : 18.49
    }
];

for(let i = 0;i <AllButtons.length;i++) {
    AllButtons[i].onclick= () => {
     total_quantity++
     cartValue.innerHTML = total_quantity
     if (items[i].numberof==0){
         cartItems.push(items[i])
     }
     items[i].numberof++
    } 
 }
 var t = 0
 cartDiv.onclick=()=>{
    cartItems.map((v,i)=>{
         console.log(i+1+".","Name: "+v.item,"quantity: "+v.numberof)
         t+=v.numberof*v.cost
     })
     console.log("total bill: $"+ t )
 }