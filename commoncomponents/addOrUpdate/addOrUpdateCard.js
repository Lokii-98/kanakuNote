import Styles from "./addOrUpdateCardsStyles.module.css";
import AddOrUpdateForm from "./addorUpdateExpensesForm";
export default function AddOrUpdateCards(props) {
  return (
    <div className={Styles.popup}>
      <div className={Styles.popupInner}>
        <AddOrUpdateForm
          id={props.id}
          dataHandler={props.dataHandler}
          updateData={props.updateData}
          cardName={props.cardName}
        />
      </div>
    </div>
  );
}
