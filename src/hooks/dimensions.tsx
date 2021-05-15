/* eslint-disable react/prop-types */
import React, { createContext, useState, useContext } from 'react';
import { Dimensions } from 'react-native';

interface IDimensions {
  width: number;
  height: number;
  isSmallScreen: boolean;
}

interface IDimensionsContextData {
  width: number;
  height: number;
  isSmallScreen: boolean;
}

const DimensionsContext = createContext<IDimensionsContextData>(
  {} as IDimensionsContextData,
);

const DimensionsProvider: React.FC = ({ children }) => {
  const { width, height } = Dimensions.get('window');

  const [data, setData] = useState<IDimensions>({
    width,
    height,
    isSmallScreen: height < 400,
  } as IDimensions);

  return (
    <DimensionsContext.Provider value={data}>
      {children}
    </DimensionsContext.Provider>
  );
};

function useDimensions(): IDimensionsContextData {
  const context = useContext(DimensionsContext);

  if (!context) {
    throw new Error('useDimensions must be used within an DimensionsProvider');
  }

  return context;
}

export { DimensionsProvider, useDimensions };
