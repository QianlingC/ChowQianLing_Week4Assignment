import React from "react";
import { useParams } from "react-router-dom";

//react-router-dom 6 require wrappercomponent
export const withRouter = (WrapperComponent) => (props) => {
  const params = useParams(); //hooks

  return <WrapperComponent {...props} params={params} />;
};

// HOC
