import * as moduleExport from '@tonic-ui/styled-system/src';

test('should match expected exports', () => {
  const receivedExports = Object.keys(moduleExport);
  const expectedExports = [
    // pseudo
    'pseudoClassSelector',
    'pseudoElementSelector',

    // sx
    'sx',

    // system
    'system',
  ];

  expect(receivedExports.sort()).toEqual(expectedExports.sort());
});
