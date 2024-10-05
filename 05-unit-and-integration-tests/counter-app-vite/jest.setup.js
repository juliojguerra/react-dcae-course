// jest.setup.js

import "@testing-library/jest-dom";

// Mock any global objects or functions you want across all tests, e.g., fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

// You can add any other global setup or customizations here
