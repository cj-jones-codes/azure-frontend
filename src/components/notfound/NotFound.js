import React from "react";
import Container from "../Container";
import NotFoundHeader from "./NotFoundHeader";
import NotFoundBody from "./NotFoundBody";

function NotFound() {
    return (
        <Container outerVersion="notfound-outer" innerVersion="notfound-inner" header={<NotFoundHeader />} body={<NotFoundBody />} />
    )
}

export default NotFound;