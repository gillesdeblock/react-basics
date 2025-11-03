import { createContext } from "react";

export const AccordionContext = createContext({
    isActive: () => false,
    setActive: () => {},
});