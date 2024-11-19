import LayoutContext from "@/lib/contexts/LayoutContext";
import { ReactNode, useState } from "react";

interface LayoutContextInterface {
  children: ReactNode;
}

export default function LayoutContextprovider({
  children,
}: LayoutContextInterface) {
  const [currentPage, setPage] = useState("Home");

  const changePage = (value: string) => {
    setPage(value);
  };

  return (
    <LayoutContext.Provider value={{ currentPage, changePage }}>
      {children}
    </LayoutContext.Provider>
  );
}
