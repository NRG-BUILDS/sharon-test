import React, { useEffect, useState } from "react";
import { getImgUrl, getRatingIcons } from "../../utils";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import supabase from "../../config/supabaseClient";
import SmallProductCard from "../../components/SmallProductCard";
import { addItem } from "../../redux/cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";

const ItemPage = () => {
  const { itemSlug } = useParams();

  const [tableView, setTableView] = useState("description");
  const [qty, setQty] = useState(1);
  const [item, setItem] = useState(null);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scroll(0, 0);
    const getItem = async () => {
      const { data, error } = await supabase
        .from("Products")
        .select()
        .eq("slug", itemSlug);

      if (error) {
        setError("Couldn't fetch store");
        console.log(error);
      }
      if (data) {
        setItem(data[0]);
        setError(null);
      }
    };
    getItem();
  }, []);

  // const [item, setItem] = useState({
  //   name: "Hos's Grilled Chicken 1kg",
  //   pic: "product-2.jpg",
  //   link: "/",
  //   rating: 3.5,
  //   category: "Chicken",
  //   price: 6000.9,
  //   description:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi..",
  //   qty: 1,
  //   stock: 200,
  // });

  const NotifMessage = () => (
    <Link to={"/cart"}>
      <div>
        <p className="text-lg font-bold">Item added to cart</p>
        <span className="opacity-60">Click here to open cart</span>
      </div>
    </Link>
  );
  const notify = () => toast.success(NotifMessage);
  const decreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    } else {
      setQty(1);
    }
  };
  const increaseQty = () => {
    setQty(qty + 1);
  };
  const relatedProducts = [
    {
      name: "Hos's Grilled Chicken 1kg",
      pic: "product-1.jpg",
      link: "/item",
      rating: 3.5,
      category: "Chicken",
      price: 6000.9,
    },
    {
      name: "Over fresh Bread 1 Loaf",
      pic: "product-2.jpg",
      link: "/item",
      rating: 3.5,
      category: "Bread",
      price: 1500.9,
    },
    {
      name: "Hos's Grilled Beef 1kg",
      pic: "product-3.jpg",
      link: "/item",
      rating: 3.5,
      category: "Beef",
      price: 4500.9,
    },
  ];
  return (
    <>
      {item && (
        <main className=" max-w-7xl p-4">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-block mr-2 font-semibold  opacity-90 text-Green hover:text-orange-400"
            >
              Home
            </Link>
            &gt;
            <Link
              to={"/category/" + item.category}
              className="inline-block mx-2 font-semibold  opacity-90 text-Green hover:text-orange-400"
            >
              {item.category}
            </Link>
            &gt;
            <span className="inline-block mx-2 font-semibold  opacity-90 ">
              {item.product_name}
            </span>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-8 gap-4">
            <div className="h-96 col-span-3 rounded lg border flex items-center justify-center">
              <div className=" h-80 w-full">
                <img
                  src={`https://pvknoybfrjiypopolmkq.supabase.co/storage/v1/object/public/product_image/${item.slug}.jpg?t=2023-12-28T09%3A26%3A30.562Z`}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className=" col-span-3 rounded lg border p-4">
              <h2 className="text-2xl font-bold">{item.product_name}</h2>
              <div className="py-4 flex gap-2">
                <div className="flex items-center text-orange-400">
                  {getRatingIcons(Number(item.rating))}
                </div>
              </div>
              <div className="py-6 flex w-full flex-wrap items-end gap-2">
                <span className="text-Green text-5xl leading-none my-0 font-extrabold">
                  ₦{item.price}
                </span>
                <span className="text-gray-400 text-xl  font-extrabold">
                  <del>₦{item.price * 1.3}</del>
                </span>
              </div>
              <div>
                <p>{item.description.slice(0, 40)}...</p>
              </div>
              <div className="my-8">
                <div className="rounded border-Green border-2 p-4 flex w-fit items-center gap-6">
                  <button
                    onClick={() => decreaseQty()}
                    className="opacity-60 font-bold"
                  >
                    <i className="fa-solid fa-caret-down"></i>
                  </button>
                  <span className="text-Green font-bold">{qty}</span>
                  <button
                    onClick={() => increaseQty()}
                    className="opacity-60 font-bold"
                  >
                    <i className="fa-solid fa-caret-up"></i>
                  </button>
                </div>
                <div className="my-4">
                  {item.in_stock > 1 && (
                    <button
                      onClick={() => {
                        dispatch(addItem({ ...item, qty: qty }));
                        notify();
                      }}
                      className="p-4 bg-Green text-white rounded flex items-center justify-center gap-2"
                    >
                      <img
                        src={getImgUrl("icon-cart.svg", "icons")}
                        alt=""
                        className="w-6 stroke-white"
                      />
                      <span>Add to Cart</span>
                    </button>
                  )}
                  {item.in_stock < 1 && (
                    <button
                      onClick={() => {
                        toast.error("This product is currently unavailable");
                      }}
                      className="p-4 bg-orange-400 text-white rounded flex items-center justify-center gap-2"
                    >
                      <span>Out of Stock!</span>
                    </button>
                  )}
                </div>
                <div className=" columns-2  my-8">
                  <p className="mb-2">
                    Category:{" "}
                    <span className="text-Green">{item.category}</span>
                  </p>
                  <p className="mb-2">
                    Tags: <span className="text-Green">{item.category}</span>
                  </p>
                  <p className="mb-2">
                    Stock: <span className="text-Green">{item.in_stock}</span>
                  </p>
                  <p className="mb-2">
                    Weight: <span className="text-Green">{item.weight}</span>
                  </p>
                </div>
              </div>
            </div>

            {<RelatedProducts category={item.category} />}
          </section>

          <section className="my-8">
            <div className="border rounded-lg p-4 md:p-8">
              <div className="flex gap-4 items-center p-4 border-b overflow-auto w-full">
                <button
                  onClick={() => {
                    setTableView("description");
                  }}
                  className={
                    "p-2 px-4 rounded-full border font-bold " +
                    (tableView === "description"
                      ? "shadow text-Green"
                      : "text-gray-400")
                  }
                >
                  Description
                </button>
                <button
                  onClick={() => {
                    setTableView("reviews");
                  }}
                  className={
                    "p-2 px-4 rounded-full border font-bold " +
                    (tableView === "reviews"
                      ? "shadow text-Green"
                      : "text-gray-400")
                  }
                >
                  Reviews
                </button>
              </div>
              <div className="py-8">
                {tableView === "description" && (
                  <div className="">
                    <p>{item.description}</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
      )}
      {/* {isPending && (
        <div className="h-screen">
          <Loader message="" />
        </div>
      )} */}
    </>
  );
};

export default ItemPage;

const RelatedProducts = ({ category }) => {
  console.log(category);
  const [relItems, setRelItems] = useState(null);

  useEffect(() => {
    const getRelatedItems = async () => {
      console.log("hey");
      const { relItemsRes, error } = await supabase
        .from("Products")
        .select()
        .eq("category", category);

      if (relItemsRes) {
        setRelItems(relItemsRes);
        console.log(relItemsRes);
      }
      if (error) {
        console.log(error);
      }
    };
    getRelatedItems();
  }, []);

  return (
    <>
      <div className=" col-span-2 rounded-lg shadow-xl border p-4">
        {relItems && (
          <>
            <h2 className="text-2xl font-bold mb-4 px-4">Related Products</h2>
            {relItems.map((item) => (
              <div className="md:border-b">
                <SmallProductCard item={item} key={item.id} />
              </div>
            ))}
          </>
        )}
        {!relItems && <Loader message="Loading related items" />}
      </div>
    </>
  );
};
