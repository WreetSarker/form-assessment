import React from 'react';

const User = (props) => {
    const { email } = props.user;
    return (
        <div>
            <h2>{email}</h2>
        </div>
    );
};

export default User;