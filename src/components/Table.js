import React from "react";
function Table({ tableData }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>S.N</th>
          <th>Full Name</th>
          <th>Sports</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.fullName}</td>
              <td>{data.sport}</td>
              <td>{data.score}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
