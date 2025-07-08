import React, { useState } from 'react';
import Login from './Login';
import Books from './Books';

function App() {
    const [token, setToken] = useState(localStorage.getItem('access'));
    return (
        <div>
            {token ? <Books /> : <Login setToken={setToken} />}
        </div>
    );
}

export default App;
