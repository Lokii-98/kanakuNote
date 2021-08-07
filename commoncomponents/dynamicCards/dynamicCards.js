import DynamicCardStyles from "./dynamicCardsStyles.module.css";
import DynamicCardsForm from "./dynamicCardsForm";
export default function DynamicCards(props) {
  console.log("PlacesArray:", props.placesArray);
  return (
    <ul className={DynamicCardStyles.dcContainer}>
      {props.placesArray.map((eachPlace) => (
        <DynamicCardsForm dataObj={eachPlace} pageName={props.pageName} />
      ))}
    </ul>
  );
}
