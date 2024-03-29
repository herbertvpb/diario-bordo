import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions, View } from 'react-native';
import { Title } from 'react-native-paper';
import DrawerContent from '../components/DrawerContent';

import Dashboard from '../pages/Dashboard';
import IndividualBook from '../pages/IndividualBook';
import Licenses from '../pages/Licenses';
import Qualifications from '../pages/Qualifications';
import MedicalCertificate from '../pages/MedicalCertificate';
import Aircraft from '../pages/Aircraft';
import Logbook from '../pages/Logbook';
import EditProfile from '../pages/EditProfile';

const windowWidth = Dimensions.get('window').width;

const App = createDrawerNavigator();

const AppRoutes: React.FC = () => (
    <App.Navigator
        initialRouteName="Dashboard"
        drawerContent={props => <DrawerContent {...props}/>}
        drawerStyle={{
            width:  windowWidth < 400 ? windowWidth : windowWidth * 0.85,
        }}
    >
        <App.Screen name="Dashboard" component={Dashboard}/>
        <App.Screen name="IndividualBook" component={IndividualBook}/>
        <App.Screen name="Licenses" component={Licenses}/>
        <App.Screen name="Qualifications" component={Qualifications}/>
        <App.Screen name="MedicalCertificate" component={MedicalCertificate}/>
        <App.Screen name="Aircraft" component={Aircraft}/>
        <App.Screen name="Logbook" component={Logbook}/>
        <App.Screen name="EditProfile" component={EditProfile}/>
    </App.Navigator>
);

export default AppRoutes;