import Button from "../button";

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
          <td>
            <Button btnName={"Edit"} btnLink={"/"} />
            <Button btnName={"Delete"} btnLink={"/"} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
