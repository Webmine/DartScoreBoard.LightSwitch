/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditGame.created = function (screen) {
    // Write code here.
    screen.Game.IsFinished = false;
    screen.Game.P1ActualScore = 0;
    screen.Game.P2ActualScore = 0;
    screen.Game.StartDate = Date.now();
};
myapp.AddEditGame.beforeApplyChanges = function (screen) {
    // Write code here.
    //if (screen.Game.Player1User.Name === screen.Game.Player2User.Name) {
    //    var a = new msls.ValidationResult('Player1User', 'Válasz másik játéksot!');
    //    screen.findContentItem('Player1User').validationResults = [a];
    //} else {
    //    screen.findContentItem('Player1User').validationResults = [];
    //}
    
};
