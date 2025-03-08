import { ButtonViewLayout } from "../../shared/layouts/ButtonViewLayout"
import Input from "../../shared/components/Input"
import Search from "../../shared/assets/Search";
import Card from "../../shared/components/Card";
import User from "../../shared/assets/User";
import Times from "../../shared/assets/Times";

const CreateGroupPage = () => {
    return (
        <ButtonViewLayout gap title="Create New Group" actionButtonLabel="Create Group" discardable onDiscard={() => { }}>
            <Input placeholder="Enter group name" name="groupName" label="Group Name" onChange={() => { }} />
            <Input placeholder="Search by name" name="addMembers" label="Add Members" onChange={() => { }} logo={<Search size={20} color="#4B5563" />} />
            <span className="font-medium text-[#4B5563]">Selected Members (3)</span>
            <div className="flex flex-col gap-2">
                {Array.from({ length: 3 }).map((_, index) => (
                    <Card key={index} variant="user" title="John Doe" icon={<User size={20} color="#4B5563" />} actionIcon={<Times size={20} color="#4B5563" />} onActionIconClick={() => { }} />
                ))}
            </div>

        </ButtonViewLayout >
    )
}
export default CreateGroupPage;