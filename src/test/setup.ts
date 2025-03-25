import {  afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import the package directly

// No need to explicitly extend expect with matchers; importing it registers them automatically

afterEach(() => {
  cleanup();
});