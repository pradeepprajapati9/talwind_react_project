import React from 'react';
import { useParams } from 'react-router-dom'

const User = () => {
    const { userid } = useParams();
    return (
        <div className='text-center bg-green-400 p-3 text-3xl'>User:{userid}</div>
    )
}

export default User