import { createBrowserRouter } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import HomeLayouts from "../components/layouts/HomeLayouts";
import Homepage from "../pages/Homepage/Homepage";
import AccoutType from "../auth/AccoutType";
import Terms from "../auth/terms/Terms";
import Policy from "../auth/terms/Policy";
import EmailVerification from "../auth/EmailVerification";
import RouterError from "./RouterError";
import ResetPassword from "../auth/ResetPassword";
import About from "../pages/About/AboutPage";
import ResetEmailCode from "../auth/ResetEmailCode";
import DonorSignUp from "../auth/DonorSignUp";
import DashboardStudent from "../pages/student-dashboard/DashboardStudent";
import Overview from "../pages/student-dashboard/components/Overview";
import MyCampaign from "../pages/student-dashboard/components/MyCampaign";
import Donors from "../pages/student-dashboard/components/Donors";
import Verificcations from "../pages/student-dashboard/components/Verificcations";
import Withdrawals from "../pages/student-dashboard/components/Withdrawals";
import StudentSetting from "../pages/student-dashboard/components/StudentSettings";
import DonorDashboard from "../pages/donor-dashboard/DonorDashboard";
import DonorOverview from "../pages/donor-dashboard/components/DonorOverview";
import Discover from "../pages/donor-dashboard/components/Discover";
import Donations from "../pages/donor-dashboard/components/Donations";
import Impact from "../pages/donor-dashboard/components/Impact";
import DonorSetting from "../pages/donor-dashboard/components/DonorSetting";
import Contact from "../pages/Contact/Contact";
import StudentLinkShare from "../pages/modals/StudentLinkShare";
import RequestWithdraw from "../pages/modals/RequestWithdraw";
import WithdrawalReq from "../pages/modals/WithdrawalReq";
import GlobalStep from "../pages/modals/steps/GlobalStep";
import ReverifyEmail from "../auth/ReverifyEmail";

export const Element = createBrowserRouter([
  {
    path: "*",
    element: <RouterError />,
  },
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/policy",
    element: <Policy />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/account-type",
    element: <AccoutType />,
  },
  {
    path: "/verify-email",
    element: <EmailVerification />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/reverify",
    element: <ReverifyEmail />,
  },
  {
    path: "/email-reset",
    element: <ResetEmailCode />,
  },
  {
    path: "/donor_signup",
    element: <DonorSignUp />,
  },
  {
    path: "/student-dashbord",
    element: <DashboardStudent />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "campaigns",
        element: <MyCampaign />,
      },
      {
        path: "donors",
        element: <Donors />,
      },
      {
        path: "verification",
        element: <Verificcations />,
      },
      {
        path: "withdraws",
        element: <Withdrawals />,
      },
      {
        path: "student-setting",
        element: <StudentSetting />,
      },
    ],
  },
  {
    path: "/donor_dashboard",
    element: <DonorDashboard />,
    children: [
      {
        index: true,
        element: <DonorOverview />,
      },
      {
        path: "discover",
        element: <Discover />,
      },
      {
        path: "donation",
        element: <Donations />,
      },
      {
        path: "impact",
        element: <Impact />,
      },
      {
        path: "donor-setting",
        element: <DonorSetting />,
      },
    ],
  },
  {
    path: "/modal",
    element: <GlobalStep />,
  },
]);
