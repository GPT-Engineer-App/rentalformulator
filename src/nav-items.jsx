import { Home, FileText, User, History } from "lucide-react";
import Index from "./pages/Index.jsx";
import Profile from "./pages/Profile.jsx";
import ApplicationHistory from "./pages/ApplicationHistory.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Rental Application",
    to: "/",
    icon: <FileText className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <User className="h-4 w-4" />,
    page: <Profile />,
  },
  {
    title: "Application History",
    to: "/application-history",
    icon: <History className="h-4 w-4" />,
    page: <ApplicationHistory />,
  },
];
