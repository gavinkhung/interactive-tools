import React, { useState } from "react";

import Context from "./Context";

const Provider = (props) => {
  const [responses, setResponses] = useState({});

  return (
    <Context.Provider
      value={{
        responses: responses,
        setResponses: setResponses,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
