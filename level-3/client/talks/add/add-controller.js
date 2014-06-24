/* global module, _ */

'use strict';

module.exports = function AddCtrl($scope, $goUsers, $state) {
  $scope.talkVisibility = 'public';

  $scope.$on('$destroy', function() {
    // Listen for mass controller destruction
  });

  $scope.submitTalkForm = function(isValid) {
    $scope.submitted = true;

    if (!isValid) return;

    $goUsers().$self().then(function(selfModel) {
      var talkData = {
        title: $scope.title,
        description: $scope.description,
        duration: $scope.duration,
        deck: $scope.deck,
        video: $scope.video,
        author: selfModel.id
      };

     console.log('What shall we do with this?', talkData);

     // $state.go('talks.detail', { talkId: talk.$id });
    });
  };
};
