import React from "react"

import "./Sign-in-sign-up.styles.scss"

import SignIn from "../../components/sign-in/SignIn.component"
import SignUp from "../../components/sign-up/SignUp.component"

const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignUp />
            <SignIn />
        </div>
    )
}
export default SignInAndSignUpPage