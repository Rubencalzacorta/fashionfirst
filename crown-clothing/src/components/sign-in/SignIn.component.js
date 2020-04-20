
import React, { Component } from "react"

import "./SignIn.styles.scss"

import FormInput from "../form-input/FormInput.component.js"
import CustomButton from "../custom-button/CustomButton.component"

import { auth, signInWithGoogle } from "../../firebase/firebase.utils"

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }


    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    handleSubmit = async e => {
        e.preventDefault()

        const { email, password } = this.state

        try {
            //as the user changes, it trigers the function in app. 
            await auth.signInWithEmailAndPassword(email, password)

            this.setState({
                email: "",
                password: ""
            })

        } catch (err) {
            console.log("error signing in with email and password", err)
        }
    }


    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required />

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                        required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>Google Sign In</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn