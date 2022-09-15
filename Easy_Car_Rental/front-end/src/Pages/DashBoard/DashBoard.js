import React from "react";
import classes from './DashBoard.module.css'
import img1 from '../../assests/car1.jpg'
import Button from "../../UI/Button/Button";
import phoneImg from '../../assests/phone.png'
import whatsappImg from '../../assests/whatsapp.png'
import {Link} from "react-router-dom";

const DashBoard=()=>{
    let quote="< / Join with us and success your journey.Customer safety is our priority / >"

    const click=()=>{
        alert('ok')
    }
    return(
        <div className={classes.body} style={{background:'url('+img1+')',backgroundSize:"cover",height:'100vh'}}>
            {/*<img src={img1} className={classes.img}/>*/}
            <div className={classes.main}>
                <h1>Easy </h1>
                <h1>Car Rentals  ...</h1>
                {/*<h2> {quote}</h2>*/}
                <h2>"  Customer safety is our priority .  .  ."</h2>
               <button type='button' className={classes.btn}>
                   See All Car Categories
               </button>
            </div>
            <div className={classes.logins}>
                <Link to='/login'>
                    <Button type='button' className={classes.btnLog} onClick={click} >
                         Login
                    </Button>
                </Link>
                <Button type='button' className={classes.btnSignUp} >
                    SignUp
                </Button>

            </div>

            {/*<div className={classes.bottom}>*/}

            {/*    <div className={classes.b1}>*/}
            {/*        <div className={classes.b1img}>*/}
            {/*            <a href="tel:0769925893"><img className={classes.phoneImg}  src={phoneImg} alt=""/> </a>*/}
            {/*        </div>*/}
            {/*        <h1>0769925893</h1>*/}
            {/*        <div className={classes.b1img1}>*/}
            {/*            <a href="intent://send/0769925893#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end"><img className={classes.phoneImg}  src={whatsappImg} alt=""/> </a>*/}
            {/*        </div>*/}
            {/*        <h1>0769925893</h1>*/}
            {/*    </div>*/}


            {/*</div>*/}
        </div>
    )
}
export default DashBoard;