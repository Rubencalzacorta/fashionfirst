
import React, { Component } from "react"

import "./SignIn.styles.scss"

import FormInput from "../form-input/FormInput.component.js"
import CustomButton from "../custom-button/CustomButton.component"

import { signInWithGoogle } from "../../firebase/firebase.utils"

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


    handleSubmit = e => {
        e.preventDefault()

        this.setState({
            email: "",
            password: ""
        })
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
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Password"
                        required />

                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} >Google Sign In</CustomButton>


                </form>
            </div>
        )
    }
}

export default SignIn