import React, {Fragment} from "react";
import classes from './SignUp.module.css'

const SignUp=()=>{
    const submitHandler=()=>{
        console.log("ok")
    }
    return(
        <Fragment>
            <form onSubmit={submitHandler}>
                <div className={classes.main}>
                        <div className={`${classes.header}`}>
                                <h1>Sign in or create account </h1>
                        </div>

                    <div className={classes.body}>

                    </div>



                </div>
            </form>
        </Fragment>

    )
}
export default SignUp;