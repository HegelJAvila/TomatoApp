import React, { useContext } from 'react'
import '../Cart/Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Artículos</p>
          <p>Nombre</p>
          <p>Precio</p>
          <p>Cantidad</p>
          <p>Total</p>
          <p>Eliminar</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p className='name-item'>{item.name}</p>
                  <p>${item.price}</p>
                  <p className='quantity'>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Total de Carrito</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal </p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Servicio de Envío</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total </b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEDER A ENVÍO</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Introduce código promocional</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Promo code' />
              <button>Enter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
