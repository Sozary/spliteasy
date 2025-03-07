import { ButtonViewLayout } from "../layouts/ButtonViewLayout"
import User from "../../shared/assets/User";
import Button from "../../shared/components/Button";
import Card from "../../shared/components/Card";
import Money from "../../shared/assets/Money";

const GroupPage = () => {
    return (
        <ButtonViewLayout fullWidth backButton title="Weekend Trip" actionButtonLabel="+ Add New Expense" onActionButtonClick={() => { }}>
            <div className="flex justify-between bg-white border-b border-gray-200 p-4">
                <div className="flex gap-2 items-center">
                    <User size={45} color="#111827" />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">Total Expenses</span>
                        <span className="text-xl font-bold">$1,200.23</span>
                    </div>
                </div>
                <Button className="py-2!">Settle up</Button>
            </div>
            <div className="p-4 bg-white border-b border-t border-gray-200">
                <div className="flex flex-col gap-2">
                    <span className="font-medium text-[#4B5563]">Balances</span>
                    <div className="flex flex-col gap-2">
                        {Array.from({ length: 3 }).map(() => (
                            <div className="flex gap-2 items-center">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"><User /></div> <span className="font-medium">John owes $125.00</span></div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="p-4 bg-white border-b border-t border-gray-200">
                <span className="font-medium text-[#4B5563]">Expenses</span>
            </div>

            <div className="flex flex-col gap-2 p-5 pt-0">
                {Array.from({ length: 3 }).map((_, index) => (
                    <Card key={index} variant="expense" title="Diner at a restaurant" description="Paid by John ● Jan 14, 2025" icon={<Money size={20} color="#4B5563" />} value="$45.50" />
                ))}
            </div>

        </ButtonViewLayout >
    )
}
export default GroupPage;