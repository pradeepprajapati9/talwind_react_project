import React,{ useState, useContext } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);

    const HandleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }
    return (
        <div>

            <div className="container">
                <h1 className='text-center bg-green-400'>Login</h1>
                <div className="row justify-center">
                    <div className="col-8">
                        <div className="mb-6">
                            <label htmlFor="username-success" >Your name</label>
                            <input
                                type="text"
                                placeholder="Bonnie Green"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                        </div>
                        <div>
                            <label htmlFor="username-error">Your Password</label>
                            <input
                                type="text"
                                placeholder="Bonnie Green"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button  onClick={HandleSubmit}>submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login