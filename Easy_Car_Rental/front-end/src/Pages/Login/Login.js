import React, {Fragment} from "react";
import classes from './Login.module.css'
import Button from "../../UI/Button/Button";
import img1 from "../../assests/car1.jpg";
import {Link} from "react-router-dom";

const Login=()=>{
    const submitHandler=()=>{
        console.log("ok")
    }

 return(
     <Fragment>
         <div className={classes.en}  style={{background:'url('+img1+')',backgroundSize:"cover",height:'100vh'}}>
         <form onSubmit={submitHandler}>
             <div className={classes.main}>
                 <div className={classes.head}>

                 </div>
                 <div className={classes.body}>
                     {/*<form onSubmit={submitHandler}>*/}
                         <div className={`${classes.email}`}>
                             <label htmlFor="email">E-Mail</label>
                             <input
                                 type="email"
                                 id="email"
                             />
                         </div>
                         <div className={`${classes.password}`}>
                             <label htmlFor="password">Password</label>
                             <input
                                 type="password"
                                 id="password"
                             />
                         </div>
                     <div className={`${classes.btn}`}>
                         <Link to='/'>
                             <Button type='submit' className={classes.btnLogin}>
                                        Login
                             </Button>
                         </Link>
                     </div>
                     {/*</form>*/}
                 </div>
             </div>
         </form>
         </div>
     </Fragment>
 )
}
export default Login;