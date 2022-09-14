/** @format */

import React, { createContext, useState } from "react";

const MyProvider = (props) => {
  const [state, setState] = useState("");
  return (
    <div>
      <LanguageContext.Provider value={[state, setState]}>
        <>{props?.children}</>
      </LanguageContext.Provider>
    </div>
  );
};

export default MyProvider;
export const LanguageContext = createContext();
