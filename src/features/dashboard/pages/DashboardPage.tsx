import Card from "@/shared/components/Card";
import { GlobalViewLayout } from "@/shared/layouts/GlobalViewLayout";

const DashboardPage = () => {
    return (
        <GlobalViewLayout>
            <Card variant="stats" title="Total Balance" description="$100.00" />
            <span className="text-xl font-medium text-[#111827]">Your last transactions</span>
            <div className="flex flex-col gap-2">
                {Array.from({ length: 10 }).map((_, index) => (
                    <Card key={index} variant="transaction" title="Weekend Trip" description="6 members" value="+$45.23" />
                ))}
            </div>
        </GlobalViewLayout>
    )
}

export default DashboardPage;