/* global module */

'use strict';

module.exports = function ListCtrl($scope) {
  var author = {
    displayName: 'Big Nickie Cage',
    avatarUrl: 'http://www.placecage.com/200/200'
  };

  $scope.talks = [
    {
      title: 'Being Nicholas Cage',
      description: 'Why being Nicolas Cage is totally awesome, and everyone should do it',
      author: author
    },
    {
      title: 'My Best Movies',
      description: 'Ghost Rider, Ghost Rider 2, Ghost Rider 3, Ghost Rider 4, Bad Lieutenant',
      author: author
    },
    {
      title: 'Movies I Should Have Starred In',
      description: 'The Notebook, Batman (all of them), The Titanic, Avatar, and every other movie',
      author: author
    }
  ];
};
