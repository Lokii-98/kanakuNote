import MarkerStyle from "./commonComponentStyles/favouriteMarkerStyle.module.css";
import Favourite from "../images/star.png";
import Image from "next/image";

export default function FavouriteMarker(props) {
  let { isFavourite } = props;
  let className = isFavourite
    ? MarkerStyle.favouriteMarked
    : MarkerStyle.favouriteNotMarked;
  return (
    <div className={className}>
      <Image src={Favourite} alt="FavouriteMarker" />
    </div>
  );
}
