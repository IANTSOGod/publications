import { createContext } from "react";

const LayoutContext = createContext({
  currentPage: "Home",
  changePage: (value: string) => {console.log(value)},
});

export default LayoutContext;
