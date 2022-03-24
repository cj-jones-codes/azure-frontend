import React from "react";

function MainHeader() {
    return(
        <div id="main-header-container">
            <h1 className="header-greeting" id="main-header-greeting">Welcome to <span id="main-header-span">Login Practice</span></h1>
            <h2 className="header-details" id="main-header-details">Begin by typing in a username and password below</h2>
        </div>
    )
}

export default MainHeader