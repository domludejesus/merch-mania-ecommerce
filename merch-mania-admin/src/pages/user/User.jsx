import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from "@material-ui/icons"
import { Link } from "react-router-dom"
import "./user.css"

function User() {
  return (
    <div className="user">
        <div className="userTitleContainer" >
            <h1 className="userTitle"> Edit User</h1>
            <Link to="/newUser">
            <button className="userAddButton"> Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                    <div className="userShowTop">
                          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" alt="" className="userShowImg" />
                          <div className="userShowTopTitle">
                            <span className="userShowUsername"> Jane Mccrow</span>
                            <span className="userShowUserTitle"> Creative Designer</span>
                          </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle"> Account Details</span>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle"> 11-11-1990</span>
                        </div>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle"> janem34</span>
                        </div>
                        <span className="userShowTitle"> Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle"> (111)111-1111</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle"> email@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle"> New York | USA </span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle"> Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label> Username</label>
                                <input 
                                    type="text"
                                    placeholder="janem34"
                                    className="userUpdateInput"
                                    />
                            </div>
                            <div className="userUpdateItem">
                                <label> Full Name</label>
                                <input 
                                    type="text"
                                    placeholder="Jane Mccrow"
                                    className="userUpdateInput"
                                    />
                            </div>
                            <div className="userUpdateItem">
                                <label> Email</label>
                                <input 
                                    type="text"
                                    placeholder="email@gmail.com"
                                    className="userUpdateInput"
                                    />
                            </div>
                            <div className="userUpdateItem">
                                <label> Phone </label>
                                <input 
                                    type="text"
                                    placeholder="(111)111-1111"
                                    className="userUpdateInput"
                                    />
                            </div>
                            <div className="userUpdateItem">
                                <label> Address</label>
                                <input 
                                    type="text"
                                    placeholder="New York | USA"
                                    className="userUpdateInput"
                                    />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" alt="" className="userUpdateImg" />
                                  <label htmlFor="file"> <Publish class="userUpdateIcon" /></label>
                                  <input type="file" id="file" style={{display: "none"}} />
                            </div>
                            <button className="userUpdateButton"> Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default User