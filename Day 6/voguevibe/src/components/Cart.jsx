function Cart({ cart }) {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items added.</p>
      ) : (
        cart.map(item => (
          <div key={item.id}>
            {item.name} - ₹{item.price}
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;