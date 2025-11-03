import { useState } from "react";
import { AccordionContext } from "./AccordionContext";

function AccordionGroup({ children }) {
    const [active, setActive] = useState();
    
    const context = {
        isActive: id => active === id,
        setActive: id => active === id ? setActive(null) : setActive(id),
    };

    return (
        <div className="flex flex-col self-start">
            <AccordionContext value={context}>
                {children}
            </AccordionContext>
        </div>
    );
}

export default AccordionGroup;