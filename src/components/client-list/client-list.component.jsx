import React from 'react';

import { Client } from '../client/client.component'
import './client-list.styles.css'


export const ClientList = props => (
    <div className='client-list'>
        {props.orders.map(order => (
        <Client key={order.id} order={order} />
        ))}
    </div>

);