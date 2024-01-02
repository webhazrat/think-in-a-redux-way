export default function Billing({ carts }) {
  const total =
    carts.length > 0
      ? carts.reduce((total, item) => item.qty * item.price + total, 0)
      : 0;
  return (
    <>
      <div className="billDetailsCard">
        <h4 className="mt-2 mb-8 text-xl font-bold text-center">
          Bill Details
        </h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p>Sub Total</p>
            <p>
              BDT <span className="lws-subtotal">{total}</span>
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p>Discount</p>
            <p>
              BDT <span className="lws-discount">0</span>
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p>VAT</p>
            <p>
              BDT <span className="vat">0</span>
            </p>
          </div>

          <div className="flex items-center justify-between pb-4">
            <p className="font-bold">TOTAL</p>
            <p className="font-bold">
              BDT <span className="lws-total">{total}</span>
            </p>
          </div>
          <button className="placeOrderbtn">place order</button>
        </div>
      </div>
    </>
  );
}
