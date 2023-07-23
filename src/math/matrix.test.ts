import { describe, test, expect, xtest } from '@jest/globals';
import { Matrix } from "./matrix";

describe("Matrix", () => {
    describe("scale", () => {
        test('scale(2)', () => {
            const point = { x: 2, y: 2, z: 2 };
            const expected = { x: 4, y: 4, z: 2, w: 1 };
            expect(Matrix.scale(2).transformPoint(point)).toEqual(expected);
            expect(Matrix.identity.scale(2).transformPoint(point)).toEqual(expected);
        });
        test('scale(1, 2, 3)', () => {
            const point = { x: 2, y: 2, z: 2 };
            const expected = { x: 2, y: 4, z: 6, w: 1 };
            expect(Matrix.scale(1, 2, 3).transformPoint(point)).toEqual(expected);
            expect(Matrix.identity.scale(1, 2, 3).transformPoint(point)).toEqual(expected);
        });
    });
    describe("translate", () => {
        test('translate(1, 2)', () => {
            const point = { x: 2, y: 2, z: 2 };
            const expected = { x: 3, y: 4, z: 2, w: 1 };
            expect(Matrix.translate(1, 2).transformPoint(point)).toEqual(expected);
            expect(Matrix.identity.translate(1, 2).transformPoint(point)).toEqual(expected);
        });
        test('translate(1, 2)', () => {
            const point = { x: 2, y: 2, z: 2 };
            const expected = { x: 3, y: 4, z: 2, w: 1 };
            expect(Matrix.translate(1, 2).transformPoint(point)).toEqual(expected);
            expect(Matrix.identity.translate(1, 2).transformPoint(point)).toEqual(expected);
        });
    });

    describe("rotate", () => {
        test('rotate(90)', () => {
            const point = { x: 1, y: 3 };
            const expected = { x: -3, y: 1, z: 0, w: 1 };
            expect(Matrix.rotate(90).round(5).transformPoint(point)).toEqual(expected);
            expect(Matrix.identity.rotate(90).round(5).transformPoint(point)).toEqual(expected);
        });
    });
});