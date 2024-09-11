import React, { useContext } from 'react'
import '../PlaceOrder/PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Domicilio</p>
        <div className="multi-fields">
          <input type="text" placeholder='Nombre' />
          <input type="text" placeholder='Apellido' />
        </div>
        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Calle' />
        <div className="multi-fields">
          <input type="text" placeholder='Ciudad' />
          <input type="text" placeholder='Estado' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Código Postal' />
          <input type="text" placeholder='País' />
        </div>
        <input type="text" placeholder='Celular' />
      </div>
      <div className="place-order-right">
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
          <button >PROCEDER A PAGAR</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
