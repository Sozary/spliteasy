import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSlide } from '../context/SlideContext';
import GroupPage from '../../features/group/pages/GroupPage';
import CreateGroupPage from '../../features/group/pages/CreateGroupPage';
import CreateExpensePage from '../../features/expense/pages/CreateExpensePage';

export const SlideManager: React.FC = () => {
    const { groupId } = useParams<{ groupId?: string }>();
    const location = useLocation();
    const { slides, pushSlide, clearSlides } = useSlide();

    // Handle URL-driven slides
    useEffect(() => {
        const path = location.pathname;

        // Skip if this path already has a slide
        const hasSlideForPath = slides.some(slide => slide.path === path);
        if (hasSlideForPath) return;

        // Group detail page
        if (groupId && path.match(/^\/groups\/[^/]+$/) && !path.includes('create')) {
            pushSlide({
                component: <GroupPage groupId={groupId} />,
                path,
                animationType: 'slide',
                returnTo: '/groups'
            });
        }

        // Create group page - only when navigating directly to /groups/create
        else if (path === '/groups/create') {
            pushSlide({
                component: <CreateGroupPage setIsDirty={() => { }} />,
                path,
                animationType: 'scale',
                returnTo: '/groups'
            });
        }

        // Create expense page within a group
        else if (groupId && path.match(/^\/groups\/[^/]+\/expenses\/create$/)) {
            pushSlide({
                component: <CreateExpensePage />,
                path,
                animationType: 'scale',
                returnTo: `/groups/${groupId}`
            });
        }

    }, [location.pathname, groupId, slides, pushSlide]);

    // Clear slides when going to a path that doesn't match any slide pattern
    useEffect(() => {
        const path = location.pathname;
        const isSlideRoute =
            path.match(/^\/groups\/[^/]+$/) ||
            path === '/groups/create' ||
            path.match(/^\/groups\/[^/]+\/expenses\/create$/);

        if (!isSlideRoute && slides.length > 0) {
            // Only clear slides if we're not on a slide route
            const matchingSlide = slides.find(slide => slide.path === path);
            if (!matchingSlide) {
                clearSlides();
            }
        }
    }, [location.pathname, slides, clearSlides]);

    return null;
}; 