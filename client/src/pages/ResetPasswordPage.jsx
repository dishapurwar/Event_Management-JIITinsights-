// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const ResetPasswordPage = () => {
//     const { token } = useParams();
//     const [newPassword, setNewPassword] = useState('');
//     const [resetStatus, setResetStatus] = useState(null); // To store the status of password reset
//     const navigate = useNavigate();

//     const handleResetPassword = async () => {
//         try {
//             const response = await fetch('http://localhost:5173/api/reset-password/' + token, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//                 body: JSON.stringify({
//                     newPassword,
//                 }),
//             });

//             if (response.ok) {
//                 // Password reset successful
//                 setResetStatus({ success: true, message: 'Password reset successful!' });
//                 // You can navigate the user to the login page or any other page
//                 // navigate('/login');
//             } else {
//                 // Password reset failed
//                 setResetStatus({ success: false, message: 'Password reset failed. Please try again.' });
//             }
//         } catch (error) {
//             console.error('Error resetting password:', error);
//             setResetStatus({ success: false, message: 'An error occurred. Please try again later.' });
//         }
//     };

//     return (
//         <div>
//             <h1>Password Reset Page</h1>
//             <label>New Password:</label>
//             <input
//                 type="password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//             />
//             <br />
//             <button onClick={handleResetPassword}>Reset Password</button>

//             {resetStatus && (
//                 <div style={{ marginTop: '10px', color: resetStatus.success ? 'green' : 'red' }}>
//                     {resetStatus.message}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ResetPasswordPage;


import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ResetPasswordPage = () => {
    const { token } = useParams();
    const [newPassword, setNewPassword] = useState('');
    const [resetStatus, setResetStatus] = useState(null); // To store the status of password reset
    const navigate = useNavigate();

    const handleResetPassword = async () => {
        console.log('Resetting password with newPassword:', newPassword, 'and token:', token);

        try {
            const response = await fetch('http://localhost:5173/api/reset-password/' + token, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    newPassword,
                }),
            });

            if (response.ok) {
                // Password reset successful
                setResetStatus({ success: true, message: 'Password reset successful!' });
                // You can navigate the user to the login page or any other page
                // navigate('/login');
            } else {
                // Password reset failed
                setResetStatus({ success: false, message: 'Password reset failed. Please try again.' });
            }
        } catch (error) {
            console.error('Error resetting password:', error);
            setResetStatus({ success: false, message: 'An error occurred. Please try again later.' });
        }
    };

    return (
        <div>
            <h1>Password Reset Page</h1>
            <label>New Password:</label>
            <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <br />
            <button onClick={handleResetPassword}>Reset Password</button>

            {resetStatus && (
                <div style={{ marginTop: '10px', color: resetStatus.success ? 'green' : 'red' }}>
                    {resetStatus.message}
                </div>
            )}
        </div>
    );
};

export default ResetPasswordPage;
