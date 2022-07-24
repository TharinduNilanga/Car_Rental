import React, {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import CustomerNav from "../../components/Common/CustomerNav";
import img from "../../assets/car-rent.png"


class Customer extends Component{
    constructor(props) {
        super(props);

    }
    render() {
        let {classes}=this.props;
        return(
            <>
                <div className={classes.container}>

                    <div className={classes.nav}>
                       <img src={img}
                            style={{height:'50px'}}
                       />
                        <CustomerNav/>
                    </div>
                    <div className={classes.body}>

                    </div>
                </div>
            </>
        )
    }

}
export default withStyles(styleSheet) (Customer)