/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

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

    function ViewGameSetItem(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewGameSetItem screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="GameSetItem" type="msls.application.GameSetItem">
        /// Gets or sets the gameSetItem for this screen.
        /// </field>
        /// <field name="HitsCollection" type="msls.VisualCollection" elementType="msls.application.HitSetItem">
        /// Gets the hitsCollection for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewGameSetItem.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewGameSetItem", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditGame: $defineScreen(AddEditGame, [
            { name: "Game", kind: "local", type: lightSwitchApplication.GameSetItem }
        ], [
        ]),

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

        BrowseUserSet: $defineScreen(BrowseUserSet, [
            {
                name: "UsersSet", kind: "collection", elementType: lightSwitchApplication.UserSetItem,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.UserSet;
                }
            }
        ], [
        ]),

        ViewGameSetItem: $defineScreen(ViewGameSetItem, [
            { name: "GameSetItem", kind: "local", type: lightSwitchApplication.GameSetItem },
            {
                name: "HitsCollection", kind: "collection", elementType: lightSwitchApplication.HitSetItem,
                getNavigationProperty: function () {
                    if (this.owner.GameSetItem) {
                        return this.owner.GameSetItem.details.properties.HitsCollection;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Player");
                }
            }
        ], [
        ]),

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
        }),

        showViewGameSetItem: $defineShowScreen(function showViewGameSetItem(GameSetItem, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewGameSetItem screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewGameSetItem", parameters, options);
        })

    });

}(msls.application));
