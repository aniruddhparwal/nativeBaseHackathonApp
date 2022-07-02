import React, { createContext } from 'react';
export const initialState = {
  token: '',
};
export const TokenContext = createContext(initialState);