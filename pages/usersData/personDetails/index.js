import ExpensesTable from "../../../commoncomponents/dynamicTable/expenseTable";
import CONSTANTS from "../../../utils/constants";

export default function UsersTable() {
  const tableHeaders = [
    "Name",
    "Phone No",
    "D.O.B",
    "E-Mail",
    "Address",
    "Photo",
    "Action",
  ];
  const dummyData = [
    {
      _id: "",
      userId: "Magesh4321",
      name: "Magesh",
      mailid: "mageshKoutlook@gmail.com",
      phonenumber: "+91 987654321",
      photo: "Pic goes here",
      dob: "15-10-1998",
      address: "Duabi, Dubai Main Road, Dubai Kuruku Santhu",
      placesVistied: [
        {
          _id: "",
          placeId: "Coorg01",
          placeName: "Coorg",
          tripStarted: "24-01-2021",
          tripEnded: "28-01-2021",
        },
      ],
    },
    {
      _id: "",
      userId: "Joseph4321",
      name: "Joseph",
      mailid: "anbuPoerJunction@gmail.com",
      phonenumber: "+91 7418419994",
      photo: "pic goes here",
      dob: "11-08-1998",
      address: "Duabi, Dubai Main Road, Dubai Kuruku Santhu",
      placesVistied: [
        {
          _id: "",
          placeId: "Coorg01",
          placeName: "Coorg",
          tripStarted: "24-01-2021",
          tripEnded: "28-01-2021",
        },
      ],
    },
  ];
  return (
    <div>
      <ExpensesTable
        tableHeaders={tableHeaders}
        tableData={dummyData}
        tableName={CONSTANTS.USERS_TABLE_NAME}
      />
    </div>
  );
}
