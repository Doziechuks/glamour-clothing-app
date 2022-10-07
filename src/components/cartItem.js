import './cartItem.css'

const CartItem = ({ item }) => {
  const { quantity, imageUrl, id, name, price} = item;
  return ( 
    <div className="item-wrapper" key={id}>
      <img src={imageUrl} alt={name} className='cart-image'/>
      <div className="others">
        <h4>{name}</h4>
        <p>{quantity} x ${price}</p>
      </div>
    </div>
   );
}
 
export default CartItem;