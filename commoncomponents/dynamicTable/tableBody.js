import CONSTANTS from "../../utils/constants";
import Button from "../button";
import TableStyles from "../commonComponentStyles/expenseTableStyle.module.css";

export default function TableBody(props) {
  let { bodyData } = props;
  return (
    <tbody>
      {bodyData.map((data) => (
        <tr>
          <td>{data.amount}</td>
          <td>{data.date}</td>
          <td>{data.reason}</td>
          <td>{data.paymentOption}</td>
          <td className={TableStyles.btnContainer}>
            <Button btnName={CONSTANTS.EDIT_BTN} />
            <Button btnName={CONSTANTS.DELETE_BTN} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
