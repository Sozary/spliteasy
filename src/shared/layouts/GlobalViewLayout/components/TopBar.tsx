import User from "@/shared/assets/User"

export const TopBar = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
            <span className="text-xl">SplitEasy</span>
            <div className="flex items-center gap-2">
                <span>John Doe</span>
                <User />
            </div>
        </div>
    )
}