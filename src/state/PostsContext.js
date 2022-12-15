import { createContext, useContext, useReducer } from 'react';

const PostsContext = createContext(null);
const PostsDispatchContext = createContext(null);

const initialPosts = {
    posts: []
}

export function PostsProvider({ children }) {
    const [tasks, dispatch] = useReducer(
        userReducer,
        initialPosts
    );

    return (
        <PostsContext.Provider value={tasks}>
            <PostsDispatchContext.Provider
                value={dispatch}
            >
                {children}
            </PostsDispatchContext.Provider>
        </PostsContext.Provider>
    );
}

export function usePosts() {
    return useContext(PostsContext);
}

export function usePostsDispatch() {
    return useContext(PostsDispatchContext);
}

function userReducer(posts, action) {
    switch (action.type) {
        case 'load': {
            return {
                posts: action.posts
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

