import "./CartWidget.css"
function CartWidget({amount}){
    return(
        <div className="container">
            <img className="imagen" src="https://static.vecteezy.com/system/resources/previews/019/787/045/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt="hola"/>
            <span className="badge text-bg-danger">{amount}</span>
        </div>
    )
}

export default CartWidget
