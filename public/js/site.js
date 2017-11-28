let app = angular.module("siteApp", [])

app.controller("siteCtrl", function($scope) {
    let socket = io()
    
    $scope.msgs = []
    $scope.sendMsg = function() {
        socket.emit('chat message', $scope.txt)
        $scope.txt = ""
    }
    
    socket.on('chat message', function(message) {
        $scope.msgs.push(message)
        $scope.$apply()
    })
})
