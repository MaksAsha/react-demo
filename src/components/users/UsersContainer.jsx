import React from "react";
import {connect} from "react-redux";
import Users from "./Users";

import {followActionCreator} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        clients: state.usersPage.usersData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;