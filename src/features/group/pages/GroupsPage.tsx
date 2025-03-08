import { Button } from "@/shared/components/Button";
import Card from "@/shared/components/Card";
import { GlobalViewLayout } from "@/shared/layouts/GlobalViewLayout";

const GroupsPage = () => {
    return (
        <GlobalViewLayout>
            <div className="flex items-center justify-between">
                <span className="text-xl font-medium text-[#111827]">Your groups</span>
                <Button className="py-2!">+ New Group</Button>
            </div>
            <div className="flex flex-col gap-2">
                {Array.from({ length: 10 }).map((_, index) => (
                    <Card key={index} variant="transaction" title="Weekend Trip" description="6 members" />
                ))}
            </div>
        </GlobalViewLayout>
    )
}

export default GroupsPage;