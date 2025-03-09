import { ButtonViewLayout } from "@/shared/layouts/ButtonViewLayout"
import Input from "@/shared/components/Input"
import Search from "@/shared/assets/Search";
import Card from "@/shared/components/Card";
import User from "@/shared/assets/User";
import Times from "@/shared/assets/Times";
import { ChangeEvent, useState } from "react";

interface CreateGroupPageProps {
    onClose: () => void;
    className?: string;
    setIsDirty: (isDirty: boolean) => void;
}
const CreateGroupPage = ({ onClose, className, setIsDirty }: CreateGroupPageProps) => {
    const [groupName, setGroupName] = useState('');
    const [memberSearch, setMemberSearch] = useState('');

    const handleGroupNameChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setGroupName(e.target.value);
        setIsDirty(true);
    }

    const handleAddMembers = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setMemberSearch(e.target.value);
        setIsDirty(true);
    }

    return (
        <ButtonViewLayout gap title="Create New Group" actionButtonLabel="Create Group" discardable onDiscard={onClose} className={className}>
            <Input placeholder="Enter group name" name="groupName" value={groupName} label="Group Name" onChange={handleGroupNameChange} />
            <Input placeholder="Search by name" name="addMembers" value={memberSearch} label="Add Members" onChange={handleAddMembers} logo={<Search size={20} color="#4B5563" />} />
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