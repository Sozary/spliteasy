import { Button } from "@/shared/components/Button";
import Card from "@/shared/components/Card";
import { GlobalViewLayout } from "@/shared/layouts/GlobalViewLayout";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSlideNavigation } from "@/shared/hooks/useSlideNavigation";
import { SlideManager } from "@/shared/components/SlideManager";

const GroupsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { closeSlide, currentSlides } = useSlideNavigation();

    // Prevent duplicate slide handling
    const isAlreadyOnCreatePage = location.pathname === '/groups/create';
    const isAlreadyOnGroupDetailPage = location.pathname.startsWith('/groups/') &&
        location.pathname !== '/groups' &&
        location.pathname !== '/groups/create';

    const handleGroupSelect = (id: string) => {
        // Only create a new slide if we're not already on a group detail page
        if (!isAlreadyOnGroupDetailPage) {
            navigate(`/groups/${id}`);
        }
    };

    const handleCreateGroup = () => {
        // Only navigate if we're not already on the create page
        if (!isAlreadyOnCreatePage) {
            navigate('/groups/create');
        }
    };

    // Handle ESC key for closing any active slide
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && currentSlides.length > 0) {
                closeSlide();
            }
        };

        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [currentSlides, closeSlide]);

    return (
        <GlobalViewLayout>
            <div className="flex items-center justify-between">
                <span className="text-xl font-medium text-[#111827]">Your groups</span>
                <Button className="py-2!" onClick={handleCreateGroup}>
                    + New Group
                </Button>
            </div>
            <div className="flex flex-col gap-2">
                {Array.from({ length: 10 }).map((_, index) => (
                    <Card
                        key={index}
                        variant="transaction"
                        title="Weekend Trip"
                        description="6 members"
                        className="cursor-pointer hover:bg-gray-200 transition-all duration-300"
                        onClick={() => handleGroupSelect(index.toString())}
                    />
                ))}
            </div>
            <SlideManager />
        </GlobalViewLayout>
    );
};

export default GroupsPage;