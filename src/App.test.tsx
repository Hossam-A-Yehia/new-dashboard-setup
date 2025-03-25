import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App Component', () => {
  // Test 1: Check if the component renders
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Welcome to My App')).toBeInTheDocument();
  });
  // Test 3: Check if the button is rendered with correct text
  it('renders the MUI Button with "Click Me" text', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
  });

  // Test 4: Check if the container has the correct layout classes
  it('applies correct Tailwind classes to the container', () => {
    render(<App />);
    const outerDiv = screen.getByText('Welcome to My App').parentElement?.parentElement;
    expect(outerDiv).toHaveClass('min-h-screen', 'flex', 'items-center', 'justify-center', 'bg-gray-100');
  });

  // Test 5: Check if the inner container has correct styling classes
  it('applies correct Tailwind classes to the inner container', () => {
    render(<App />);
    const innerDiv = screen.getByText('Welcome to My App').parentElement;
    expect(innerDiv).toHaveClass('p-6', 'bg-white', 'rounded-lg', 'shadow-lg');
  });
});