import React, { useState } from "react";

import Context from "./Context";

const Provider = (props) => {
  const [zoom, setZoom] = useState(1);

  return (
    <Context.Provider
      value={{
        zoom: zoom,
        setZoom: setZoom,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
