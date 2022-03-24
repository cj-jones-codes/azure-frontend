import React from "react";

function Container(props) {
    return (
        <div className="outerdiv" id={props.outerVersion}>
            <div className="innerdiv" id={props.innerVersion}>
                {props.header}
                {props.body}
            </div>
        </div>
    );
}

export default Container;