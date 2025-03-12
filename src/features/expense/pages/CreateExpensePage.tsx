import { ButtonViewLayout } from "@/shared/layouts/ButtonViewLayout"
import Input from "@/shared/components/Input"
import Accordion from "@/shared/components/Accordion"
import Equal from "@/shared/assets/Equal"
import Percent from "@/shared/assets/Percent"
import Settings from "@/shared/assets/Settings"
import User from "@/shared/assets/User"
import Adjustment from "@/shared/assets/Adjustment"
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"

interface CreateExpensePageProps {
    groupId?: string;
    onClose?: () => void;
}

const EquallySplitMethod = ({ totalAmount }: { totalAmount: number }) => {
    return (
        <div className="flex flex-col gap-2">
            {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="flex gap-2 items-center">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <User size={20} color="#4B5563" />
                    </div>
                    <span className="text-[#4B5563]">John Doe will pay ${(totalAmount / 10).toFixed(2)}</span>
                </div>
            ))}
        </div>
    )
}
const PercentSplitMethod = ({ totalAmount }: { totalAmount: number }) => {
    const [percentages, setPercentages] = useState<number[]>(Array.from({ length: 10 }, () => 0));
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
                            <Input type="number" placeholder="0" value={percentages[index]} onChange={(e) => {
                                const newPercentages = [...percentages];
                                newPercentages[index] = Number(e.target.value);
                                setPercentages(newPercentages);
                            }} />
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
const CreateExpensePage = ({ groupId: propGroupId, onClose }: CreateExpensePageProps) => {
    const params = useParams<{ groupId?: string }>();
    const navigate = useNavigate();
    const [totalAmount, setTotalAmount] = useState(0);

    // Use param groupId if prop is not provided
    const groupId = propGroupId || params.groupId;

    const splitMethods = [
        { label: "Split Equally", icon: <Equal size={20} color="#4B5563" />, content: <EquallySplitMethod totalAmount={totalAmount} /> },
        { label: "Split By Percentage", icon: <Percent size={20} color="#4B5563" />, content: <PercentSplitMethod totalAmount={totalAmount} /> },
        { label: "Custom Amount", icon: <Settings size={20} color="#4B5563" />, content: <CustomSplitMethod totalAmount={totalAmount} /> },
        { label: "Adjustment", icon: <Adjustment size={20} color="#4B5563" />, content: <AdjustmentMethod totalAmount={totalAmount} /> },
    ]

    const handleClose = () => {
        if (onClose) {
            onClose();
        } else {
            // Direct URL load - navigate back to the group page
            if (groupId) {
                navigate(`/groups/${groupId}`, { replace: true });
            } else {
                navigate('/groups', { replace: true });
            }
        }
    };

    const handleAddExpense = () => {
        // Add expense logic here
        console.log("Adding expense for group:", groupId);

        // Close the slide when done
        handleClose();
    };

    return (
        <ButtonViewLayout
            gap
            title="Add New Expense"
            actionButtonLabel="Add Expense"
            onActionButtonClick={handleAddExpense}
            discardable
            onDiscard={handleClose}
        >
            <Input placeholder="Enter an expense title" name="expenseName" label="Expense Title" onChange={() => { }} />
            <Input placeholder="Enter the amount" suffix='$' value={totalAmount} name="amount" label="Amount" onChange={(e) => {
                if (!isNaN(Number(e.target.value))) {
                    setTotalAmount(Number(e.target.value))
                }
            }} />
            <Input placeholder="Enter the date" name="date" label="Date" type="date" onChange={() => { }} />
            <Input label="Paid by" variant="select" options={[{ value: '1', label: 'John Doe' }, { value: '2', label: 'Jane Doe' }]} />
            <div className="flex flex-col gap-1">
                <span className="font-medium text-[#4B5563]">Split Method</span>
                <Accordion items={splitMethods} />
            </div>
        </ButtonViewLayout>
    )
}
export default CreateExpensePage;