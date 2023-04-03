import { MdClose } from "react-icons/md";
function Cart(props) {
    return (
      <div className="dropdown">
        <div className="cart" onClick={e=>{e.stopPropagation()}}>
          <div className="cart-header">
            <h5 className="cart-title">Your Cart</h5>
            <button type="button" className="btn-close" onClick={props.handleCart}>
              <MdClose />
            </button>
          </div>
          <div className="cart-body">
            {props.items.length ? (
              props.items
            ) : (
              <div className="empty-state">
                <p>No items found</p>
                <button className="go-shopping-btn medium-button">
                  Start shopping
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

export default Cart;
