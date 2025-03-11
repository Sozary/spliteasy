import { ButtonViewLayout } from "@/shared/layouts/ButtonViewLayout"
import Input from "@/shared/components/Input"
import Search from "@/shared/assets/Search";
import Card from "@/shared/components/Card";
import User from "@/shared/assets/User";
import Times from "@/shared/assets/Times";
import { ChangeEvent, useState } from "react";
import { useSlideNavigation } from "@/shared/hooks/useSlideNavigation";

interface CreateGroupPageProps {
    setIsDirty?: (isDirty: boolean) => void;
    onClose?: () => void;
    className?: string;
}

const CreateGroupPage = ({ setIsDirty = () => { }, onClose, className }: CreateGroupPageProps) => {
    const [groupName, setGroupName] = useState('');
    const [memberSearch, setMemberSearch] = useState('');
    const [isDirtyState, setIsDirtyState] = useState(false);
    const { closeSlide } = useSlideNavigation();

    const handleGroupNameChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setGroupName(e.target.value);
        setIsDirtyState(true);
        setIsDirty(true);
    }

    const handleAddMembers = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setMemberSearch(e.target.value);
        setIsDirtyState(true);
        setIsDirty(true);
    }

    const handleDiscard = () => {
        if (!isDirtyState || window.confirm("Are you sure you want to discard your changes?")) {
            closeSlide();

            if (onClose) {
                // We don't need to call navigate here as the context handles it
                // This ensures the scale animation plays before navigation
            }
        }
    }

    return (
        <ButtonViewLayout
            gap
            className={className}
            title="Create New Group"
            actionButtonLabel="Create Group"
            discardable
            onDiscard={handleDiscard}
        >
            <Input placeholder="Enter group name" name="groupName" value={groupName} label="Group Name" onChange={handleGroupNameChange} />
            <Input placeholder="Search by name" name="addMembers" value={memberSearch} label="Add Members" onChange={handleAddMembers} logo={<Search size={20} color="#4B5563" />} />
            <span className="font-medium text-[#4B5563]">Selected Members (3)</span>
            <div className="flex flex-col gap-2">
                {Array.from({ length: 3 }).map((_, index) => (
                    <Card key={index} variant="user" title="John Doe" icon={<User size={20} color="#4B5563" />} actionIcon={<Times size={20} color="#4B5563" />} onActionIconClick={() => { }} />
                ))}
            </div>
        </ButtonViewLayout>
    )
}

export default CreateGroupPage;