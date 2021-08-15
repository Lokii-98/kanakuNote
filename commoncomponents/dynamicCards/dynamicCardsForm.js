import getValue from "../../utils/commonUtils";
import PlaceData from "./formData/palceData";
import UserTripData from "./formData/userTripData";
import CONSTANTS from "../../utils/constants";

export default function DynamicForm(props) {
  let { dataObj } = props;
  // console.log(
  //   "dynamicForm and its data",
  //   props.dataObj,
  //   "Page Name",
  //   props.pageName
  // );
  let buttonName = "";
  let link = "";

  if (props.pageName === CONSTANTS.HOME_PAGE) {
    buttonName = `Open ${props.dataObj.placeName} details`;
    link = `../usersData/${props.dataObj.placeName}/${props.dataObj.placeId}`;
    return (
      <PlaceData
        dataObj={props.dataObj}
        buttonName={buttonName}
        btnLink={link}
      />
    );
  } else if (props.pageName === CONSTANTS.USER_TRIP_EXPENSE) {
    buttonName = `Open ${props.dataObj.userName} Expenses`;
    link = `../expensesTable/personExpensesTable/${props.dataObj.userName}/${props.dataObj.placeId}`;
    // console.log("Trip Expense is true", buttonName, link);
    return (
      <UserTripData
        dataObj={props.dataObj}
        buttonName={buttonName}
        btnLink={link}
      />
    );
  } else if (props.pageName === CONSTANTS.INDIVIDUAL_USER_PAGE) {
    buttonName = `Open ${props.dataObj.name} details`;
    link = `../usersData/personDetails/${props.dataObj.userId}`;
    return (
      <UserTripData
        dataObj={props.dataObj}
        buttonName={buttonName}
        btnLink={link}
      />
    );
  }
}
