import React, { Component } from "react"

import FormInput from "../form-input/FormInput.component"
import CustomButton from "../custom-button/CustomButton.component"

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"

import "./SignUp.styles.scss"

class SignUp extends Component {
    constructor() {
        super()


        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async e => {
        e.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state

        if (password != confirmPassword) {
            alert("passwords don´t match")
            return
        }

        try {

            //create user with bla bla is a method from the auth library- 
            // this creates anew user account
            //in the key user from the response of the method we have an userAuth object
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password)

            //we call our function from the utils files with user as the userAuth object and displayName as more info. 
            await createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })


        } catch (err) {
            console.log("error", err)
        }

    }


    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }



    render() {

        const { displayName, email, password, confirmPassword } = this.state
        return (

            <div className="sign-up">
                <h2 classNAme="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Display email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required

                    />


                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>

            </div>

        )
    }

}


export default SignUp