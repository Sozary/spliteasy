import User from "../../shared/assets/User";
import Card from "../../shared/components/Card";
import Input from "../../shared/components/Input";
import { ButtonViewLayout } from "../../shared/layouts/ButtonViewLayout"


const GroupBalancePage = () => {
    return (
        <ButtonViewLayout fullWidth backButton title="Group Balance" actionButtonLabel="Settle Up" onActionButtonClick={() => { }}>
            <div className="flex flex-col gap-1 bg-white border-b border-gray-200 p-4 items-center">
                <h3 className="font-medium text-gray-500">Total Group Balance</h3>
                <p className="text-2xl text-[#111827] font-bold">$1,243.22</p>
            </div>
            <div className="p-4 bg-white border-b border-t border-gray-200 flex flex-col gap-2">
                <span className="font-medium text-[#4B5563]">Individual Balances</span>
                <div className="flex flex-col gap-2">
                    {Array.from({ length: 3 }).map((_, x) => (
                        <Card key={x} variant="userOwe" title="John Doe" icon={<User />} description="Owes $125.00" />
                    ))}
                </div>
            </div>
            <div className="p-4 bg-white border-b border-t border-gray-200 flex flex-col gap-2">
                <span className="font-medium text-[#4B5563]">Settle Up</span>
                <Input placeholder="Enter amount" label="Payer" variant="select" options={[{ value: '1', label: 'John Doe' }, { value: '2', label: 'Jane Doe' }]} />
                <Input placeholder="Enter amount" label="Receiver" variant="select" options={[{ value: '1', label: 'John Doe' }, { value: '2', label: 'Jane Doe' }]} />
                <Input placeholder="Enter amount" label="Amount" />
            </div>


        </ButtonViewLayout >
    )
}
export default GroupBalancePage;