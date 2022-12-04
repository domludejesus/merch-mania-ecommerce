import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import "./featuredInfo.css"

export default function FeaturedInfo() {
    const [income, setIncome] = useState([])
    const [perc, setPerc] = useState(0)

    useEffect(() => {
        const getIncome = async ()=>{
         try {
            const res = await userRequest.get("orders/income")
            setIncome(res.data)
            setPerc((res.data[1].total*100) / res.data[0].total - 100); 
         }catch {}  
        }
        getIncome()
    },[])
    // console.log(income)
    // console.log(perc)
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney"> ${income[1].total}</span>
                <span className="featuredMoneyRate">
                     %{Math.floor(perc)} {" "} 
                     {perc < 0 ? (
                        <ArrowDownward className="featuredIcon negative" />
                     ) : (
                        <ArrowUpward className="featuredIcon positive" />
                     )}
                      
                </span>
            </div>
            <span className="featuredSub"> Compared to last month</span>
        </div>
          <div className="featuredItem">
              <span className="featuredTitle">Sales</span>
              <div className="featuredMoneyContainer">
                  <span className="featuredMoney"> $6,000</span>
                  <span className="featuredMoneyRate">
                      -1.4 <ArrowDownward className="featuredIcon negative" />
                  </span>
              </div>
              <span className="featuredSub"> Compared to last month </span>
          </div>
          <div className="featuredItem">
              <span className="featuredTitle">Cost </span>
              <div className="featuredMoneyContainer">
                  <span className="featuredMoney"> $3,200</span>
                  <span className="featuredMoneyRate">
                      +3.4 <ArrowUpward className="featuredIcon positive" />
                  </span>
              </div>
              <span className="featuredSub"> Compared to last month</span>
          </div>
    </div>
  );
}
