import React from "react";
import classes from './DashBoard.module.css'
import img1 from '../../assests/car1.jpg'
import Button from "../../UI/Button/Button";

const DashBoard=()=>{
    return(
        <div className={classes.body} style={{background:'url('+img1+')',backgroundSize:"cover",height:'100vh'}}>
            {/*<img src={img1} className={classes.img}/>*/}
            <div className={classes.main}>
                <h1>Easy </h1>
                <h1>Car Rentals  ...</h1>
                <h2> " Join with us and success your journey..! "</h2>
               <button type='button' className={classes.btn}>
                   See All Car Categories
               </button>
            </div>
            <div className={classes.logins}>
                <Button type='button' className={classes.btnLog} >
                        Login
                </Button>
                <Button type='button' className={classes.btnSignUp} >
                    SignUp
                </Button>

            </div>


        </div>
    )
}
export default DashBoard;