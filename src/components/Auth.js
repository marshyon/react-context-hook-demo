import React from 'react'
import { useUserDispatch } from '../state/UserContext.js';

export default function Auth() {

    const dispatch = useUserDispatch();

    const handleLogin = () => {

        let id = ''
        for( let i = 0; i < 7; i++) {
            id += (Math.random() + 1).toString(36).substring(7);
        }
        dispatch({
            type: 'authenticated',
            id: id,
            name: 'John Doe',
            email: 'jon@doew.com',
            authenticated: true,
        });
    }

    const handleLogout = () => {
        dispatch({
            type: 'authenticated',
            id: '',
            name: '',
            email: '',
            authenticated: false,
        });
    }
    const handleSubscribe = () => {
        dispatch({
            type: 'subscribed',
            subscribed: true,
        });
    }

  return (
    <div>
        
    
        <button onClick={() => handleLogin()}>
            Login
        </button>
        <button onClick={() => handleLogout()}>
            Logout
        </button>
        <button onClick={() => handleSubscribe()}>
            Subscribe
        </button>


    </div>
  )
}
