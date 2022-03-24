import { useState, useEffect } from "react";
import axios from "axios";

function FindIdBody() {

    const url = "https://springazure.azurewebsites.net";

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
        .then(response => setFormData(response.data))
        .catch((error) => setFormData({
            ...formData,
            name: "No user found",
            email: ""
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
    </>
    )
}

export default FindIdBody;