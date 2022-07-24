import React, {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";

import Typography from "@mui/material/Typography";
import GDSEButton from "../../components/Common/Button";

class Login extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let {classes}=this.props;
        return(
            <div className={classes.container}>
                <div className={classes.head}>
                    <h1>Login</h1>
                </div>
                <div className={classes.body}>
                   <ValidatorForm>
                       <TextValidator
                           id="outlined-basic"
                           placeHolder="E-Mail"
                           label="E-Mail"
                           variant="outlined"
                           size="small"
                           style={{width: '100%',marginTop:"80Px"}}
                           /* value={this.state.formData.name}
                            onChange={(e)=>{
                                let formData=this.state.formData
                                formData.name=e.target.value
                                this.setState({formData})
                            }}*/
                           validators={['required', 'isString']}
                       />
                       <TextValidator
                           id="outlined-basic"
                           placeHolder="Password"
                           label="Password"
                           variant="outlined"
                           size="small"
                           style={{width: '100%',marginTop:"40Px"}}
                           /* value={this.state.formData.name}
                            onChange={(e)=>{
                                let formData=this.state.formData
                                formData.name=e.target.value
                                this.setState({formData})
                            }}*/
                           validators={['required', 'isString']}
                       />

                   </ValidatorForm>
                    <GDSEButton size="small" variant="contained" label="Login" color="success" type="submit"  style={{width: '30%',marginTop:"40Px"}}/>
                    <Typography variant='h8' style={{marginTop:"15Px",textDecoration:"underline"}}>
                       forgotten Password
                    </Typography>
                </div>

            </div>
        )
    }

}
export default withStyles(styleSheet) (Login)