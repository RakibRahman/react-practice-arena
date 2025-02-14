import { useEffect } from 'react';
import AppEmitter from './eventEmitter';
import { LOGIN_EVENT } from './constants';

const OTPHandler = () => {

    const handleLoginEvent = (phoneNumber: number) => {
        alert(`OTP sent to: ${phoneNumber}`);
        // Perform actions like sending an OTP
    };

    useEffect(() => {
        // Listen for the 'login' event
        AppEmitter.on(LOGIN_EVENT, handleLoginEvent);

        // Clean up the listener on component unmount
        return () => {
            AppEmitter.off(LOGIN_EVENT, handleLoginEvent);
        };
    }, []);

    return <div>Waiting for login event...</div>;
};

export default OTPHandler;