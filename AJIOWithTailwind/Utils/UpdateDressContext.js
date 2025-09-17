import { createContext } from "react";

const UpdateDressContext = createContext(() => {
  console.log("UpdateDressContext Called");
});

export default UpdateDressContext;
