import React from "react";

/**
 * Take Stack List component as input and add some new feature to it,
 * @param {*} WrappedComponent 
 * @returns 
 */
function higherOrderComponent(WrappedComponent) {
    function Hoc () {
        return (
            <div>
                <WrappedComponent />
                {/**
                 * Injected feature
                */}
                <div style={{color: 'blue', fontStyle: 'italic'}}>Inside HOC</div> 
            </div>
        );
    }
    return Hoc;
}

export default higherOrderComponent;