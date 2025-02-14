import { LOGIN_EVENT } from './constants';
import AppEmitter from './eventEmitter';

const LoginButton = () => {
  const handleLogin = () => {
    const phoneNumber = '01829546'; // Example phone number
    AppEmitter.emit(LOGIN_EVENT, phoneNumber); // Emit the 'login' event
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default LoginButton;