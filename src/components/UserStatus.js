import { useUser } from '../state/UserContext.js';

export default function User() {
  const user = useUser();
  console.log(user);
  return (
    <div>
      {user.name && user.authenticated && (
        <h1>name : {user.name}</h1>
      )}
      {user.email && user.authenticated && (
        <p>email : {user.email}</p>
      )}
      {user.authenticated && user.subscribed && (
        <p>subscribed</p>
      )}
    </div>
  );
}


