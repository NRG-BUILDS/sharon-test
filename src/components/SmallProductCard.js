import { Link } from "react-router-dom";
import React from "react";

const SmallProductCard = ({ item }) => {
  return (
    <div className="reval grid p-4 grid-cols-3 gap-4 items-center max-w-xs rounded border md:border-0 my-2">
      <Link to={`/item/${item.slug}`}>
        <div className="col-span-1 aspect-square rounded overflow-hidden ">
          <img
            src={`https://pvknoybfrjiypopolmkq.supabase.co/storage/v1/object/public/product_image/${item.slug}.jpg?`}
            alt=""
            className="hover:scale-125 transition-all duration-200  w-full h-full object-contain"
          />
        </div>
      </Link>

      <div className=" col-span-2">
        <Link to={`/item/${item.slug}`}>
          <h4 className="font-semibold hover:text-Green transition-all">
            {item.product_name}
          </h4>
        </Link>

        <div className="flex items-center gap-2">
          {/* <div className=" text-orange-400 text-sm">
            {getRatingIcons(item.rating)}
          </div> */}
          <p className="opacity-50">(50)</p>
        </div>
        <span className="block text-lg font-semibold text-Green">
          ₦{item.price}
        </span>
      </div>
    </div>
  );
};

export default SmallProductCard;
