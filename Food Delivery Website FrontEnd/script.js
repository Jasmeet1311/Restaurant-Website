const product=[
    {
        id:0,
        image:'burger.jpg',
        title:'Cheesy Delight Burger',
        price:85,
    },
    {
        id:1,
        image:'pizza.jpg',
        title:'Veggie Paradise Pizza',
        price:359,
    },
    {
        id:2,
        image:'sandwich.jpg',
        title:'Bombay Sandwich',
        price:59,
    },
    {
        id:3,
        image:'noodles.jpg',
        title:'Singapore Noodles',
        price:85,
    },
    {
        id:4,
        image:'pasta.jpg',
        title:'Penne Alfredo Pasta',
        price:359,
    },
    {
        id:5,
        image:'dosa.jpg',
        title:'Dosa',
        price:159,
    },
    {
        id:6,
        image:'blueberry-pastries.jpg',
        title:'Blueberry Pastries',
        price:159,
    },
    {
        id:7,
        image:'Chocolate-Cake.jpg',
        title:'Chocolate Cake',
        price:159,
    },
    {
        id:8,
        image:'Cup-cake.jpg',
        title:'Chocolate cup cake',
        price:159,
    },
    {
        id:9,
        image:'Cheesecake.jpg',
        title:'Raspberry Cheesecake',
        price:159,
    },
    {
        id:10,
        image:'Red-Velvet.jpg',
        title:'Red Velvet Cake',
        price:159,
    },
    {
        id:11,
        image:'ice-cream.jpg',
        title:'Delight IceCream',
        price:159,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='pro-box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>₹ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "₹ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "₹ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>₹ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }}
    function toggleHide(){
        let orderForm = document.getElementById('orderForm');
        if (cart.length == 0) {
            alert("Cart is Empty. Try adding some items in your cart")
        } 
        else{
            if(orderForm.style.display != 'none'){
            orderForm.style.display = 'none';
            }
            else{
            orderForm.style.display = 'block';
            }
        }
    }
    function validateForm() {
        var x = document.forms["myForm"]["name"].value;
        if (x == null || x == "") {
            alert("Form must be filled out");
            return false;
        }
        else{
            alert("Your order is confirmed");
            window.location.reload();
        }
    }
      
   