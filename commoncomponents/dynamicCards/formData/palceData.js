import DynamicFormStyles from "../dynamicCardsStyles.module.css";
import FavouriteMarker from "../../favouriteMarker";
import Button from "../../button";

import CONSTANTS from "../../../utils/constants";

export default function PlaceData(props) {
  console.log(
    "placeData",
    "btnName:",
    props.buttonName,
    "btnLink",
    props.btnLink
  );
  return (
    <li className={DynamicFormStyles.dcSize}>
      <div className={DynamicFormStyles.dcFlex}>
        <div className={DynamicFormStyles.dcFavourite}>
          <FavouriteMarker isFavourite={true} />
        </div>
        <label className={DynamicFormStyles.dcTitle}>
          {CONSTANTS.PLACE_VISITED}:{" "}
        </label>
        <div className={DynamicFormStyles.dcContent}>
          {" "}
          {props.dataObj.placeName}
        </div>
      </div>
      <div className={DynamicFormStyles.dcFlex}>
        <label className={DynamicFormStyles.dcTitle}>
          {CONSTANTS.VISITED_ON}:
        </label>
        <div className={DynamicFormStyles.dcContent}>
          {" "}
          {props.dataObj.dateVisited}
        </div>
      </div>
      <div className={DynamicFormStyles.dcFlex}>
        <label className={DynamicFormStyles.dcTitle}>
          {CONSTANTS.TRAVEL_REASON}
        </label>
        <div className={DynamicFormStyles.dcContent}>
          {" "}
          {props.dataObj.occasion}
        </div>
      </div>
      <div className={DynamicFormStyles.dcButton}>
        <Button btnName={props.buttonName} btnLink={props.btnLink} />
      </div>
    </li>
  );
}
