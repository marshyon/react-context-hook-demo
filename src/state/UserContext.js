import { createContext, useContext, useReducer } from 'react';

const UserContext = createContext(null);
const UserDispatchContext = createContext(null);

const initialUser = { 
    id: '',
    name: '',
    bio: '',
    picture: '', 
    email: '', 
    authenticated: false,
    verified: false,
    subscribed: false,  
}


export function UserProvider({ children }) {
    const [tasks, dispatch] = useReducer(
        userReducer,
        initialUser
    );

    return (
        <UserContext.Provider value={tasks}>
            <UserDispatchContext.Provider
                value={dispatch}
            >
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}

export function useUserDispatch() {
    return useContext(UserDispatchContext);
}

function userReducer(user, action) {
    switch (action.type) {
        case 'authenticated': {
            return { 
                id: action.id,
                name: action.name,
                bio: user.bio,
                picture: user.picture, 
                email: action.email, 
                authenticated: action.authenticated,
                verified: user.verified,
                subscribed: user.subscribed,  
            }
        }
        case 'subscribed': {
            console.log(user)
            console.log(action)
            return { 
                id: user.id,
                name: user.name,
                bio: user.bio,
                picture: user.picture, 
                email: user.email, 
                authenticated: user.authenticated,
                verified: user.verified,
                subscribed: action.subscribed,  
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

