import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { mockReset } from 'jest-mock-extended';
import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from 'react-router-dom';
import MobilesList from '../components/MobilesLIst';
import useMobiles from '../hooks/useMobiles';



jest.mock('../hooks/useMobiles');

const useMobilesMock = useMobiles;

describe('MobilesList', () => {
  let queryClient;

  beforeEach(() => {
    queryClient = new QueryClient();
    mockReset(useMobilesMock);
  });

  test('should display list of mobiles', async () => {
    const mockMobiles = [
      { id: '1', brand: 'Brand 1', model: 'Model 1', price: '100', imgUrl: 'url1' },
      { id: '2', brand: 'Brand 2', model: 'Model 2', price: '200', imgUrl: 'url2' }
    ];

    useMobilesMock.mockReturnValue({
      data: mockMobiles,
      isLoading: false,
    });

    const { findByText } = render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <MobilesList />
        </Router>
      </QueryClientProvider>
    );
    
    const mobile1 = await findByText(/Brand 1 Model 1/i);
    expect(mobile1).toBeInTheDocument();

    const mobile2 = await findByText(/Brand 2 Model 2/i);
    expect(mobile2).toBeInTheDocument();
  });

});