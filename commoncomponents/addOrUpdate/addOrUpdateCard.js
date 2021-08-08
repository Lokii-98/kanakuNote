import Styles from "./addOrUpdateCardsStyles.module.css";
import AddOrUpdateForm from "./addorUpdateForm";
export default function AddOrUpdateCards(props) {
  return (
    <div className={Styles.popup}>
      <div className={Styles.popupInner}>
        <AddOrUpdateForm />
      </div>
    </div>
  );
}
