import React, {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import ImageUploading from 'react-images-uploading';
import GDSEButton from "../../components/Common/Button";
class SignUp extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let {classes}=this.props;
        return(
            <>
            <ValidatorForm>
              <div className={classes.container}  >
                  <div className={classes.header}>
                            <h1 style={{fontSize:"50px"}}>Sign-Up</h1>
                  </div>

                  <div className={classes.body}>

                      <div className={classes.row1}>
                          <TextValidator
                              id="outlined-basic"
                              placeHolder="eMail"
                              label="E-Mail"
                              variant="outlined"
                              size="medium"
                              style={{width: '200%',marginTop:"20Px",marginLeft:"20px"}}

                              validators={['required', 'isString']}
                          />
                          <TextValidator
                              id="outlined-basic"
                              placeHolder="userName"
                              label="User Name"
                              variant="outlined"
                              size="medium"
                              style={{width: '200%',marginTop:"20Px",marginLeft:"20px"}}

                              validators={['required', 'isString']}
                          />
                          <TextValidator
                              id="outlined-basic"
                              placeHolder="password"
                              label="Password"
                              variant="outlined"
                              size="medium"
                              style={{width: '200%',marginTop:"20Px",marginLeft:"20px"}}

                              validators={['required', 'isString']}
                          />
                          <TextValidator
                              id="outlined-basic"
                              placeHolder="nic"
                              label="NIC No"
                              variant="outlined"
                              size="medium"
                              style={{width: '200%',marginTop:"20Px",marginLeft:"20px"}}

                              validators={['required', 'isString']}
                          />
                          <TextValidator
                              id="outlined-basic"
                              placeHolder="licenseNo"
                              label="License No"
                              variant="outlined"
                              size="medium"
                              style={{width: '200%',marginTop:"20Px",marginLeft:"20px"}}

                              validators={['required', 'isString']}
                          />
                          <TextValidator
                              id="outlined-basic"
                              placeHolder="address"
                              label="Address"
                              variant="outlined"
                              size="medium"
                              style={{width: '200%',marginTop:"20Px",marginLeft:"20px"}}

                              validators={['required', 'isString']}
                          />
                      </div>
                      <div className={classes.row2}>
                          <TextValidator
                              id="outlined-basic"
                              placeHolder="contact"
                              label="Contact"
                              variant="outlined"
                              size="medium"
                              style={{width: '200%',marginTop:"20Px",marginLeft:"20px"}}

                              validators={['required', 'isString']}
                          />

                          <div style={{width: '90%',height:"10%",marginTop:"20Px",marginLeft:"20px"}}>
                              <input id="nicImg" name="nicImg" type="file" className="form-control" style={{height:"100%",width:"100%"}} />
                          </div>
                          <div style={{width: '90%',height:"10%",marginTop:"20Px",marginLeft:"20px"}}>
                              <input id="licImg" name="licImg" type="file" className="form-control" style={{height:"100%",width:"100%"}} />
                          </div>
                          <div style={{backgroundColor:'' ,width:'100%',height:"43%",alignItems:"flex-end",justifyContent:"space-evenly",display:"flex",flexDirection:"row"}} >
                              <GDSEButton size="small" variant="contained" label="SingUp" color="primary" type="submit"  style={{width: '30%',marginTop:"40Px"}}/>
                              <GDSEButton size="small" variant="contained" label="Login" color="success" type="submit"  style={{width: '30%',marginTop:"40Px"}}/>

                          </div>

                      </div>
                  </div>

              </div>
            </ValidatorForm>
                </>
        )
    }


}
export default withStyles(styleSheet) (SignUp)