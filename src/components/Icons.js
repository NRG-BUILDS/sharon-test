const getImgUrl = (name) => {
  const img = new URL(`../assets/images/icons/${name}`, import.meta.url).href;
  return img;
};

const Icons = ({ name, style }) => {
  return <img src={getImgUrl(name)} alt="" className={style} />;
};

export default Icons;
