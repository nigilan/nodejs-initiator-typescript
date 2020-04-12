/**
 * @file This file is for reference. This is a sample test file
 * Trying to run a few unit tests using mocha and chai
 *
 * @author
 * @date
 *
 */

import { assert, should } from 'chai';

should();

describe('sample test', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
  describe('true value check', () => {
    it('check true', () => {
      const isValid = true;
      isValid.should.equal(true);
    });
  });
  describe('false value check', () => {
    it('check false', () => {
      const isValid = false;
      isValid.should.equal(false);
    });
  });
});
