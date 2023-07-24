// https://github.com/thednp/dommatrix/blob/master/src/index.ts
// https://github.com/kamicane/matrix3d/blob/master/lib/Matrix3d.js

const M11 = 0, M12 = 1, M13 = 2, M14 = 3;
const M21 = 4, M22 = 5, M23 = 6, M24 = 7;
const M31 = 8, M32 = 9, M33 = 10, M34 = 11;
const M41 = 12, M42 = 13, M43 = 14, M44 = 15;
const RAD_PER_DEGREE = Math.PI / 180;

/**
 * M11, M12, M13, M14,
 * M21, M22, M23, M24,
 * M31, M32, M33, M34,
 * M41, M42, M43, M44
 */
export type MatrixValues = [
    M11: number, M12: number, M13: number, M14: number,
    M21: number, M22: number, M23: number, M24: number,
    M31: number, M32: number, M33: number, M34: number,
    M41: number, M42: number, M43: number, M44: number
];

/** Usable for 3D represents a read-only 4×4 matrix, suitable for 2D and 3D */
export class Matrix {

    private values: MatrixValues;

    /** Create a 3D matrix */
    constructor(
        m11: number,
        m12: number,
        m13: number,
        m14: number,
        m21: number,
        m22: number,
        m23: number,
        m24: number,
        m31: number,
        m32: number,
        m33: number,
        m34: number,
        m41: number,
        m42: number,
        m43: number,
        m44: number,
    );

    constructor(...args: number[]);

    /** create an identity matrix */
    constructor();

    constructor(...args: number[]) {
        if (args.length === 0) {
            this.values = Matrix.identity.values;
        }
        else if (args.length === 16) {
            this.values = args.slice() as any;
        }
        else throw new Error("new Matrix: Invalid number of arguments");
    }

    /*
    private get m11() { return this.values[M11]; }
    private get m12() { return this.values[M12]; }
    private get m13() { return this.values[M13]; }
    private get m14() { return this.values[M14]; }
    private get m21() { return this.values[M21]; }
    private get m22() { return this.values[M22]; }
    private get m23() { return this.values[M23]; }
    private get m24() { return this.values[M24]; }
    private get m31() { return this.values[M31]; }
    private get m32() { return this.values[M32]; }
    private get m33() { return this.values[M33]; }
    private get m34() { return this.values[M41]; }
    private get m41() { return this.values[M42]; }
    private get m42() { return this.values[M43]; }
    private get m43() { return this.values[M44]; }
    */
    // private get m44() { return this.values[15]; }

    static identity = new Matrix(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    );


    static scale(scaleXY: number): Matrix;
    static scale(scaleX: number, scaleY: number, scaleZ: number): Matrix;
    static scale(scaleX: number, scaleY: number = scaleX, scaleZ: number = 1) {
        return new Matrix(
            scaleX, 0, 0, 0,
            0, scaleY, 0, 0,
            0, 0, scaleZ, 0,
            0, 0, 0, 1
        );
    }

    static translate(x: number, y: number = x, z: number = 0) {
        return new Matrix(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            x, y, z, 1
        );
    }

    static rotate(degZ: number): Matrix;
    static rotate(degX: number, degY: number, degZ: number): Matrix;
    static rotate(degX: number, degY?: number, degZ?: number) {
        if (typeof degX === 'number' && typeof degY === 'undefined' && typeof degZ === 'undefined') {
            degZ = degX;
            degY = 0;
            degX = 0;
        }

        if (typeof degY !== "number") degY = 0;
        if (typeof degZ !== "number") degZ = 0;

        degX *= RAD_PER_DEGREE;
        degY *= RAD_PER_DEGREE;
        degZ *= RAD_PER_DEGREE;

        let m = Matrix.identity;

        if (degZ) {
            const c = Math.cos(degZ);
            const s = Math.sin(degZ);

            m = new Matrix(
                c, s, 0, 0,
                -s, c, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1
            );
        }

        if (degY) {
            const c = Math.cos(degY);
            const s = Math.sin(degY);

            m = Matrix.multiply(new Matrix(
                c, 0, -s, 0,
                0, 1, 0, 0,
                s, 0, c, 0,
                0, 0, 0, 1
            ), m);
        }

        if (degX) {
            const c = Math.cos(degX);
            const s = Math.sin(degX);

            m = Matrix.multiply(new Matrix(
                1, 0, 0, 0,
                0, c, s, 0,
                0, -s, c, 0,
                0, 0, 0, 1
            ), m);
        }

        return m;

        /*
                const degToRad = Math.PI / 180;
                const radX = x * degToRad;
                const radY = y * degToRad;
                const radZ = z * degToRad;
        
                // minus sin() because of right-handed system
                const cosx = Math.cos(radX);
                const sinx = -Math.sin(radX);
                const cosy = Math.cos(radY);
                const siny = -Math.sin(radY);
                const cosz = Math.cos(radZ);
                const sinz = -Math.sin(radZ);
        
                const m11 = cosy * cosz;
                const m12 = -cosy * sinz;
                const m13 = siny;
        
                const m21 = sinx * siny * cosz + cosx * sinz;
                const m22 = cosx * cosz - sinx * siny * sinz;
                const m23 = -sinx * cosy;
        
                const m31 = sinx * sinz - cosx * siny * cosz;
                const m32 = sinx * cosz + cosx * siny * sinz;
                const m33 = cosx * cosy;
        
                return new Matrix(
                    m11, m12, m13, 0,
                    m21, m22, m23, 0,
                    m31, m32, m33, 0,
                    0, 0, 0, 1
                );
                */
    };

    static multiply(...ms: (Matrix | null | undefined)[]): Matrix {
        if (ms.length === 0) return Matrix.identity;
        if (ms.length === 1) return ms[0] || Matrix.identity;
        if (ms.length === 2) {
            const m: number[] = [];
            const m0 = ms[0] || Matrix.identity;
            const m1 = ms[1] || Matrix.identity;
            for (let j = 0; j < 4; j++) {
                for (let i = 0; i < 4; i++) {
                    let value = 0;
                    for (let k = 0; k < 4; k++) {
                        value += m0.values[k * 4 + i] * m1.values[j * 4 + k];
                    }
                    m[j * 4 + i] = value;
                }
            }
            // ts-expect-error
            return new Matrix(...m);
        }

        // Recursion or reduce?
        return ms.slice(1).reduce<Matrix>((prev, next) => Matrix.multiply(prev, next), ms[0] || Matrix.identity);
    }

    static areSimilar(m1: Matrix, m2: Matrix, epsilon = Number.EPSILON) {
        const areEqual = (a: number, b: number) => Math.abs(a - b) < epsilon;
        return m1.values.every((v, i) => areEqual(v, m2.values[i]));
    }

    static inverse(m: Matrix) {
        const values = m.values;
        const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = values;

        let b00 = a00 * a11 - a01 * a10;
        let b01 = a00 * a12 - a02 * a10;
        let b02 = a00 * a13 - a03 * a10;
        let b03 = a01 * a12 - a02 * a11;
        let b04 = a01 * a13 - a03 * a11;
        let b05 = a02 * a13 - a03 * a12;
        let b06 = a20 * a31 - a21 * a30;
        let b07 = a20 * a32 - a22 * a30;
        let b08 = a20 * a33 - a23 * a30;
        let b09 = a21 * a32 - a22 * a31;
        let b10 = a21 * a33 - a23 * a31;
        let b11 = a22 * a33 - a23 * a32;

        // Calculate the determinant
        const det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

        // If det is zero, we want to return false. However, we also want to return false
        // if 1/det overflows to infinity (i.e. det is denormalized). Both of these are
        // handled by checking that 1/det is finite.
        if (det === 0 || !isFinite(det)) return undefined;

        const invdet = 1.0 / det;

        b00 *= invdet;
        b01 *= invdet;
        b02 *= invdet;
        b03 *= invdet;
        b04 *= invdet;
        b05 *= invdet;
        b06 *= invdet;
        b07 *= invdet;
        b08 *= invdet;
        b09 *= invdet;
        b10 *= invdet;
        b11 *= invdet;

        return new Matrix(
            a11 * b11 - a12 * b10 + a13 * b09,
            a02 * b10 - a01 * b11 - a03 * b09,
            a31 * b05 - a32 * b04 + a33 * b03,
            a22 * b04 - a21 * b05 - a23 * b03,
            a12 * b08 - a10 * b11 - a13 * b07,
            a00 * b11 - a02 * b08 + a03 * b07,
            a32 * b02 - a30 * b05 - a33 * b01,
            a20 * b05 - a22 * b02 + a23 * b01,
            a10 * b10 - a11 * b08 + a13 * b06,
            a01 * b08 - a00 * b10 - a03 * b06,
            a30 * b04 - a31 * b02 + a33 * b00,
            a21 * b02 - a20 * b04 - a23 * b00,
            a11 * b07 - a10 * b09 - a12 * b06,
            a00 * b09 - a01 * b07 + a02 * b06,
            a31 * b01 - a30 * b03 - a32 * b00,
            a20 * b03 - a21 * b01 + a22 * b00
        );
    }

    static transformPoint(m: Matrix, point: { x: number, y: number, z?: number, w?: number }) {
        const { x, y, z = 0, w = 1 } = point;
        const { values: v } = m;
        const newX = v[M11] * x + v[M21] * y + v[M31] * z + v[M41] * w;
        const newY = v[M12] * x + v[M22] * y + v[M32] * z + v[M42] * w;
        const newZ = v[M13] * x + v[M23] * y + v[M33] * z + v[M43] * w;
        const newW = v[M14] * x + v[M24] * y + v[M34] * z + v[M44] * w;

        return { x: newX, y: newY, z: newZ, w: newW };
    }

    public multiply(...m: (Matrix | null | undefined)[]) {
        return Matrix.multiply(this, ...m);
    }

    /** Scale each axis by the same value */
    public scale(scale: number): Matrix
    /** Scale each axis by the specified value */
    public scale(scaleX: number, scaleY?: number, scaleZ?: number): Matrix
    public scale(scaleX: number, scaleY: number, scaleZ: number, originX: number, originY: number, originZ?: number): Matrix

    public scale(scaleX: number, scaleY = scaleX, scaleZ = 1, originX = 0, originY = 0, originZ = 0) {
        if (originX || originY || originZ) {
            return this.multiply(
                Matrix.translate(originX, originY, originZ),
                Matrix.scale(scaleX, scaleY, scaleZ),
                Matrix.translate(-originX, -originY, -originZ),
            );
        }
        return this.multiply(Matrix.scale(scaleX, scaleY, scaleZ));
    }

    /**
     * Returns a new DOMMatrix containing a matrix calculated by translating the source matrix using the specified vector.
     * By default, the vector is (0, 0, 0).
     * The original matrix is not changed.
     */
    public translate(x: number, y?: number, z?: number) {
        return this.multiply(Matrix.translate(x, y, z));
    }

    /**
     * Returns a new DOMMatrix created by rotating the source matrix around each of its axes by the specified number of degrees.
     * The original matrix is not altered.
     */
    public rotate(degZ: number): Matrix;
    public rotate(degX: number, degY?: number, degZ?: number): Matrix;
    public rotate(degX: number, degY: number, degZ: number, originX: number, originY: number, originZ?: number): Matrix;
    public rotate(degX: number, degY?: number, degZ?: number, originX = 0, originY = 0, originZ = 0) {
        if (originX || originY || originZ) {
            return this.multiply(
                Matrix.translate(originX, originY, originZ),
                Matrix.rotate(degX, degY!, degZ!),
                Matrix.translate(-originX, -originY, -originZ),
            );
        }

        return this.multiply(Matrix.rotate(degX, degY!, degZ!));
    }
    /**
     * Returns a new DOMMatrix created by inverting the source matrix.
     * If the matrix cannot be inverted, the new matrix's components are all set to NaN and its is2D property is set to false.
     * The original matrix is not altered.
     */
    public inverse() {
        return Matrix.inverse(this);
    }

    /**
     * Transforms the specified point using the matrix, returning a new point  object containing the transformed point.
     * Neither the matrix nor the original point are altered.
     */
    public transformPoint(point: Readonly<{ x: number, y: number, z?: number }>) {
        return Matrix.transformPoint(this, point);
    }

    public areSimilar(m: Matrix, epsilon = Number.EPSILON) {
        return Matrix.areSimilar(this, m, epsilon);
    }

    /** @decimalPlaces the number of digits to the right of the decimal point in a number. */
    public round(decimalPlaces: number) {
        const scale = Math.pow(10, decimalPlaces);
        return new Matrix(...this.values.map(v => Math.round(v * scale) / scale));
    }

    public toCssString() {
        return `matrix3d(${this.values.join(',')})`;
    }

    public toString() {
        return `matrix3d(${this.values.join(',')})`;
    }
}