import { Button } from "@/shared/components/Button";
import Card from "@/shared/components/Card";
import { GlobalViewLayout } from "@/shared/layouts/GlobalViewLayout";
import CreateGroupPage from "./CreateGroupPage";
import { useCallback, useEffect, useState } from "react";
import GroupPage from "./GroupPage";
import { useNavigate, useParams } from "react-router-dom";

const GroupsPage = () => {
    const { groupId } = useParams();
    const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);
    const [isDirty, setIsDirty] = useState(false);
    const [isCreateGroupModalOpen, setIsCreateGroupModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleGroupSelect = (id: string) => {
        setSelectedGroupId(id);
        navigate(`/groups/${id}`, { replace: true });
    };

    useEffect(() => {
        if (groupId) {
            setSelectedGroupId(groupId);
        }
    }, [groupId]);

    const closeCreateGroupModal = useCallback((event?: BeforeUnloadEvent) => {
        if (!isCreateGroupModalOpen) return;
        if (!isDirty) {
            setIsCreateGroupModalOpen(false);
            return;
        }

        event?.preventDefault();
        if (confirm("Are you sure you want to discard the changes?")) {
            setIsCreateGroupModalOpen(false);
        }
    }, [isCreateGroupModalOpen, isDirty])

    useEffect(() => {
        window.addEventListener("beforeunload", closeCreateGroupModal);
        return () => {
            window.removeEventListener("beforeunload", closeCreateGroupModal);
        };
    }, [closeCreateGroupModal]);

    return (
        <GlobalViewLayout>
            <div className="flex items-center justify-between">
                <span className="text-xl font-medium text-[#111827]">Your groups</span>
                <Button className="py-2!" onClick={() => setIsCreateGroupModalOpen(true)}>+ New Group</Button>
            </div>
            <div className="flex flex-col gap-2">
                {Array.from({ length: 10 }).map((_, index) => (
                    <Card key={index} variant="transaction" title="Weekend Trip" description="6 members" className="cursor-pointer hover:bg-gray-200 transition-all duration-300" onClick={() => handleGroupSelect(index.toString())} />
                ))}
            </div>
            <CreateGroupPage setIsDirty={setIsDirty} className={`transition-all duration-300 z-10 fixed bottom-0 left-0 right-0 bg-[#F9FAFB] ${isCreateGroupModalOpen ? 'scale-100' : 'scale-0'}`} onClose={() => closeCreateGroupModal()} />

            <GroupPage groupId={selectedGroupId} className={`transition-all duration-300 z-10 fixed bottom-0 left-0 right-0 bg-[#F9FAFB] ${selectedGroupId ? 'translate-x-0' : 'translate-x-full'}`} onBackButtonClick={() => handleGroupSelect('')} />

        </GlobalViewLayout>
    )
}

export default GroupsPage;