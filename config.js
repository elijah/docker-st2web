'use strict';
angular.module('main')
  .constant('st2Config', {

    hosts: [{
      name: 'docker',
      url: '//192.168.90.5:9101',
      auth: true
    }]

  });
