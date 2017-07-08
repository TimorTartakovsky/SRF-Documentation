'use strict';

describe('documentation_srf.version module', function() {
  beforeEach(module('documentation_srf.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
