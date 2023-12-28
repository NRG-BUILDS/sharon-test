import { useEffect, useState } from "react";
import ProductList from "../../../components/ProductList";
import supabase from "../../../config/supabaseClient";

const Store = () => {
  const [list, setList] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getList = async () => {
      const { data, error } = await supabase.from("Products").select();

      if (error) {
        setError("Couldn't fetch store");
        console.log(error);
      }
      if (data) {
        setList(data);
        setError(null);
        console.log(data);
      }
    };
    getList();
  }, []);
  // const list = [
  //   {
  //     product_name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
  //     rating: 3.4,
  //     produced_by: "Sharon Bovea Farms",
  //     price: 2400,
  //     category: "Pet Food",
  //     promo_tag: "20% Off Deal",
  //   },
  //   {
  //     product_name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
  //     rating: 3.4,
  //     produced_by: "Sharon Bovea Farms",
  //     price: 2400,
  //     category: "Pet Food",
  //     promo_tag: "20% Off Deal",
  //   },
  //   {
  //     product_name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
  //     rating: 3.4,
  //     produced_by: "Sharon Bovea Farms",
  //     price: 4500,
  //     category: "Pet Food",
  //     promo_tag: "20% Off Deal",
  //   },
  //   {
  //     product_name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
  //     rating: 3.4,
  //     produced_by: "Sharon Bovea Farms",
  //     price: 2400,
  //     category: "Pet Food",
  //     promo_tag: "Hot Deal",
  //   },
  //   {
  //     product_name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
  //     rating: 3.4,
  //     produced_by: "Sharon Bovea Farms",
  //     price: 2400,
  //     category: "Pet Food",
  //     promo_tag: "Christmas Offer",
  //   },
  // ];
  return (
    <>
      <section className="py-28 px-4 bg-white">
        <h2 className="text-3xl">The Agribusiness Store</h2>
        <div className="my-4">{list && <ProductList list={list} />}</div>
      </section>
    </>
  );
};

export default Store;
