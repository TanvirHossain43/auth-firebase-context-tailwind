import React, { useContext } from 'react';
import { AuthContext } from './Providers/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h2>This is home</h2>
            {user && <p>{user.displayName}</p>}
        </div>
    );
};

export default Home;