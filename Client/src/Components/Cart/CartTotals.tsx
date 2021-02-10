import React from "react";

// Redux
import { IAppState } from "../../Redux/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../Redux/product/productAction";

const CartTotals = ({ history }) => {
  const dispatch = useDispatch();
  const selectSubTotal = useSelector((state: IAppState) => state.product.cartSubTotal);
  const selectTax = useSelector((state: IAppState) => state.product.cartTax);

  const renderTotal = (sub, tax) => {
    let subNumb = Number(sub);
    let taxNumb = Number(tax);

    return parseFloat((subNumb + taxNumb) as any).toFixed(2);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-title text-center my-4">
            <button className="btn btn-outline-danger text-capitalize mb-4" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
            <h5>subTotal: {selectSubTotal} CHF</h5>
            <h5>tax : {selectTax} CHF</h5>
            <h5>total: {renderTotal(selectSubTotal, selectTax)} CHF</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotals;

// =================================================================
