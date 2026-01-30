import { createBrowserRouter } from "react-router";
import { LandingPage } from "@/app/pages/LandingPage";
import { DoctorSearch } from "@/app/pages/DoctorSearch";
import { BillAudit } from "@/app/pages/BillAudit";
import { LoginPage } from "@/app/pages/LoginPage";
import { PriceDB } from "@/app/pages/PriceDB";
import { Community } from "@/app/pages/Community";
import { About } from "@/app/pages/About";
import { Careers } from "@/app/pages/Careers";
import { Press } from "@/app/pages/Press";
import { Contact } from "@/app/pages/Contact";

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
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/careers",
    Component: Careers,
  },
  {
    path: "/press",
    Component: Press,
  },
  {
    path: "/contact",
    Component: Contact,
  },
]);
