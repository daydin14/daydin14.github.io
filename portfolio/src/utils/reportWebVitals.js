/**
 * Reports web vitals metrics to the provided callback function.
 *
 * @param {Function} onPerfEntry - A callback function to handle the performance entries.
 * @returns {void}
 *
 * @example
 * reportWebVitals(console.log);
 *
 * @remarks
 * This function dynamically imports the 'web-vitals' library and uses its methods to measure
 * various web performance metrics such as CLS, FID, FCP, LCP, and TTFB. The results are passed
 * to the provided callback function.
 *
 * @see {@link https://web.dev/vitals/|Web Vitals Documentation}
 */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
