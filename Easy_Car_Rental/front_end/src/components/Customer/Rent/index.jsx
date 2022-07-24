import React, {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import GDSEButton from "../../Common/Button";
import MyTable from "../../Common/MyTable";
import BasicDatePicker from "../../Common/PickUpDate";
import BasicTimePicker from "../../Common/PickUpTime";
import ReturnDatePicker from "../../Common/ReturnDate";
import ReturnTimePicker from "../../Common/ReturnTime";

class Rent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            top100Films: [
                {car:"BGO-1297"},
                {car:"GHO-1297"},
                {car:"DFG-1297"},
                {car:"HGF-1297"}
            ],
            columns: [
                {
                    field: 'id',
                    headerName: 'id',
                    width: 250
                },
                {
                    field: 'name',
                    headerName: 'name',
                    width:300
                },
                {
                    field: 'address',
                    headerName: 'address',
                    width:350,
                    sortable: false
                },
                {
                    field: 'contact',
                    headerName: 'contact',
                    width:327
                }
            ],
            data:[
                {
                    id:"C001",
                    name:"nilanaga",
                    address:"horana",
                    contact:"0768899333"
                }
            ]
        }

    }

    render() {
        let {classes}=this.props
        return(
            <>
                <ValidatorForm>
                    <div className={classes.container}>
                        <div className={classes.col1}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={this.state.top100Films}
                                sx={{ width: 500 }}
                                renderInput={(params) => <TextField {...params} label="Car" />}
                                getOptionLabel={
                                    (option) => option.car
                                }
                                // onChange={(e, value) => {
                                //     console.log(value.label + " " + value.year);
                                // }}
                                size="medium"
                                style={{ width: '15%' }}
                            />
                          {/*  <div style={{backgroundColor:'red',width:'13%',height:'40%'}}>
                                <BasicDatePicker/>
                            </div>*/}
                            <BasicDatePicker/>
                            <BasicTimePicker/>
                            <ReturnDatePicker/>
                        </div>
                        <div className={classes.col2}>
                            <ReturnTimePicker/>
                            <TextValidator
                                id="outlined-basic"
                                placeHolder="eMail"
                                label="E-Mail"
                                variant="outlined"
                                size="medium"
                                style={{width: '150%'}}

                                validators={['required', 'isString']}
                            />
                            <TextValidator
                                id="outlined-basic"
                                placeHolder="eMail"
                                label="E-Mail"
                                variant="outlined"
                                size="medium"
                                style={{width: '150%'}}

                                validators={['required', 'isString']}
                            />
                            <TextValidator
                                id="outlined-basic"
                                placeHolder="eMail"
                                label="E-Mail"
                                variant="outlined"
                                size="medium"
                                style={{width: '150%'}}

                                validators={['required', 'isString']}
                            />
                        </div>
                        <div className={classes.col3}>
                            <GDSEButton size="medium" variant="contained" label="Clear" color="error" type="submit"  style={{width: '8%',marginRight:"40Px"}}/>
                            <GDSEButton size="medium" variant="contained" label="Add To Cart" color="success" type="submit"  style={{width: '9%',marginRight:"40Px"}}/>
                        </div>
                        <div className={classes.col4}>
                           <div className={classes.table}>
                               <MyTable
                                   columns={this.state.columns}
                                   rows={this.state.data}
                                   rowsPerPageOptions={5}
                                   pageSize={5}
                               />

                           </div>

                        </div>

                    </div>
                 </ValidatorForm>
             </>
        )
    }


}
export default withStyles(styleSheet) (Rent)