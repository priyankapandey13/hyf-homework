import React from "react";
import Context from "./context";
import "bootstrap/dist/css/bootstrap.css";

function Searchuser() {
  const { handleChange } = React.useContext(Context);

  return (
    <div className="search-bar mt-3 mb-3 p-3 p-lg-1 pl-lg-4 mx-auto col-md-4">
      <form className="mr-3">
        <input
          type="text"
          placeholder="Input user name here"
          onChange={handleChange}
          className="form-control border-0 shadow-0"
        />
      </form>
    </div>
  );
}

export default Searchuser;
