import { expect, it, describe } from '@jest/globals';

import isValidURL from './src/mixins/isValidURL';

describe('isValidURL', () => {
    it('should return true for a valid URL', () => {
        expect(isValidURL('https://www.example.com')).toBe(true);
        expect(isValidURL('http://www.example.com')).toBe(true);
        expect(isValidURL('http://www.example.com?query=string#fragment')).toBe(true);
        expect(isValidURL('http://www.example.com?query=string&param=value#fragment')).toBe(true);
        expect(isValidURL('ftp://example.com')).toBe(true);
    });

    it('should return false for an invalid URL', () => {
        expect(isValidURL('example')).toBe(false);
        expect(isValidURL('example.com/')).toBe(false);
        expect(isValidURL('//example.com')).toBe(false);
        expect(isValidURL('https://example')).toBe(false);
        expect(isValidURL('www.example.com')).toBe(false);
        expect(isValidURL('example.com')).toBe(false);
        expect(isValidURL('example.com/path')).toBe(false);
        expect(isValidURL('example.com/path?query=string')).toBe(false);
        expect(isValidURL('example.com/path#fragment')).toBe(false);
    });
});