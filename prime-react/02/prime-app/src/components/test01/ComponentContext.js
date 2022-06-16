import React, { createContext, useState } from "react";

export const ComponentContext = () => {
  const [data, setData] = useState(null);
  return (
    <div>
      <div>ComponentContext</div>
    </div>
  );
};
