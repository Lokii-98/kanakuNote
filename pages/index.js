import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { getPlacesData } from "../utils/apiUtils/placesApiUtils";
import DynamicCards from "../commoncomponents/dynamicCards/dynamicCards";
import CONSTANTS from "../utils/constants";
import Button from "../commoncomponents/button";
import tableStyle from "../commoncomponents/commonComponentStyles/expenseTableStyle.module.css";
import AddOrUpdateCards from "../commoncomponents/addOrUpdate/addOrUpdateCard";
import ButtonContext from "../store/button-context";

export default function Home(props) {
  let placesFromDb = props.placesFromDb;
  const [openAddPlaceModel, setOpenAddPlaceModel] = useState(false);
  const btnContxet = useContext(ButtonContext);
  let btnEvents = btnContxet.btnEventData;

  useEffect(() => {
    if (btnEvents && btnEvents.clickedBtnName === CONSTANTS.CANCEL_BTN) {
      // console.log("cancel btn clicked");
      setOpenAddPlaceModel(false);
    }
  }, [btnEvents]);

  function addNewPlaceHandler() {
    setOpenAddPlaceModel(true);
  }
  if (openAddPlaceModel) {
    return <AddOrUpdateCards cardName={CONSTANTS.ADD_NEW_PLACE_BTN} />;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Kanaku Note</title>
        <meta name="description" content="Expense Book" />
      </Head>
      <div>
        <DynamicCards
          placesArray={placesFromDb}
          pageName={CONSTANTS.HOME_PAGE}
        />
        <div className={tableStyle.addNewPlaceBtn}>
          <Button
            btnName={CONSTANTS.ADD_NEW_PLACE_BTN}
            onClickHandler={addNewPlaceHandler}
          />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  let data = [
    {
      _id: "",
      placeName: "Coorg",
      tripStarted: "2021-01-28",
      tripEnded: "2021-05-05",
      createdAt: "2021-05-04",
      travlledBy: "Bike",
      occasion: "Jolly trip",
      placeId: "Coorg01",
      people: [
        {
          _id: "M01",
          name: "Magesh",
        },
        {
          _id: "J01",
          name: "Joseph",
        },
      ],
      driveLink: "",
      isFavourite: true,
    },
  ];
  return {
    props: {
      placesFromDb: data,
    },
  };
}
