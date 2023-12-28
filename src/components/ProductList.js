import { ProductCard } from "./ProductCard";

const ProductList = ({ list }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {list.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
