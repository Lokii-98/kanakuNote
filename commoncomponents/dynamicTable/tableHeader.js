export default function TableHeaders(props) {
  let { headerData } = props;
  return (
    <thead>
      <tr>
        {headerData.map((headers) => (
          <th>{headers}</th>
        ))}
      </tr>
    </thead>
  );
}
