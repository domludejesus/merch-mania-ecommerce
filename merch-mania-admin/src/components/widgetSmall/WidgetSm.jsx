import { Visibility } from "@material-ui/icons"
import "./widgetSm.css"

export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle"> New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" alt="" className="widgetSmImg" />
                  <div className="widgetSmUser">
                    <span className="widgetSmUsername"> Judy Ruth </span>
                    <span className="widgetSmUserTitle"> Software Engineer</span>
                  </div> 
                  <button className="widgetSmButton" >
                    <Visibility className="widgetSmIcon" /> 
                    Display 
                  </button>         
            </li>
              <li className="widgetSmListItem">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" alt="" className="widgetSmImg" />
                  <div className="widgetSmUser">
                      <span className="widgetSmUsername"> Judy Ruth </span>
                      <span className="widgetSmUserTitle"> Software Engineer</span>
                  </div>
                  <button className="widgetSmButton" >
                      <Visibility className="widgetSmIcon"/>
                      Display
                  </button>
              </li>
              <li className="widgetSmListItem">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" alt="" className="widgetSmImg" />
                  <div className="widgetSmUser">
                      <span className="widgetSmUsername"> Judy Ruth </span>
                      <span className="widgetSmUserTitle"> Software Engineer</span>
                  </div>
                  <button className="widgetSmButton" >
                      <Visibility className="widgetSmIcon"/>
                      Display
                  </button>
              </li>
              <li className="widgetSmListItem">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" alt="" className="widgetSmImg" />
                  <div className="widgetSmUser">
                      <span className="widgetSmUsername"> Judy Ruth </span>
                      <span className="widgetSmUserTitle"> Software Engineer</span>
                  </div>
                  <button className="widgetSmButton" >
                      <Visibility className="widgetSmIcon"/>
                      Display
                  </button>
              </li>
              <li className="widgetSmListItem">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" alt="" className="widgetSmImg" />
                  <div className="widgetSmUser">
                      <span className="widgetSmUsername"> Judy Ruth </span>
                      <span className="widgetSmUserTitle"> Software Engineer</span>
                  </div>
                  <button className="widgetSmButton" >
                      <Visibility className="widgetSmIcon"/>
                      Display
                  </button>
              </li>
        </ul>
    </div>
  )
}
