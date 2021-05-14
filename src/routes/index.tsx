import React from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
    const user = false;

    return user ? <AppRoutes /> : <AuthRoutes />
};

export default Routes;