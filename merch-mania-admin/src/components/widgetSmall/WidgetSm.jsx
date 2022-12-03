import { Visibility } from "@material-ui/icons"
import { useEffect, useState } from "react"
import { userRequest } from "../../requestMethods"
import "./widgetSm.css"

export default function WidgetSm() {
    const [ users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userRequest.get("users/?new=true");
                setUsers(res.data);
            } catch { }
        };
        getUsers();
    }, []);

  return (
    <div className="widgetSm">
        <span className="widgetSmTitle"> New Join Members</span>
        <ul className="widgetSmList">
            {users.map(user=>(
               <li className="widgetSmListItem" key={user._id}>
                  <img src={user.img || "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/64px-Missing_avatar.svg.png"} alt="" className="widgetSmImg" />
                  <div className="widgetSmUser">
                    <span className="widgetSmUsername"> {user.username} </span>
                  </div> 
                  <button className="widgetSmButton" >
                    <Visibility className="widgetSmIcon" /> 
                    Display 
                  </button>    
            </li>           
            ))}
        </ul>
    </div>
  )
}
