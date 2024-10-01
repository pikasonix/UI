import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { UserProfile } from "./views/UserProfile/UserProfile"
import { JobList } from "./views/JobList/JobList"
import { Collections } from "./views/Collections/Collections"
import { ReviewForm } from "./views/ReviewForm/ReviewForm"
import { UserList } from "./views/UserList/UserList"
import { Notification } from "./views/Notification/Notification"
import { Subscriptions } from "./views/Subscriptions/Subscriptions"
import { JobPositions } from "./views/JobPositions/JobPositions"
import { AccountList } from "./views/AccountList/AccountList"
import { Dashboard } from "./views/Dashboard/Dashboard"
function App() {
  return (
    <div className="w-full min-h-screen bg-[#E5E5E5] flex items-center justify-center ">
      {/* <UserProfile/> */}
      {/* <JobList/> */}
      {/* <Collections/> */}
      {/* <ReviewForm/> */}
      {/* <UserList/> */}
      {/* <Notification/> */}
      {/* <Subscriptions/> */}
      {/* <JobPositions/> */}
      {/* <AccountList/> */}
      {/* <Dashboard/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/user-profile" element={<UserProfile/>}/>
          <Route path="/job-list" element={<JobList/>}/>
          <Route path="/collections" element={<Collections/>}/>
          <Route path="/review-form" element={<ReviewForm/>} />
          <Route path="/user-list" element={<UserList/>}/>
          <Route path="/notification" element={<Notification/>}/>
          <Route path="/subscriptions" element={<Subscriptions/>}/>
          <Route path="/job-positions" element={<JobPositions/>}/>
          <Route path="/account-list" element={<AccountList/>}/>
        </Routes>
      </Router>
    </div>
        
  )
}

export default App
