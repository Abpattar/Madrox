import { createBrowserRouter } from "react-router";
import { LandingPage } from "@/app/pages/LandingPage";
import { DoctorSearch } from "@/app/pages/DoctorSearch";
import { BillAudit } from "@/app/pages/BillAudit";
import { LoginPage } from "@/app/pages/LoginPage";
import { PriceDB } from "@/app/pages/PriceDB";
import { Community } from "@/app/pages/Community";

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
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/price-db",
    Component: PriceDB,
  },
  {
    path: "/community",
    Component: Community,
  },
]);
