import { useState, useEffect } from "react";
import axios from "axios";

function FindIdBody() {

    const url = "http://localhost:8080";

    const [formData, setFormData] = useState({
        id: -1,
        firstName: "Unknown First Name",
        lastName: "Unknown Last Name",
        email: "Unkown Email"
    })

    const [id, setId] = useState(-1);

    const handleIdChange = (event) => {
        event.preventDefault();
        setId(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        axios.get(`${url}/users/${id}`)
        .then(response => {
            setFormData(response.data);
            document.getElementById("returnInfo").innerHTML=
            `First Name: ${response.data.firstName}, 
            Last Name: ${response.data.lastName}, 
            Email: ${response.data.email}`;
        }
        )
        .catch((error) => setFormData({
            ...formData,
            firstName: "No user found",
            lastName: "No user found",
            email: "",
            password: "",
        }))
    }

    return(
        <>
        <form id="findId-form">
        <label htmlFor="idCheck" className="idCheck-label">Try ID:</label>
        <input name="idCheck" type="text" className="findId-input" id="idCheck-input" onChange={handleIdChange} required placeholder="Enter ID"/> 

        <input type="submit" value="Test ID" className="submit-button" id="id-submit" onClick={handleSearch} />
        </form>
        <div className="id-check-div">
            <p id="idCheck"></p>
        </div>
        <div id="return-div">
            <p id="returnInfo"></p>
        </div>
    </>
    )
}

export default FindIdBody;