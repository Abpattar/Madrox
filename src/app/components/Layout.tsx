import { Outlet } from "react-router";
import { ScrollToTop } from "@/app/components/ScrollToTop";
import { FloatingSearchBar } from "@/app/components/FloatingSearchBar";

export function Layout() {
    return (
        <>
            <ScrollToTop />
            <Outlet />
            <FloatingSearchBar />
        </>
    );
}
