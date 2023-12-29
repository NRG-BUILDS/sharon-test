import { Link } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty, removeItem } from "../../redux/cart";
import { useEffect, useState } from "react";
import Checkout from "../Checkout/Checkout";

const Cart = () => {
  const [openCheckoutModal, setOpenCheckoutModal] = useState(false);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const { list } = useSelector((state: any) => state.cartList);
  const getTotal = () => {
    let total = 0;
    for (let i in list) {
      total += list[i].price * list[i].qty;
    }
    return total;
  };
  //   const list = [
  //     {
  //       product_name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
  //       rating: 3.4,
  //       produced_by: "Sharon Bovea Farms",
  //       price: 2400,
  //       category: "Pet Food",
  //       promo_tag: "20% Off Deal",
  //     },
  //     {
  //       product_name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
  //       rating: 3.4,
  //       produced_by: "Sharon Bovea Farms",
  //       price: 2400,
  //       category: "Pet Food",
  //       promo_tag: "20% Off Deal",
  //     },
  //     {
  //       product_name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
  //       rating: 3.4,
  //       produced_by: "Sharon Bovea Farms",
  //       price: 4500,
  //       category: "Pet Food",
  //       promo_tag: "20% Off Deal",
  //     },
  //     {
  //       product_name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
  //       rating: 3.4,
  //       produced_by: "Sharon Bovea Farms",
  //       price: 2400,
  //       category: "Pet Food",
  //       promo_tag: "Hot Deal",
  //     },
  //     {
  //       product_name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
  //       rating: 3.4,
  //       produced_by: "Sharon Bovea Farms",
  //       price: 2400,
  //       category: "Pet Food",
  //       promo_tag: "Christmas Offer",
  //     },
  //   ];
  return (
    <section className="px-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-2">
        <h2 className="text-4xl font-bold">Cart</h2>
      </div>
      {/* CART DISPLAY WHEN NOT EMPTY */}
      <div className="my-8">
        {list.length != 0 && (
          <>
            <div className="flex gap-4 flex-wrap">
              {list.map((item) => (
                <CartCard item={item} key={item.created_at} list={list} />
              ))}
            </div>

            <div className="my-10">
              <div className="py-4 flex justify-between items-end">
                <p className="text-xl opacity-60">Total:</p>
                <p className="text-3xl font-bold">₦{getTotal()}</p>
              </div>
              <button
                onClick={() => setOpenCheckoutModal(true)}
                className="block bg-Green text-white p-4 font-bold w-full rounded active:bg-slate-700"
              >
                Checkout
              </button>
            </div>
          </>
        )}

        {/* CART DISPLAY WHEN CART EMPTY */}
        {list.length === 0 && (
          <div className="h-96 flex justify-center items-center">
            <Link to="/">
              <div className="text-center text-gray-400 hover:text-Green transition-all">
                <i className="fa-solid fa-cart-shopping mt-6 text-9xl"></i>
                <h2 className="text-3xl font-bold">Nothing here yet... </h2>
                <p>Click here to go back to shop.</p>
              </div>
            </Link>
          </div>
        )}
      </div>
      {openCheckoutModal ? <Checkout setModal={setOpenCheckoutModal} /> : null}
    </section>
  );
};

const CartCard = ({ item, list }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-white max-w-md shadow rounded-md gap-2 p-4 my-4 flex justify-between">
        <div className="w-2/5">
          <img
            src={`https://pvknoybfrjiypopolmkq.supabase.co/storage/v1/object/public/product_image/${item.slug}.jpg?`}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="py-4 w-2/5">
          <p className="text-xl font-bold">{item.product_name}</p>

          <div className="rounded border-Green border-2 p-1 flex w-fit items-center gap-6 my-4">
            <button
              onClick={() => {
                dispatch(decreaseQty(list.indexOf(item)));
              }}
              className="opacity-60 font-bold"
            >
              <i className="fa-solid fa-caret-down"></i>
            </button>
            <span className="text-Green font-bold">{item.qty}</span>
            <button
              onClick={() => {
                dispatch(increaseQty(list.indexOf(item)));
              }}
              className="opacity-60 font-bold"
            >
              <i className="fa-solid fa-caret-up"></i>
            </button>
          </div>
          <span className="text-Green font-semibold">
            <small className="opacity-60 text-black text-xs">PER UNIT </small>₦
            {item.price}
          </span>
          <span className="font-semibold text-Green block">
            <small className="text-xs text-black opacity-50 mr-1">
              ({item.qty}x)
            </small>
            ₦{item.price * item.qty}
          </span>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => dispatch(removeItem(list.indexOf(item)))}
            className="bg-green-200 text-Green p-2 rounded-full flex items-center justify-center aspect-square w-8"
          >
            <i className="fa-solid fa-close"></i>
          </button>
        </div>
      </div>
    </>
  );
};
export default Cart;
