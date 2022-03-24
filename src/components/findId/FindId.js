import React from "react";
import Container from "../Container";
import FindIdHeader from "./FindIdHeader";
import FindIdBody from "./FindIdBody";

function FindId() {
    return (
        <Container outerVersion="findId-outer" innerVersion="findId-inner" header={<FindIdHeader />} body={<FindIdBody />} />
    );
}

export default FindId;