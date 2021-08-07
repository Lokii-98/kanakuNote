export default function getValue(object, pathForValue, defaultValue) {
  let obj = object;
  let path = pathForValue;
  console.log(object, path, "asdreetyhte", { ...object });
  return object + "." + path ? object + "." + path : defaultValue;
}

export function getDataFromArray(dataArray, params) {
  let objArray;
  const { placeName, placeId } = params;
  dataArray.map((dataObj) => {
    console.log("inside map", dataObj);
    if (dataObj.placesVistied) {
      objArray = checkIfUserVisitedThisPlace(dataObj, placeId, placeName);
    }
  });
  // console.log(
  //   "FunctionName : ",
  //   "getDataFromArray, ",
  //   "Extracted obj from array :",
  //   objArray,
  //   "Input array :",
  //   dataArray
  // );
  return objArray;
}

export const checkIfUserVisitedThisPlace = (dataObj, placeId, placeName) => {
  console.log(
    "inside checkIfUserVisitedThisPlace fn",
    "Input Data -",
    dataObj,
    "placeId",
    placeId,
    "palceName",
    placeName
  );
  let userObj = {};
  let userArray = [];
  dataObj.placesVistied.map((placeObj) => {
    console.log(
      "Inside array obj",
      placeObj,
      "data",
      placeObj.placeId === placeId,
      placeObj.placeName === placeName
    );
    if (placeObj.placeId === placeId && placeObj.placeName === placeName) {
      userObj.placeId = placeObj.placeId;
      userObj.placeName = placeObj.placeName;
      userObj.userName = dataObj.name;
      userObj.userId = dataObj.userId;
      userObj.dateVisited = placeObj.visitedOn;
      console.log("User Object", userObj);
      userArray.push(userObj);
    }
  });
  // console.log(
  //   "GetUserData if user visited that place",
  //   " ",
  //   "userArray :",
  //   userArray,
  //   "Input Obj: ",
  //   dataObj
  // );
  return userArray;
};
