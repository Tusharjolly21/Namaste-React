import { CDN_URL } from "../utils/constans";

const ResCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    locality,
    cuisines,
    costForTwo,
    avgRating,
    totalRatingsString,
  } = resData?.info;
  return (
    <div className="res-card">
      <div className="res-card-image">
        <img
          className="res-image"
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant"
        />
      </div>
      <div className="res-card-info">
        <h3>{name}</h3>
        <p>{locality}</p>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
        <p>Rating- {avgRating}</p>
        <p>Total Rating- {totalRatingsString}</p>
      </div>
    </div>
  );
};
export default ResCard;
