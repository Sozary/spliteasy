import { useState } from "react";

interface AccordionItem {
    label: string;
    icon: React.ReactNode;
    content: React.ReactNode;
}
interface AccordionProps {
    items: AccordionItem[];
}

const AccordionRadio = ({ checked }: { checked: boolean }) => {
    return (
        <div className={`transition w-5 h-5 bg-white rounded-full border-2  cursor-pointer relative ${checked ? 'border-[#111827]' : 'border-gray-200'}`}
        >
            <div className={`transition w-3 h-3 bg-[#111827] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${checked ? 'scale-100' : 'scale-0'}`} />
        </div>
    )
}

const AccordionItem = ({ item, activeItem, setActiveItem }: { item: AccordionItem, activeItem: AccordionItem | null, setActiveItem: (item: AccordionItem) => void }) => {
    return (
        <div className="flex flex-col gap-1 bg-white rounded-lg p-3 border border-gray-200 cursor-pointer ">
            <div className="flex items-center gap-2 justify-between" onClick={() => setActiveItem(item)}>
                <div className="flex items-center gap-2">
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                </div>
                <AccordionRadio checked={activeItem?.label === item.label} />
            </div>
            {activeItem?.label === item.label && item.content}
        </div>

    )
}
const Accordion = ({ items }: AccordionProps) => {
    const [activeItem, setActiveItem] = useState<AccordionItem | null>(null);

    return (
        <div className="flex flex-col gap-1">
            {items.map((item) => (
                <AccordionItem key={item.label} item={item} activeItem={activeItem} setActiveItem={setActiveItem} />
            ))}
        </div>
    )
}

export default Accordion;