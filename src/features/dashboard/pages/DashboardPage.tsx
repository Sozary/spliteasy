import Card from "@/shared/components/Card";

const DashboardPage = () => {
    return (
        <>  <Card variant="stats" title="Total Balance" description="$100.00" />
            <span className="text-xl font-medium text-[#111827]">Your last transactions</span>
            <div className="flex flex-col gap-2">
                {Array.from({ length: 10 }).map((_, index) => (
                    <Card key={index} variant="transaction" title="Weekend Trip" description="6 members" value="+$45.23" />
                ))}
            </div></>
    )
}

export default DashboardPage;