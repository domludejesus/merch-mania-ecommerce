import "./widgetLg.css"

export default function WidgetLg() {
    const Button = ({type}) => {
        return <button className ={"widgetLgButton " + type}>{type} </button>
    }

  return (
    <div className="widgetLg">
        <h3 className="widgetLgTitle"> Latest Transactions</h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh"> Customer</th>
                <th className="widgetLgTh"> Date</th>
                <th className="widgetLgTh"> Amount</th>
                <th className="widgetLgTh"> Status</th>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img 
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                        alt="" 
                        className="widgetLgImg" 
                    />
                    <span className="widgetLgName"> Marry Dudely</span>
                </td>
                <td className="widgetLgDate"> October 11 2022</td>
                <td className="widgetLgAmount"> 200.00 </td>
                <td className="widgetLgStatus"> <Button type="Approved" /></td>

            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img 
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                        alt="" 
                        className="widgetLgImg" 
                    />
                    <span className="widgetLgName"> Marry Dudely</span>
                </td>
                <td className="widgetLgDate"> October 11 2022</td>
                <td className="widgetLgAmount"> 200.00 </td>
                <td className="widgetLgStatus"> <Button type="Declined" /></td>

            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img 
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                        alt="" 
                        className="widgetLgImg" 
                    />
                    <span className="widgetLgName"> Marry Dudely</span>
                </td>
                <td className="widgetLgDate"> October 11 2022</td>
                <td className="widgetLgAmount"> 200.00 </td>
                <td className="widgetLgStatus"> <Button type="Pending" /></td>

            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img 
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                        alt="" 
                        className="widgetLgImg" 
                    />
                    <span className="widgetLgName"> Marry Dudely</span>
                </td>
                <td className="widgetLgDate"> October 11 2022</td>
                <td className="widgetLgAmount"> 200.00 </td>
                <td className="widgetLgStatus"> <Button type="Approved" /></td>

            </tr>
        </table>
    </div>
  )
}
