import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import "./widgetLg.css"
import { format } from "timeago.js"

export default function WidgetLg() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get("orders");
                setOrders(res.data);
            } catch { }
        };
        getOrders();
    }, []);

    const Button = ({type}) => {
        return <button className ={"widgetLgButton " + type}>{type} </button>
    }

  return (
    <div className="widgetLg">
        <h3 className="widgetLgTitle"> Latest Transactions</h3>
        <table className="widgetLgTable">
            <thead>
                <tr className="widgetLgTr">
                    <th className="widgetLgTh"> Customer</th>
                    <th className="widgetLgTh"> Date</th>
                    <th className="widgetLgTh"> Amount</th>
                    <th className="widgetLgTh"> Status</th>
                </tr>
            </thead>
            {orders.map(order=>(

            <tbody>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img 
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                            alt="" 
                            className="widgetLgImg" 
                        />
                        <span className="widgetLgName"> {order.userId} </span>
                    </td>
                    <td className="widgetLgDate"> {format(order.createdAt)}</td>
                    <td className="widgetLgAmount">$ {order.amount} </td>
                    <td className="widgetLgStatus"> <Button type={order.status} /></td>

                </tr>
            </tbody>
        ))}
        </table>
    </div>
  )
}
