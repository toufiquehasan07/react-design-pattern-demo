import React from "react";

function CompoundComponent() {
    return <>
        <div style={{margin: '10px 0 10px 0'}}>
            <h3>Compount Compound</h3>
            <select>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="BD">Bangladesh</option>
                <option value="IND">India</option>
                <option value="ENG">England</option>
            </select>
        </div>
    </>
}

export default CompoundComponent;