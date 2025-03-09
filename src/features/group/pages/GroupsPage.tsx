import { Button } from "@/shared/components/Button";
import Card from "@/shared/components/Card";
import { GlobalViewLayout } from "@/shared/layouts/GlobalViewLayout";
import CreateGroupPage from "./CreateGroupPage";
import { useEffect, useState } from "react";
const GroupsPage = () => {
    const [isCreateGroupModalOpen, setIsCreateGroupModalOpen] = useState(false);
    const closeCreateGroupModal = (event: BeforeUnloadEvent) => {
        event.preventDefault();
        if (confirm("Are you sure you want to discard the changes?")) {
            setIsCreateGroupModalOpen(false);
        }
    }

    useEffect(() => {
        window.addEventListener("beforeunload", closeCreateGroupModal);
        return () => {
            window.removeEventListener("beforeunload", closeCreateGroupModal);
        };
    }, []);

    return (
        <GlobalViewLayout>
            <div className="flex items-center justify-between">
                <span className="text-xl font-medium text-[#111827]">Your groups</span>
                <Button className="py-2!" onClick={() => setIsCreateGroupModalOpen(true)}>+ New Group</Button>
            </div>
            <div className="flex flex-col gap-2">
                {Array.from({ length: 10 }).map((_, index) => (
                    <Card key={index} variant="transaction" title="Weekend Trip" description="6 members" />
                ))}
            </div>
            <CreateGroupPage onClose={() => setIsCreateGroupModalOpen(false)} className={`transition-all duration-300 z-10 fixed bottom-0 left-0 right-0 bg-[#F9FAFB] ${isCreateGroupModalOpen ? 'scale-100' : 'scale-0'}`} />
        </GlobalViewLayout>
    )
}

export default GroupsPage;