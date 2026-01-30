import { createBrowserRouter } from "react-router";
import { LandingPage } from "@/app/pages/LandingPage";
import { DoctorSearch } from "@/app/pages/DoctorSearch";
import { BillAudit } from "@/app/pages/BillAudit";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/doctor-search",
    Component: DoctorSearch,
  },
  {
    path: "/bill-audit",
    Component: BillAudit,
  },
]);
