import React from 'react';

import User from '../../components/User';

const authIndexPage = (props) => (
    <div>
        <h1> The auth page of {props.appName}</h1>
        <User name="luis" age="12" />
    </div>
);

authIndexPage.getInitialProps = context => {
    const promise = new Promise((resolve,reject)=> {
        setTimeout(()=>{
            resolve({appName: 'superApp (Auth)'});
        }, 1000);
    });
    return promise;
}

export default authIndexPage