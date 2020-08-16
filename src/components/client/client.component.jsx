import React from 'react';

import '../client/client.styles.css'

export const Client = props => (
    <div className= 'client-container'>
        <img 
        alt="order" 
        src={`https://robohash.org/${props.order.id}?set=set2&size=180x180`}
        />
        <h3>{props.order.client_name}</h3>
        <h4>{props.order.client_email}</h4>
    </div>
);