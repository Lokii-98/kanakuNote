import DynamicFormStyles from "../dynamicCardsStyles.module.css";
import FavouriteMarker from "../../favouriteMarker";
import Button from "../../button";

import CONSTANTS from "../../../utils/constants";

export default function UserTripData(props) {
  return (
    <li className={DynamicFormStyles.dcSize}>
      <div className={DynamicFormStyles.dcFlex}>
        <div className={DynamicFormStyles.dcFavourite}>
          <FavouriteMarker isFavourite={true} />
        </div>
        <label className={DynamicFormStyles.dcTitle}>
          {CONSTANTS.USER_NAME}:{" "}
        </label>
        <div className={DynamicFormStyles.dcContent}>
          {" "}
          {props.dataObj.userName}
        </div>
      </div>
      <div className={DynamicFormStyles.dcFlex}>
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
          {CONSTANTS.TRIP_STARTED}:
        </label>
        <div className={DynamicFormStyles.dcContent}>
          {" "}
          {props.dataObj.tripStarted}
        </div>
      </div>
      <div className={DynamicFormStyles.dcFlex}>
        <label className={DynamicFormStyles.dcTitle}>
          {CONSTANTS.TRIP_ENDED}:
        </label>
        <div className={DynamicFormStyles.dcContent}>
          {" "}
          {props.dataObj.tripEnded}
        </div>
      </div>

      <div className={DynamicFormStyles.dcPlaceOpenButton}>
        <Button btnName={props.buttonName} btnLink={props.btnLink} />
      </div>
    </li>
  );
}
