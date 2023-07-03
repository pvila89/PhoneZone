import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import useMobile from "../hooks/useMobile";
import MobileDetailPage from "../pages/MobileDetailPage";
import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";




jest.mock("../hooks/useMobile");

describe("MobileDetailPage", () => {
    it("should display mobile data", () => {
      const mockData = {
        id: '1',
        brand: 'Test Brand',
        model: 'Test Model',
        price: '1000',
        cpu: 'Test CPU',
        ram: '8GB',
        os: 'Test OS',
        displaySize: '6.5 inch',
        battery: '5000mAh',
        primaryCamera: ['48MP'],
        dimensions: 'Test Dimensions',
        weight: '200g',
        imgUrl: 'testImage.png',
        options: {
          storages: [],
          colors: []
        }
      };

      const queryClient = new QueryClient();

      
      useMobile.mockReturnValue({
        data: mockData,
        isLoading: false,
        error: null
      });
      
      render(
        <QueryClientProvider client={queryClient}>
            <Router>
            <MobileDetailPage />
            </Router>
      </QueryClientProvider>
      );
  
      expect(screen.getByText("Test Brand")).toBeInTheDocument();
      expect(screen.getByText("Test Model")).toBeInTheDocument();
      expect(screen.getByText("1000€")).toBeInTheDocument();
    });
});