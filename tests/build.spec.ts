import * as shell from 'shelljs';
import { describe, it, expect } from 'vitest';

describe('Build', () => {
    describe('Vue 2', () => {
        it('should complete successfully', () => {
            const output = shell.exec('ts-node tests/build-vue2.ts');

            expect(output.stderr).toBeFalsy();
            expect(output.code).toEqual(0);
        });
    });

    describe('Vue 3', () => {
        it('should complete successfully', () => {
            const output = shell.exec('ts-node tests/build-vue3.ts');

            expect(output.stderr).toBeFalsy();
            expect(output.code).toEqual(0);
        });
    });
});
