import React from "react";
import c from './Users.module.css';
import profileImage from "../../assets/profile/profile.png";

let Users = (props) => {
    return <div className={c.clients}>
        {
            props.clients.map(u => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.url !== '' ? u.url : profileImage}/>
                        </div>
                        <div>
                            <button onClick = { () => { props.follow(u.id) } } >
                                {u.follow ? 'Unfollow' : 'Follow'}
                            </button>
                        </div>
                    </span>
                    <span>
                        <span>
                            <div> {u.name} </div>
                            <div> {u.status} </div>
                        </span>
                        <span>
                            <div> {u.location.country} </div>
                            <div> {u.location.city} </div>
                        </span>
                    </span>
                </div>)
            )
        }
    </div>
};

export default Users;
