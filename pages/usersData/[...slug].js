import { getDataFromArray } from "../../utils/commonUtils";
import { useRouter } from "next/router";
import Head from "next/head";
import DynamicCards from "../../commoncomponents/dynamicCards/dynamicCards";
import CONSTANTS from "../../utils/constants";
import tableStyle from "../../commoncomponents/commonComponentStyles/expenseTableStyle.module.css";
import Button from "../../commoncomponents/button";
import { useContext, useEffect, useState } from "react";
import ButtonContext from "../../store/button-context";
import AddOrUpdateCards from "../../commoncomponents/addOrUpdate/addOrUpdateCard";

export default function TripDetails() {
  const dummyData = [
    {
      _id: "",
      userId: "Magesh4321",
      name: "Magesh",
      mailid: "mageshKoutlook@gmail.com",
      phonenumber: "+91 987654321",
      photo: "",
      dob: "15-10-1998",
      address: "Duabi, Dubai Main Road, Dubai Kuruku Santhu",
      placesVistied: [
        {
          _id: "",
          placeId: "Coorg01",
          placeName: "Coorg",
          tripStarted: "24-01-2021",
          tripEnded: "28-01-2021",
        },
      ],
    },
  ];

  const router = useRouter();

  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }
  const placeName = filterData[0];
  const placeId = filterData[1];
  console.log("URL path", filterData);

  const [openAddUserModel, setOpenAddUserModel] = useState(false);
  const btnContxet = useContext(ButtonContext);
  let btnEvents = btnContxet.btnEventData;

  useEffect(() => {
    if (btnEvents && btnEvents.clickedBtnName === CONSTANTS.CANCEL_BTN) {
      // console.log("cancel btn clicked");
      setOpenAddUserModel(false);
    }
  }, [btnEvents]);

  function addNewUserHandler() {
    setOpenAddUserModel(true);
  }
  if (openAddUserModel) {
    return <AddOrUpdateCards cardName={CONSTANTS.ADD_NEW_USER_BTN} />;
  }

  // console.log(
  //   "Slug Path",
  //   filterData,
  //   "PlaceName:",
  //   placeName,
  //   "placeId: ",
  //   placeId
  // );

  let userDataArray = getDataFromArray(dummyData, { placeName, placeId });
  // console.log("UserDataArray after filter", userDataArray);
  return (
    <div>
      <Head>
        <title>Kanaku Note </title>
        <meta name="description" content="Expense Book" />
      </Head>
      <div>
        <DynamicCards
          placesArray={userDataArray}
          pageName={CONSTANTS.USER_TRIP_EXPENSE}
        />
        <div className={tableStyle.addNewPlaceBtn}>
          <Button
            btnName={CONSTANTS.ADD_NEW_USER_BTN}
            onClickHandler={addNewUserHandler}
          />
        </div>
        {/* <div>{dummyData[0].name}</div> */}
      </div>
    </div>
  );
}
