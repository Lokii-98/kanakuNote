import CONSTANTS from "../../utils/constants";
import Button from "../button";
import TableStyles from "../commonComponentStyles/expenseTableStyle.module.css";

export default function TableBody(props) {
  let bodyData = [];
  bodyData = props.bodyData;
  if (props.tableName === CONSTANTS.EXPENSE_TABLE_NAME) {
    return (
      <tbody key={"Table"}>
        {bodyData &&
          bodyData.map((data) => (
            <tr>
              <td id={data.expenseId} key={data.expenseId}>
                {data.amount}
              </td>
              <td id={data.expenseId} key={data.expenseId}>
                {" "}
                {data.paymentDate}
              </td>
              <td id={data.expenseId} key={data.expenseId}>
                {data.reason}
              </td>
              <td id={data.expenseId} key={data.expenseId}>
                {data.paymentOption}
              </td>
              <td className={TableStyles.btnContainer} id={data.expenseId}>
                <Button btnName={CONSTANTS.EDIT_BTN} id={data.expenseId} />
                <Button btnName={CONSTANTS.DELETE_BTN} id={data.expenseId} />
              </td>
            </tr>
          ))}
      </tbody>
    );
  } else if (props.tableName === CONSTANTS.USERS_TABLE_NAME) {
    return (
      <tbody>
        {bodyData &&
          bodyData.map((data) => (
            <tr>
              <td id={data.userId}>{data.name}</td>
              <td id={data.userId}> {data.phonenumber}</td>
              <td id={data.userId}>{data.dob}</td>
              <td id={data.userId}>{data.mailid}</td>
              <td id={data.userId}>{data.address}</td>
              <td id={data.userId}>{data.photo}</td>
              <td className={TableStyles.btnContainer} id={data.userId}>
                <Button btnName={CONSTANTS.EDIT_BTN} id={data.userId} />
                <Button btnName={CONSTANTS.DELETE_BTN} id={data.userId} />
              </td>
            </tr>
          ))}
      </tbody>
    );
  }
}
