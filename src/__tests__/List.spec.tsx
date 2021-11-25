import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../store/store';
import List from '../components/List';

describe('List.tsx', () => {
  it('Check if the loading appear correctly', async () => {
    const store = configureStore({ reducer: { user: userReducer } });
    render(<Provider store={store}><List /></Provider>);
    const loadAnimation = await screen.findByTestId('loading-animation');
    expect(loadAnimation).toBeInTheDocument();
  });
});
