import React from "react";
import "./Body.css";
import Body from "./Body";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {state: state.massagesReducer}
};

let mapDispatchToProps = (dispatch) => {
return {
    addMsg: () => {
        dispatch({type: "ADD_MSG"})
    },
    updateMsg : (text) => {
        dispatch({type: "UPD_NEW_MSG", newText:text})
    }
}
};
const BodyContainer = connect(mapStateToProps,mapDispatchToProps)(Body);

export default BodyContainer;