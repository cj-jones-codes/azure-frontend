import React from "react";
import Container from "../Container";
import MainBody from "./MainBody";
import MainHeader from "./MainHeader";

function Main() {
    return (
        <Container outerVersion="main-outer" innerVersion="main-inner" header={<MainHeader />} body={<MainBody />} />
    );
}

export default Main;