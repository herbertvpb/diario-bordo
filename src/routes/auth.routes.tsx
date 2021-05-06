import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import AuthContainer from '../components/AuthContainer';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <Auth.Screen name="SignIn" component={SignIn}/>
        <Auth.Screen name="SignUp" component={SignUp}/>
        <Auth.Screen name="ForgotPassword" component={ForgotPassword}/>
    </Auth.Navigator>
);

const AuthRoutesContainer: React.FC = () => (
    <AuthContainer>
        <AuthRoutes />
    </AuthContainer>
)


export default AuthRoutesContainer;