import React from "react";
import higherOrderComponent from "../HOC";
import { TestContext } from "../../context";
import CompoundComponent from "../compound-component";

/**
 * Base component - Stock list component
 * @returns 
 */
function StockList() {
    const {Consumer} = TestContext; // Extract consumer Component fron Context

    return <div>
        <h1>Welcome</h1>
        <div>Stock List Page</div>
        <Consumer>
            {
                (data) => <>{JSON.stringify(data)}</>
            }
        </Consumer>
        <CompoundComponent />
    </div>
   
}
export default  higherOrderComponent(StockList);
