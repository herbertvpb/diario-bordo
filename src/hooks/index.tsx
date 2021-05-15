/* eslint-disable react/prop-types */
import React from 'react';

import { AuthProvider } from './auth';
import { DimensionsProvider } from './dimensions';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <DimensionsProvider>
      {children}
    </DimensionsProvider>
  </AuthProvider>
);

export default AppProvider;
