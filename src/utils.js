export const getImgUrl = (name, folder) => {
  return `./assets/images/${folder}/${name}`;
};
export const getRatingIcons = (rating) => {
  let stars = Math.floor(rating);
  let arr = [];
  for (let i = 0; i < stars; i++) {
    arr.push(<StarIcon />);
  }
  return arr;
};

const StarIcon = () => {
  return <i className="fa-solid fa-star text-orange-300"></i>;
};
