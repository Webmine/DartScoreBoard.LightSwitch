/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditGame.created = function (screen) {
    // Write code here.
    screen.Game.IsFinished = false;
    screen.Game.P1ActualScore = 0;
    screen.Game.P2ActualScore = 0;
    screen.Game.StartDate = Date.now();
};