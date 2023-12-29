import { useEffect, useState } from "react";
import { getRatingIcons } from "../utils";
import { Link } from "react-router-dom/cjs/react-router-dom";

export const ProductCard = ({ item }) => {
  const [tagColor, setTagColor] = useState();
  useEffect(() => {
    setTagColor(Math.floor(Math.random() * 10));
  }, []);
  const isOdd = (num) => {
    if (num % 2 === 0) return false;
    return true;
  };
  return (
    <div className="slide_u relative max-w-[300px] md:max-w-[250px] border border-gray- rounded-xl overflow-clip p-6">
      <Link to={"/item/" + item.slug}>
        <img
          src={`https://pvknoybfrjiypopolmkq.supabase.co/storage/v1/object/public/product_image/${item.slug}.jpg?`}
          alt=""
          className="rounded-md w-full aspect-square object-contain mb-1"
        />
        {/* <img
          src={require("../assets/images/products/product-2.jpg")}
          alt=""
          className="rounded-md w-full aspect-square object-cover mb-1"
        /> */}
      </Link>
      <div>
        <small className="opacity-60 font-semibold">{item.category}</small>
        <h4 className="font-bold my-2 text-lg leading-none">
          {item.product_name}
        </h4>
        <p className="mb-2">{getRatingIcons(item.rating)}</p>
        <p>
          By <span className="text-Green">{item.produced_by}</span>
        </p>

        <div className="pt-4 flex justify-between items-center text-Green">
          <div className="flex gap-2 items-center">
            <span className="font-bold text-lg">₦{item.price}</span>

            <del className="font-bold text-gray-300 text-sm">
              ₦{item.price * 0.2}
            </del>
          </div>
          <Link to={"/item/" + item.slug}>
            <button className="bg-green-200 bg-opacity-50 text-sm font-semibold p-2 px-4">
              View
            </button>
          </Link>
        </div>
        <div
          className={
            "absolute top-0 left-0 rounded-br-xl text-sm font-semibold text-white p-2 " +
            (isOdd(tagColor) ? "bg-pink-400" : "bg-Green")
          }
        >
          <span>{item.promo_tag && item.promo_tag}</span>
        </div>
      </div>
    </div>
  );
};
