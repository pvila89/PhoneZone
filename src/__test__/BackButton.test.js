import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BackButton from '../components/BackButton';
import React from 'react';

describe('BackButton', () => {
    test('renders without error', () => {
      render(
        <Router>
          <BackButton handleAddToCart={() => {}} />
        </Router>
      );
    });
  
    test('calls handleAddToCart on button click', () => {
      const handleAddToCartMock = jest.fn();
      const { getByRole } = render(
        <Router>
          <BackButton handleAddToCart={handleAddToCartMock} />
        </Router>
      );
  
      const button = getByRole('button');
      fireEvent.click(button);
  
      expect(handleAddToCartMock).toHaveBeenCalled();
    });
  });
  