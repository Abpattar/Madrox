import { Outlet } from "react-router";
import { ScrollToTop } from "@/app/components/ScrollToTop";

export function Layout() {
    return (
        <>
            <ScrollToTop />
            <Outlet />
        </>
    );
}
