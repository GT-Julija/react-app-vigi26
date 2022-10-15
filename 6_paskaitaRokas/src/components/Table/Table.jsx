import "./Table.css";

const Table = ({ headings, data, onRowClick }) => {
  return (
    <table>
      <thead>
        <tr>
          {headings.map((heading) => (
            <th key={heading}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} onClick={() => onRowClick(item)}>
            {Object.values(item).map((value) => (
              <td key={value}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
