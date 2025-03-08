import { ButtonViewLayout } from "../layouts/ButtonViewLayout"
import Input from "../../shared/components/Input"
import Accordion from "../../shared/components/Accordion"
import Equal from "../../shared/assets/Equal"
import Percent from "../../shared/assets/Percent"
import Settings from "../../shared/assets/Settings"
import User from "../../shared/assets/User"
import Adjustment from "../../shared/assets/Adjustment"

const EquallySplitMethod = ({ totalAmount }: { totalAmount: number }) => {
    return (
        <div className="flex flex-col gap-2">
            {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="flex gap-2 items-center">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <User size={20} color="#4B5563" />
                    </div>
                    <span className="text-[#4B5563]">John Doe will pay ${totalAmount / 10}</span>
                </div>
            ))}
        </div>
    )
}
const PercentSplitMethod = ({ totalAmount }: { totalAmount: number }) => {
    return (
        <div className="flex flex-col gap-2">
            {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="flex gap-2 items-center">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <User size={20} color="#4B5563" />
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className="text-[#4B5563] flex-1">John Doe </span>
                        <div className="w-1/4">
                            <Input type="number" placeholder="0" />
                        </div>
                        <span>%</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

const CustomSplitMethod = ({ totalAmount }: { totalAmount: number }) => {
    return (
        <div className="flex flex-col gap-2">
            {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="flex gap-2 items-center">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <User size={20} color="#4B5563" />
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className="text-[#4B5563] flex-1">John Doe </span>
                        <span>$</span>
                        <div className="w-1/4">
                            <Input type="number" placeholder="0" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
const AdjustmentMethod = ({ totalAmount }: { totalAmount: number }) => {
    return (
        <div className="flex flex-col gap-2">
            {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="flex gap-2 items-center">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <User size={20} color="#4B5563" />
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className="text-[#4B5563] flex-1">John Doe </span>
                        <span>± $</span>
                        <div className="w-1/4">
                            <Input type="number" placeholder="0" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
const CreateExpensePage = () => {
    const splitMethods = [
        { label: "Split Equally", icon: <Equal size={20} color="#4B5563" />, content: <EquallySplitMethod totalAmount={100} /> },
        { label: "Split By Percentage", icon: <Percent size={20} color="#4B5563" />, content: <PercentSplitMethod totalAmount={100} /> },
        { label: "Custom Amount", icon: <Settings size={20} color="#4B5563" />, content: <CustomSplitMethod totalAmount={100} /> },
        { label: "Adjustment", icon: <Adjustment size={20} color="#4B5563" />, content: <AdjustmentMethod totalAmount={100} /> },
    ]
    return (
        <ButtonViewLayout gap title="Add New Expense" actionButtonLabel="Add Expense" discardable onDiscard={() => { }}>
            <Input placeholder="Enter an expense title" name="expenseName" label="Expense Title" onChange={() => { }} />
            <Input placeholder="Enter the amount" name="amount" label="Amount" onChange={() => { }} />
            <Input placeholder="Enter the date" name="date" label="Date" type="date" onChange={() => { }} />
            <Input label="Paid by" variant="select" options={[{ value: '1', label: 'John Doe' }, { value: '2', label: 'Jane Doe' }]} />
            <div className="flex flex-col gap-1">
                <span className="font-medium text-[#4B5563]">Split Method</span>
                <Accordion items={splitMethods} />
            </div>
        </ButtonViewLayout >
    )
}
export default CreateExpensePage;