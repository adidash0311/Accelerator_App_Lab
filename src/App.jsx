import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Fintech from "./pages/Fintech";
import Customers from "./pages/ecommerce/Customers";
import Orders from "./pages/ecommerce/Orders";
import Invoices from "./pages/ecommerce/Invoices";
import Shop from "./pages/ecommerce/Shop";
import Shop2 from "./pages/ecommerce/Shop2";
import Product from "./pages/ecommerce/Product";
import Cart from "./pages/ecommerce/Cart";
import Cart2 from "./pages/ecommerce/Cart2";
import Cart3 from "./pages/ecommerce/Cart3";
import Pay from "./pages/ecommerce/Pay";
import Campaigns from "./pages/Campaigns";
import UsersTabs from "./pages/community/UsersTabs";
import UsersTiles from "./pages/community/UsersTiles";
import Profile from "./pages/community/Profile";
import Feed from "./pages/community/Feed";
import Forum from "./pages/community/Forum";
import Blogs from "./pages/community/Blogs";
import Details from "./partials/community/Details";
import ForumPost from "./pages/community/ForumPost";
import Meetups from "./pages/community/Meetups";
import MeetupsPost from "./pages/community/MeetupsPost";
import CreditCards from "./pages/finance/CreditCards";
import Transactions from "./pages/finance/Transactions";
import TransactionDetails from "./pages/finance/TransactionDetails";
import JobListing from "./pages/job/JobListing";
import JobPost from "./pages/job/JobPost";
import CompanyProfile from "./pages/job/CompanyProfile";
import Messages from "./pages/Messages";
import TasksKanban from "./pages/tasks/TasksKanban";
import TasksList from "./pages/tasks/TasksList";
import Inbox from "./pages/Inbox";
import Calendar from "./pages/Calendar";
import Account from "./pages/settings/Account";
import Notifications from "./pages/settings/Notifications";
import Apps from "./pages/settings/Apps";
import Plans from "./pages/settings/Plans";
import Testimonials from "./pages/community/Testimonials";
import Billing from "./pages/settings/Billing";
import Feedback from "./pages/settings/Feedback";
import Changelog from "./pages/utility/Changelog";
import Roadmap from "./pages/utility/Roadmap";
import Faqs from "./pages/utility/Faqs";
import EmptyState from "./pages/utility/EmptyState";
import PageNotFound from "./pages/utility/PageNotFound";
import KnowledgeBase from "./pages/utility/KnowledgeBase";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Onboarding01 from "./pages/Onboarding01";
import Onboarding02 from "./pages/Onboarding02";
import Onboarding03 from "./pages/Onboarding03";
import Onboarding04 from "./pages/Onboarding04";
import ButtonPage from "./pages/component/ButtonPage";
import FormPage from "./pages/component/FormPage";
import DropdownPage from "./pages/component/DropdownPage";
import AlertPage from "./pages/component/AlertPage";
import ModalPage from "./pages/component/ModalPage";
import PaginationPage from "./pages/component/PaginationPage";
import TabsPage from "./pages/component/TabsPage";
import BreadcrumbPage from "./pages/component/BreadcrumbPage";
import BadgePage from "./pages/component/BadgePage";
import AvatarPage from "./pages/component/AvatarPage";
import TooltipPage from "./pages/component/TooltipPage";
import AccordionPage from "./pages/component/AccordionPage";
import IconsPage from "./pages/component/IconsPage";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/dashboard/analytics" element={<Analytics />} />
          <Route path="/dashboard/fintech" element={<Fintech />} />
          <Route path="/ecommerce/customers" element={<Customers />} />
          <Route path="/ecommerce/orders" element={<Orders />} />
          <Route path="/ecommerce/invoices" element={<Invoices />} />
          <Route path="/ecommerce/shop" element={<Shop />} />
          <Route path="/ecommerce/shop-2" element={<Shop2 />} />
          <Route path="/ecommerce/product" element={<Product />} />
          <Route path="/ecommerce/cart" element={<Cart />} />
          <Route path="/ecommerce/cart-2" element={<Cart2 />} />
          <Route path="/ecommerce/cart-3" element={<Cart3 />} />
          <Route path="/ecommerce/pay" element={<Pay />} />
          <Route
            path="/campaigns"
            element={
              <ProtectedRoute>
                <Campaigns />
              </ProtectedRoute>
            }
          />
          <Route
            path="/community/users-tabs"
            element={
              <ProtectedRoute>
                <UsersTabs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/community/users-tiles"
            element={
              <ProtectedRoute>
                <UsersTiles />
              </ProtectedRoute>
            }
          />

          <Route
            path="/community/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/community/feed"
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            }
          />
          <Route
            path="/community/forum"
            element={
              <ProtectedRoute>
                <Forum />
              </ProtectedRoute>
            }
          />
          <Route
            path="/community/blogs"
            element={
              <ProtectedRoute>
                <Blogs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/community/testimonials"
            element={
              <ProtectedRoute>
                <Testimonials />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/details/:id"
            element={
              <ProtectedRoute>
                <Details />
              </ProtectedRoute>
            }
          />
          <Route
            path="/community/forum-post"
            element={
              <ProtectedRoute>
                <ForumPost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/community/meetups"
            element={
              <ProtectedRoute>
                <Meetups />
              </ProtectedRoute>
            }
          />
          <Route
            path="/community/meetups-post"
            element={
              <ProtectedRoute>
                <MeetupsPost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/finance/cards"
            element={
              <ProtectedRoute>
                <CreditCards />
              </ProtectedRoute>
            }
          />
          <Route
            path="/finance/transactions"
            element={
              <ProtectedRoute>
                <Transactions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/finance/transaction-details"
            element={
              <ProtectedRoute>
                <TransactionDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/job/job-listing"
            element={
              <ProtectedRoute>
                <JobListing />
              </ProtectedRoute>
            }
          />
          <Route
            path="/job/job-post"
            element={
              <ProtectedRoute>
                <JobPost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/job/company-profile"
            element={
              <ProtectedRoute>
                <CompanyProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/messages"
            element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tasks/kanban"
            element={
              <ProtectedRoute>
                <TasksKanban />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tasks/list"
            element={
              <ProtectedRoute>
                <TasksList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/inbox"
            element={
              <ProtectedRoute>
                <Inbox />
              </ProtectedRoute>
            }
          />
          <Route
            path="/calendar"
            element={
              <ProtectedRoute>
                <Calendar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings/notifications"
            element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings/apps"
            element={
              <ProtectedRoute>
                <Apps />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings/plans"
            element={
              <ProtectedRoute>
                <Plans />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/settings/testimonials" element={<ProtectedRoute><Testimonials /></ProtectedRoute>} /> */}
          <Route
            path="/settings/billing"
            element={
              <ProtectedRoute>
                <Billing />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings/feedback"
            element={
              <ProtectedRoute>
                <Feedback />
              </ProtectedRoute>
            }
          />
          <Route
            path="/utility/changelog"
            element={
              <ProtectedRoute>
                <Changelog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/utility/roadmap"
            element={
              <ProtectedRoute>
                <Roadmap />
              </ProtectedRoute>
            }
          />
          <Route
            path="/utility/faqs"
            element={
              <ProtectedRoute>
                <Faqs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/utility/empty-state"
            element={
              <ProtectedRoute>
                <EmptyState />
              </ProtectedRoute>
            }
          />
          <Route
            path="/utility/404"
            element={
              <ProtectedRoute>
                <PageNotFound />
              </ProtectedRoute>
            }
          />
          <Route
            path="/utility/knowledge-base"
            element={
              <ProtectedRoute>
                <KnowledgeBase />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <ProtectedRoute>
                <Signin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRoute>
                <Signup />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reset-password"
            element={
              <ProtectedRoute>
                <ResetPassword />
              </ProtectedRoute>
            }
          />
          <Route
            path="/onboarding-01"
            element={
              <ProtectedRoute>
                <Onboarding01 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/onboarding-02"
            element={
              <ProtectedRoute>
                <Onboarding02 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/onboarding-03"
            element={
              <ProtectedRoute>
                <Onboarding03 />
              </ProtectedRoute>
            }
          />

          <Route
            path="/onboarding-04"
            element={
              <ProtectedRoute>
                <Onboarding04 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/component/button"
            element={
              <ProtectedRoute>
                <ButtonPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/component/form"
            element={
              <ProtectedRoute>
                <FormPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/component/dropdown"
            element={
              <ProtectedRoute>
                <DropdownPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/component/alert"
            element={
              <ProtectedRoute>
                <AlertPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/component/modal"
            element={
              <ProtectedRoute>
                <ModalPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/component/pagination"
            element={
              <ProtectedRoute>
                <PaginationPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/component/tabs"
            element={
              <ProtectedRoute>
                <TabsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/component/breadcrumb"
            element={
              <ProtectedRoute>
                <BreadcrumbPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/component/badge"
            element={
              <ProtectedRoute>
                <BadgePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/component/avatar"
            element={
              <ProtectedRoute>
                <AvatarPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/component/tooltip"
            element={
              <ProtectedRoute>
                <TooltipPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/component/accordion"
            element={
              <ProtectedRoute>
                <AccordionPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/component/icons"
            element={
              <ProtectedRoute>
                <IconsPage />
              </ProtectedRoute>
            }
          />
          <Route path="/ssignin" element={<SignIn />} />
          <Route path="/ssignup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
