'use strict';

var expect = require('expect.js');

describe('models/index', function () {
  it('returns the task model', function () {
    var models = require('../models');
    expect(models.models.Tasks).to.be.ok();
  });

  it('returns the user model', function () {
    var models = require('../models');
    expect(models.models.Users).to.be.ok();
  });

  it('returns the project model', function () {
    var models = require('../models');
    expect(models.models.Projects).to.be.ok();
  });
  
});