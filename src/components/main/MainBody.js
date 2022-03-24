import { userState, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MainBody() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

    const handleChange = (event) => {
        event.preventDefault();
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        validateInput();
        doLogin();
    }

    function validateInput() {
        const { firstName, lastName, email, password } = formData;
        let loginValidity = true;
        const namePattern = /^[a-zA-Z][a-zA-Z -]+[a-zA-Z]$/;
        if (!namePattern.test(firstName)) {
            loginValidity = false;
        }
        if (!namePattern.test(lastName)) {
            loginValidity = false;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@{1}[a-zA-Z0-9-_]+[.]{1}[a-zA-Z0-9]+[a-zA-Z_.-]*$/;
        if (!emailPattern.test(email)) {
            loginValidity = false;
        }

        const passwordPattern = /^[a-zA-Z0-9@^%$#/\\,;|~._-]{8,50}$/;
        if (!passwordPattern.test(password)) {
            loginValidity = false;
        }

        if (!loginValidity) {
            document.getElementById("validityCheck").innerHTML="You have failed to login, please try again!";
            return false;
        }
        return true;
    }

    function doLogin() {
        let responseStatus;
        let responseData;

        const url = "https://springazure.azurewebsites.net"

        const newUser = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
        };
        axios.post(`${url}/users`, newUser)
            .then((response) => {
                responseStatus = response.status;
                responseData = response.data;
                if (responseStatus === 200) {
                    if (responseData === true || responseData.result === true) {
                        navigate("/findId")
                    } else {
                        document.getElementById("validityCheck").innerHTML="Error occured, it's possible that you're copying someone else's work!";
                    }
                }
            }).catch((error) => console.error(`Error: ${error}`));
    }


    return(
        <>
            <form id="main-form">
            <label htmlFor="firstName" className="main-label">First Name:</label>
            <input name="firstName" type="text" className="main-input" id="first-name-input" onChange={handleChange} required placeholder="Enter First Name"/> 

            <label htmlFor="lastName" className="main-label">Last Name:</label>
            <input name="lastName" type="text" className="main-input" id="last-name-input" onChange={handleChange} required placeholder="Enter Last Name"/> 

            <label htmlFor="email" className="main-label">Email:</label>
            <input name="email" type="text" className="main-input" id="email-input" onChange={handleChange} required placeholder="Enter Email"/> 

            <label htmlFor="password" className="main-label">Password:</label>
            <input name="password" type="password" className="main-input" id="password-input" onChange={handleChange} required placeholder="Enter Password"/> 
            
            <input type="submit" value="Test Attempt" className="submit-button" id="attempt-submit" onClick={handleSubmit} />
            </form>
            <div className="validity-check-div">
                <p id="validityCheck"></p>
            </div>
        </>
    );
}

export default MainBody;