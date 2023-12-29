const getImgUrl = (name) => {
  const img = new URL(`../assets/images/icons/${name}`, import.meta.url).href;
  return img;
};

const Icons = ({ name, style }) => {
  return (
    <img
      src={require("../assets/images/icons/" + name)}
      alt=""
      className={style}
    />
  );
};

export default Icons;
