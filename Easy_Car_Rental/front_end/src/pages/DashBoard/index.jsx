import React, {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import GDSEButton from "../../components/Common/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"



class DashBoard extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        let {classes}=this.props
        return(
            <div className={classes.container}>
                <div className={classes.nav}>
                    <div className={classes.nav1}>
                        <h1>WELCOME TO EASY CAR RENTALS </h1>
                    </div>
                    <div className={classes.nav2}>
                        <GDSEButton size="large" variant="contained"  color="success" label="Login"/>
                    </div>
                    <div className={classes.nav3}>
                        <GDSEButton size="large" variant="contained"   label="signUp"/>
                    </div>
                </div>
                <div className={classes.body}>

                    <div className={classes.img1}>
                         <Card sx={{ maxWidth: 345 }} style={{marginLeft:'3px'}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                src={img1}
                                alt="green iguana"

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    General Cars
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                   General Type cars..with manual & auto transmission
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                               more..
                            </Button>
                        </CardActions>
                    </Card>
                    </div>
                    <div className={classes.img2}>
                         <Card sx={{ maxWidth: 345 }} style={{marginLeft:'3px'}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                src={img2}
                                alt="green iguana"

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                   Premium Cars
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Premium Type cars..with manual & auto transmission
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                more..
                            </Button>
                        </CardActions>
                    </Card>
                    </div>
                    <div className={classes.img3}>
                         <Card sx={{ maxWidth: 345 }} style={{marginLeft:'3px'}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                src={img3}
                                alt="green iguana"

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                  Luxury Cars
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Luxury Type cars..with manual & auto transmission
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                more..
                            </Button>
                        </CardActions>
                    </Card>
                    </div>

                </div>

                <div className={classes.bottom}>
                    <div className={classes.descl} >
                      {/*  <h1 styl{{fontSize:"25px",fontFamily:"Courier New"e=,backgroundColor:'#BBE3F7'}} >
                            This is the Best Car Rentals Service<br/>
                            you can find..we are giving you special <br/>
                            packages, we are always with you to give <br/>
                            you good & better service.

                        </h1>*/}
                        <ul style={{ backgroundColor:"#C5F0EE"}} >
                            <li style={{fontSize:"15px",fontFamily:"Courier New",marginTop:"30px"}}>
                                This is the Best Car Rentals Service<br/>
                                you can find..we are giving you special <br/>
                                packages, we are always with you to give <br/>
                                you good & better service.
                            </li>
                            <br/>
                            <li style={{fontSize:"15px",fontFamily:"Courier New",marginBottom:"30px"}}>
                                All packages are contained <br/>
                                customer friendly services .. <br/>
                            </li>
                        </ul>
                    </div>
                    <div  className={classes.descr}>
                        <ul style={{ backgroundColor:"#C5F0EE"}} >
                            <li style={{fontSize:"15px",fontFamily:"Courier New",marginTop:"10px"}}>
                                All cars we are giving <br/>
                                in good condition ...<br/>
                                vehicles are well prepared <br/>
                                and ready give you good traveling experience..
                            </li>
                            <br/>
                            <li style={{fontSize:"15px",fontFamily:"Courier New",marginBottom:"19px"}}>
                                Make  sure that Before you rent <br/>
                                 a car to request before 2days.. <br/>
                                 Because  we want to give you Best <br/>
                                 experience...
                            </li>
                        </ul>
                    </div>

                </div>


            </div>
        )
    }

}
export default withStyles(styleSheet)  (DashBoard)