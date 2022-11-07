import React from "react";
function FormInput({ handleChange, formInputData, handleSubmit }) {
  return (
    <div className="form-row row">
      <div className="col">
        <input
          type="text"
          onChange={handleChange}
          value={formInputData.fullName}
          name="fullName"
          className="form-control"
          placeholder="Full Name"
        />
      </div>
      <div className="col">
        <input
          type="text"
          onChange={handleChange}
          value={formInputData.sport}
          name="sport"
          className="form-control"
          placeholder="Sport"
        />
      </div>
      <div className="col">
        <input
          type="number"
          onChange={handleChange}
          value={formInputData.score}
          name="score"
          className="form-control"
          placeholder="Score"
        />
      </div>
      <div className="col">
        <input
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        />
      </div>
    </div>
  );
}

export default FormInput;
