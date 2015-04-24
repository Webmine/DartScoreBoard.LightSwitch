/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditUser(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditUser screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="User" type="msls.application.UserSetItem">
        /// Gets or sets the user for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditUser.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditUser", parameters);
    }

    function BrowseGameSet(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseGameSet screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="GamesSet" type="msls.VisualCollection" elementType="msls.application.GameSetItem">
        /// Gets the gamesSet for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseGameSet.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseGameSet", parameters);
    }

    function AddEditGame(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditGame screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Game" type="msls.application.GameSetItem">
        /// Gets or sets the game for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditGame.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditGame", parameters);
    }

    function BrowseUserSet(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseUserSet screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="UsersSet" type="msls.VisualCollection" elementType="msls.application.UserSetItem">
        /// Gets the usersSet for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseUserSet.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseUserSet", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditUser: $defineScreen(AddEditUser, [
            { name: "User", kind: "local", type: lightSwitchApplication.UserSetItem }
        ], [
        ]),

        BrowseGameSet: $defineScreen(BrowseGameSet, [
            {
                name: "GamesSet", kind: "collection", elementType: lightSwitchApplication.GameSetItem,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.GameSet.expand("Player1User").expand("Player2User");
                }
            }
        ], [
        ]),

        AddEditGame: $defineScreen(AddEditGame, [
            { name: "Game", kind: "local", type: lightSwitchApplication.GameSetItem }
        ], [
        ]),

        BrowseUserSet: $defineScreen(BrowseUserSet, [
            {
                name: "UsersSet", kind: "collection", elementType: lightSwitchApplication.UserSetItem,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.UserSet;
                }
            }
        ], [
        ]),

        showAddEditUser: $defineShowScreen(function showAddEditUser(User, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditUser screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditUser", parameters, options);
        }),

        showBrowseGameSet: $defineShowScreen(function showBrowseGameSet(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseGameSet screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseGameSet", parameters, options);
        }),

        showAddEditGame: $defineShowScreen(function showAddEditGame(Game, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditGame screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditGame", parameters, options);
        }),

        showBrowseUserSet: $defineShowScreen(function showBrowseUserSet(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseUserSet screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseUserSet", parameters, options);
        })

    });

}(msls.application));
