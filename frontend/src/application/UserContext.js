/** @format */

import React, { createContext, useState } from "react";

const UserProvider = (props) => {
  const [state, setState] = useState({});
  return (
    <div>
      <UserContext.Provider value={[state, setState]}>
        <>{props?.children}</>
      </UserContext.Provider>
    </div>
  );
};

export default UserProvider;
export const UserContext = createContext();
