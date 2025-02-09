import InfoCard from "@/components/ui/InfoCard";


export function CardInfo() {

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-4">
            <InfoCard
                title="Total Revenue"
                description="+25.6% from last month"
                content="$135,000.00"
            />
            <InfoCard
                title="Subscription"
                description="+280.1% from last month"
                content="+23,500"
            />
            <InfoCard
                title="Sales"
                description="+29% from last month"
                content="+125,234"
            />
            <InfoCard
                title="Active now"
                description="+2401 since last hour"
                content="+5734"
            />
        </div>
    )
}
