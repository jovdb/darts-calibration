// https://codepen.io/fta/pen/rNZrXp
// https://franklinta.com/2014/09/08/computing-css-matrix3d-transforms/
// https://codepen.io/hlarken/details/doRaeM

export type ControlPoint = [x: number, y: number];
export type ControlPoints = [
  topLeft: ControlPoint,
  topRight: ControlPoint,
  bottomRight: ControlPoint,
  bottomLeft: ControlPoint
];

export function getProjectionMatrix(from: ControlPoints, to: ControlPoints) {

  const A = []; //8x8
  for (let i = 0; i < 4; i++) {
    A.push([from[i][0], from[i][1], 1, 0, 0, 0, -from[i][0] * to[i][0], -from[i][1] * to[i][0]]);
    A.push([0, 0, 0, from[i][0], from[i][1], 1, -from[i][0] * to[i][1], -from[i][1] * to[i][1]]);
  }

  const B = []; //8x1
  for (var i = 0; i < 4; i++) {
    B.push(to[i][0]);
    B.push(to[i][1]);
  }

  // https://math.libretexts.org/Bookshelves/Linear_Algebra/Fundamentals_of_Matrix_Algebra_(Hartman)/02%3A_Matrix_Arithmetic/2.05%3A_Solving_Matrix_Equations_AXB
  const h = solve(A, B, undefined);

  const H = [
    [h[0], h[1], 0, h[2]],
    [h[3], h[4], 0, h[5]],
    [0, 0, 1, 0],
    [h[6], h[7], 0, 1],
  ];

  // transpose matrix
  const transposed: number[] = [];
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      transposed.push(H[j][i]);
    };
  };

  return {
    /** math matrix */
    columnMajorMatrix: H,
    rowMajorMatrix: transposed,
    domMatrix: new DOMMatrix(transposed), // Use not available on server

    /** CSS matrix3d */
    cssMatrix3d: `matrix3d(${transposed.join(',')})`,
  };
}

// https://github.com/dnd-team/numeric-solve-js/blob/master/numeric-solve.js
const solve = (function () {
  function r(t, n, o, e) {
    if (o === n.length - 1) return e(t);
    var f,
      u = n[o],
      c = Array(u);
    for (f = u - 1; f >= 0; --f) c[f] = r(t[f], n, o + 1, e);
    return c;
  }
  function t(r) {
    for (var t = []; 'object' == typeof r;) t.push(r.length), (r = r[0]);
    return t;
  }
  function n(r) {
    var n, o;
    return 'object' == typeof r
      ? ((n = r[0]),
        'object' == typeof n
          ? ((o = n[0]), 'object' == typeof o ? t(r) : [r.length, n.length])
          : [r.length])
      : [];
  }
  function o(r) {
    var t,
      n = r.length,
      o = Array(n);
    for (t = n - 1; -1 !== t; --t) o[t] = r[t];
    return o;
  }
  function e(t) {
    return 'object' != typeof t ? t : r(t, n(t), 0, o);
  }
  function f(r, t) {
    t = t || !1;
    var n,
      o,
      f,
      u,
      a,
      h,
      i,
      l,
      g,
      v = r.length,
      y = v - 1,
      b = new Array(v);
    for (t || (r = e(r)), f = 0; v > f; ++f) {
      for (i = f, h = r[f], g = c(h[f]), o = f + 1; v > o; ++o)
        (u = c(r[o][f])), u > g && ((g = u), (i = o));
      for (
        b[f] = i,
        i != f && ((r[f] = r[i]), (r[i] = h), (h = r[f])),
        a = h[f],
        n = f + 1;
        v > n;
        ++n
      )
        r[n][f] /= a;
      for (n = f + 1; v > n; ++n) {
        for (l = r[n], o = f + 1; y > o; ++o)
          (l[o] -= l[f] * h[o]), ++o, (l[o] -= l[f] * h[o]);
        o === y && (l[o] -= l[f] * h[o]);
      }
    }
    return { LU: r, P: b };
  }
  function u(r, t) {
    var n,
      o,
      f,
      u,
      c,
      a = r.LU,
      h = a.length,
      i = e(t),
      l = r.P;
    for (n = h - 1; -1 !== n; --n) i[n] = t[n];
    for (n = 0; h > n; ++n)
      for (
        f = l[n],
        l[n] !== n && ((c = i[n]), (i[n] = i[f]), (i[f] = c)),
        u = a[n],
        o = 0;
        n > o;
        ++o
      )
        i[n] -= i[o] * u[o];
    for (n = h - 1; n >= 0; --n) {
      for (u = a[n], o = n + 1; h > o; ++o) i[n] -= i[o] * u[o];
      i[n] /= u[n];
    }
    return i;
  }
  var c = Math.abs;
  return function (r, t, n) {
    return u(f(r, n), t);
  };
})();
