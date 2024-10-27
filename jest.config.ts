import type { Config } from '@jest/types';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config.InitialOptions = {
  verbose: true,
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['/Users/mac/Documents/ypit-prosper/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': ['babel-jest', { presets: ['next/babel'] }],
    '\\.(css|less|scss|sass)$': 'jest-transform-stub',
    '\\.(png|jpg|jpeg|gif|webp|svg)$': '<rootDir>/fileTransformer.js',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(swiper)/)',
  ],
};

export default createJestConfig(config);
