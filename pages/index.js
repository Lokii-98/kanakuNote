import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { getPlacesData } from "../utils/apiUtils/placesApiUtils";
import DynamicCards from "../commoncomponents/dynamicCards/dynamicCards";
import CONSTANTS from "../utils/constants";
import Button from "../commoncomponents/button";
import tableStyle from "../commoncomponents/commonComponentStyles/expenseTableStyle.module.css";

export default function Home(props) {
  let placesFromDb = props.placesFromDb;
  // useEffect(async () => {
  //   const dataFromDb = await getPlacesData();
  //   placesFromDb = dataFromDb;
  // }, []);

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
          <Button btnName={CONSTANTS.ADD_NEW_PLACE_BTN} />
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
