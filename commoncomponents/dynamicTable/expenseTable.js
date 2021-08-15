import TableBody from "./tableBody";
import TableHeaders from "./tableHeader";

export default function ExpenseTable(props) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <table>
        <TableHeaders headerData={props.tableHeaders} />
        <TableBody bodyData={props.tableData} tableName={props.tableName} />
      </table>
    </form>
  );
}
