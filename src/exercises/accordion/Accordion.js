import { useContext } from "react";
import { AccordionContext } from "./AccordionContext";

function Accordion({ id, title, children }) {
    const { isActive, setActive } = useContext(AccordionContext);
    const expanded = isActive(id);
    
    const extendClass = str => expanded ? `${str} expanded` : str;
    const onClick = () => setActive(id);

    return (
        <div
            id={id}
            className={extendClass('min-w-96 border bg-white [&:not(:first-child)]:border-t-0')}
            onClick={onClick}
        >
            <AccordionHeader expanded={expanded}>{title}</AccordionHeader>
            {expanded && <AccordionContent>{children}</AccordionContent>}
        </div>
    )
}

function AccordionHeader({ expanded, children }) {
    return (
        <div className="flex justify-between px-4 py-2 font-semibold hover:bg-gray-100 hover:cursor-pointer">
            {children}
            <span class="material-symbols-outlined">{expanded ? 'arrow_drop_up' : 'arrow_drop_down'}</span>
        </div>
    );
}

function AccordionContent({ children }) {
    return (
        <div className="px-4 py-2 italic">
            {children}
        </div>
    )
}

export default Accordion;