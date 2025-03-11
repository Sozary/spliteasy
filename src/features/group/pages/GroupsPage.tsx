import { Button } from "@/shared/components/Button";
import Card from "@/shared/components/Card";
import { useCallback, useEffect, useState } from "react";
import GroupPage from "./GroupPage";
import { useNavigate, useParams } from "react-router-dom";
import { useStackNavigation } from "@/shared/context/StackNavigationContext";
import CreateGroupPage from "./CreateGroupPage";
import { SlideManager } from "@/shared/components/SlideManager";

const GroupsPage = () => {
    const { groupId } = useParams();
    const [, setSelectedGroupId] = useState<string | null>(null);
    const [isDirty, setIsDirty] = useState(false);
    const [isCreateGroupModalOpen, setIsCreateGroupModalOpen] = useState(false);
    const navigate = useNavigate();
    const { views, pushView, handleClose } = useStackNavigation();

    useEffect(() => {
        if (groupId && !views.some(v => v.path === `/groups/${groupId}`)) {
            pushView({
                path: `/groups/${groupId}`,
                component: <GroupPage groupId={groupId}  />,
            });
        }
    }, [groupId, pushView, views]);

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
        <>
            <div className="flex items-center justify-between">
                <span className="text-xl font-medium text-[#111827]">Your groups</span>
                <Button className="py-2!" onClick={() => pushView({
                    path: "/groups/create",
                    component: <CreateGroupPage onClose={() => handleClose("/groups/create")} setIsDirty={setIsDirty} />,
                })}>+ New Group</Button>
            </div>
            <div className="flex flex-col gap-2">
                {Array.from({ length: 10 }).map((_, index) => (
                    <Card key={index} variant="transaction" title="Weekend Trip" description="6 members" className="cursor-pointer hover:bg-gray-200 transition-all duration-300" onClick={() => handleGroupSelect(index.toString())} />
                ))}
            </div>
            <SlideManager />
        </>
    )
}

export default GroupsPage;