import CONSTANTS from "../../utils/constants";
import Button from "../button";
import TableStyles from "../commonComponentStyles/expenseTableStyle.module.css";

export default function TableBody(props) {
  let bodyData = [];
  bodyData = props.bodyData;
  if (props.tableName === CONSTANTS.EXPENSE_TABLE_NAME) {
    return (
      <tbody>
        {bodyData &&
          bodyData.map((data) => (
            <tr>
              <td id={data.expenseId}>{data.amount}</td>
              <td id={data.expenseId}> {data.paymentDate}</td>
              <td id={data.expenseId}>{data.reason}</td>
              <td id={data.expenseId}>{data.paymentOption}</td>
              <td className={TableStyles.btnContainer} id={data.expenseId}>
                <Button btnName={CONSTANTS.EDIT_BTN} id={data.expenseId} />
                <Button btnName={CONSTANTS.DELETE_BTN} id={data.expenseId} />
              </td>
            </tr>
          ))}
      </tbody>
    );
  }
}
