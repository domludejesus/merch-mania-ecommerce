import { BarChartOutlined, BusinessCenterOutlined, FeedbackOutlined, LineStyle, MailOutlineOutlined, Money, PersonOutline, QuestionAnswerOutlined, StorefrontOutlined, Timeline, TrendingUp } from "@material-ui/icons"
import { Link } from "react-router-dom"
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle"> Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem"> 
                        <LineStyle className="sidebarIcon"/>
                        Home
                    </li>
                    <li className="sidebarListItem"> 
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem"> 
                        <TrendingUp className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
            </div>
              <div className="sidebarMenu">
                  <h3 className="sidebarTitle"> Quick Menu</h3>
                  <ul className="sidebarList">
                    <Link to="/users" className="link">
                      <li className="sidebarListItem">
                          <PersonOutline className="sidebarIcon" />
                          Users
                      </li>
                    </Link>
                    <Link to="products" className="link">
                      <li className="sidebarListItem">
                          <StorefrontOutlined className="sidebarIcon" />
                          Products
                      </li>
                    </Link>
                      <li className="sidebarListItem">
                          <Money className="sidebarIcon" />
                          Transactions
                      </li>
                      <li className="sidebarListItem">
                          <BarChartOutlined className="sidebarIcon" />
                          Reports
                      </li>
                  </ul>
              </div>
              <div className="sidebarMenu">
                  <h3 className="sidebarTitle"> Staff</h3>
                  <ul className="sidebarList">
                      <li className="sidebarListItem">
                          <BusinessCenterOutlined className="sidebarIcon" />
                          Manage
                      </li>
                      <li className="sidebarListItem">
                          <Timeline className="sidebarIcon" />
                          Analytics
                      </li>
                      <li className="sidebarListItem">
                          <BarChartOutlined className="sidebarIcon" />
                          Reports
                      </li>
                  </ul>
              </div>
              <div className="sidebarMenu">
                <h3 className="sidebarTitle"> Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem"> 
                        <MailOutlineOutlined className="sidebarIcon"/>
                        Mail
                    </li>
                    <li className="sidebarListItem"> 
                        <FeedbackOutlined className="sidebarIcon"/>
                        Feedback
                    </li>
                    <li className="sidebarListItem"> 
                        <QuestionAnswerOutlined className="sidebarIcon"/>
                        Messages
                    </li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
