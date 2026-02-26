import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { navLinks } from "../constant/navRoutes";
export const useCategoryHeadlineName = (categoryName: string): string | undefined => {
    const location = useLocation();
    return useMemo(() => {
        const category = navLinks.find(link => link.name === categoryName);
        return category?.children?.find(child => child.path === location.pathname)?.name;
    }, [location.pathname, categoryName]);
};
export const getOrderStatusColour = (type: string): string => {
    return type === "open"
        ? "bg-green-100 text-green-600"
        : type === "closed"
            ? "bg-red-100 text-red-600"
            : "bg-yellow-100 text-yellow-600";
}