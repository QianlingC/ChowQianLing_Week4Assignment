import React, { useState } from "react";
import FormInput from "./FormInput.js";
import Table from "./Table";
function FormTable() {
  const [tableData, setTableData] = useState([]);
  const [formInputData, setformInputData] = useState({
    fullName: "",
    sport: "",
    score: "",
  });

  const handleChange = (e) => {
    const newInput = (data) => ({
      ...data,
      [e.target.name]: e.target.value,
    });
    setformInputData(newInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const newData = (data) => [...data, formInputData];
      setTableData(newData);
      const emptyInput = { fullName: "", sport: "", score: "" };
      setformInputData(emptyInput);
    }
  };

  return (
    <React.Fragment>
      <div className="jumbotron d-flex">
        <div className="container">
          <div className="row justify-content-md-center p-2">
            <div className="col-sm-8">
              <FormInput
                handleChange={handleChange}
                formInputData={formInputData}
                handleSubmit={handleSubmit}
              />
              <Table tableData={tableData} />
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default FormTable;
