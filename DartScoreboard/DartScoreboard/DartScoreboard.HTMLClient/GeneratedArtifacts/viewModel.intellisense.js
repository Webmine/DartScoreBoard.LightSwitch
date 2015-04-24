/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditGame.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditGame
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditGame,
            data: lightSwitchApplication.AddEditGame,
            value: lightSwitchApplication.AddEditGame
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditGame,
            data: lightSwitchApplication.AddEditGame,
            value: lightSwitchApplication.GameSetItem
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditGame,
            data: lightSwitchApplication.GameSetItem,
            value: lightSwitchApplication.GameSetItem
        },
        Player1User: {
            _$class: msls.ContentItem,
            _$name: "Player1User",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditGame,
            data: lightSwitchApplication.GameSetItem,
            value: lightSwitchApplication.UserSetItem
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Player1User",
            screen: lightSwitchApplication.AddEditGame,
            data: lightSwitchApplication.UserSetItem,
            value: lightSwitchApplication.UserSetItem
        },
        Player2User: {
            _$class: msls.ContentItem,
            _$name: "Player2User",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditGame,
            data: lightSwitchApplication.GameSetItem,
            value: lightSwitchApplication.UserSetItem
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Player2User",
            screen: lightSwitchApplication.AddEditGame,
            data: lightSwitchApplication.UserSetItem,
            value: lightSwitchApplication.UserSetItem
        },
        StartScore: {
            _$class: msls.ContentItem,
            _$name: "StartScore",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditGame,
            data: lightSwitchApplication.GameSetItem,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditGame
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditGame, {
        /// <field>
        /// Called when a new AddEditGame screen is created.
        /// <br/>created(msls.application.AddEditGame screen)
        /// </field>
        created: [lightSwitchApplication.AddEditGame],
        /// <field>
        /// Called before changes on an active AddEditGame screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditGame screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditGame],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditGame().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditGame().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditGame().findContentItem("left"); }],
        /// <field>
        /// Called after the Player1User content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Player1User_postRender: [$element, function () { return new lightSwitchApplication.AddEditGame().findContentItem("Player1User"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditGame().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Player2User content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Player2User_postRender: [$element, function () { return new lightSwitchApplication.AddEditGame().findContentItem("Player2User"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditGame().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the StartScore content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartScore_postRender: [$element, function () { return new lightSwitchApplication.AddEditGame().findContentItem("StartScore"); }]
    });

    lightSwitchApplication.AddEditUser.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditUser
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditUser,
            data: lightSwitchApplication.AddEditUser,
            value: lightSwitchApplication.AddEditUser
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditUser,
            data: lightSwitchApplication.AddEditUser,
            value: lightSwitchApplication.UserSetItem
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditUser,
            data: lightSwitchApplication.UserSetItem,
            value: lightSwitchApplication.UserSetItem
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditUser,
            data: lightSwitchApplication.UserSetItem,
            value: String
        },
        Win: {
            _$class: msls.ContentItem,
            _$name: "Win",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditUser,
            data: lightSwitchApplication.UserSetItem,
            value: Number
        },
        Lose: {
            _$class: msls.ContentItem,
            _$name: "Lose",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditUser,
            data: lightSwitchApplication.UserSetItem,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditUser
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditUser, {
        /// <field>
        /// Called when a new AddEditUser screen is created.
        /// <br/>created(msls.application.AddEditUser screen)
        /// </field>
        created: [lightSwitchApplication.AddEditUser],
        /// <field>
        /// Called before changes on an active AddEditUser screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditUser screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditUser],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditUser().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditUser().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditUser().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditUser().findContentItem("Name"); }],
        /// <field>
        /// Called after the Win content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Win_postRender: [$element, function () { return new lightSwitchApplication.AddEditUser().findContentItem("Win"); }],
        /// <field>
        /// Called after the Lose content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Lose_postRender: [$element, function () { return new lightSwitchApplication.AddEditUser().findContentItem("Lose"); }]
    });

    lightSwitchApplication.BrowseGameSet.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseGameSet
        },
        GamesList: {
            _$class: msls.ContentItem,
            _$name: "GamesList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseGameSet,
            data: lightSwitchApplication.BrowseGameSet,
            value: lightSwitchApplication.BrowseGameSet
        },
        GamesSet: {
            _$class: msls.ContentItem,
            _$name: "GamesSet",
            _$parentName: "GamesList",
            screen: lightSwitchApplication.BrowseGameSet,
            data: lightSwitchApplication.BrowseGameSet,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseGameSet,
                _$entry: {
                    elementType: lightSwitchApplication.GameSetItem
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "GamesSet",
            screen: lightSwitchApplication.BrowseGameSet,
            data: lightSwitchApplication.GameSetItem,
            value: lightSwitchApplication.GameSetItem
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseGameSet,
            data: lightSwitchApplication.GameSetItem,
            value: Number
        },
        IsFinished: {
            _$class: msls.ContentItem,
            _$name: "IsFinished",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseGameSet,
            data: lightSwitchApplication.GameSetItem,
            value: Boolean
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseGameSet,
            data: lightSwitchApplication.GameSetItem,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseGameSet,
            data: lightSwitchApplication.GameSetItem,
            value: Date
        },
        Player1User1: {
            _$class: msls.ContentItem,
            _$name: "Player1User1",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseGameSet,
            data: lightSwitchApplication.GameSetItem,
            value: lightSwitchApplication.UserSetItem
        },
        P1ActualScore: {
            _$class: msls.ContentItem,
            _$name: "P1ActualScore",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseGameSet,
            data: lightSwitchApplication.GameSetItem,
            value: Number
        },
        Player2User: {
            _$class: msls.ContentItem,
            _$name: "Player2User",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseGameSet,
            data: lightSwitchApplication.GameSetItem,
            value: lightSwitchApplication.UserSetItem
        },
        P2ActualScore: {
            _$class: msls.ContentItem,
            _$name: "P2ActualScore",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseGameSet,
            data: lightSwitchApplication.GameSetItem,
            value: Number
        },
        Id1: {
            _$class: msls.ContentItem,
            _$name: "Id1",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseGameSet,
            data: lightSwitchApplication.GameSetItem,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseGameSet
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseGameSet, {
        /// <field>
        /// Called when a new BrowseGameSet screen is created.
        /// <br/>created(msls.application.BrowseGameSet screen)
        /// </field>
        created: [lightSwitchApplication.BrowseGameSet],
        /// <field>
        /// Called before changes on an active BrowseGameSet screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseGameSet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseGameSet],
        /// <field>
        /// Called to determine if the OpenGameScreen method can be executed.
        /// <br/>canExecute(msls.application.BrowseGameSet screen)
        /// </field>
        OpenGameScreen_canExecute: [lightSwitchApplication.BrowseGameSet],
        /// <field>
        /// Called to execute the OpenGameScreen method.
        /// <br/>execute(msls.application.BrowseGameSet screen)
        /// </field>
        OpenGameScreen_execute: [lightSwitchApplication.BrowseGameSet],
        /// <field>
        /// Called after the GamesList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GamesList_postRender: [$element, function () { return new lightSwitchApplication.BrowseGameSet().findContentItem("GamesList"); }],
        /// <field>
        /// Called after the GamesSet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GamesSet_postRender: [$element, function () { return new lightSwitchApplication.BrowseGameSet().findContentItem("GamesSet"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseGameSet().findContentItem("rows"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.BrowseGameSet().findContentItem("Id"); }],
        /// <field>
        /// Called after the IsFinished content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IsFinished_postRender: [$element, function () { return new lightSwitchApplication.BrowseGameSet().findContentItem("IsFinished"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseGameSet().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseGameSet().findContentItem("EndDate"); }],
        /// <field>
        /// Called after the Player1User1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Player1User1_postRender: [$element, function () { return new lightSwitchApplication.BrowseGameSet().findContentItem("Player1User1"); }],
        /// <field>
        /// Called after the P1ActualScore content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        P1ActualScore_postRender: [$element, function () { return new lightSwitchApplication.BrowseGameSet().findContentItem("P1ActualScore"); }],
        /// <field>
        /// Called after the Player2User content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Player2User_postRender: [$element, function () { return new lightSwitchApplication.BrowseGameSet().findContentItem("Player2User"); }],
        /// <field>
        /// Called after the P2ActualScore content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        P2ActualScore_postRender: [$element, function () { return new lightSwitchApplication.BrowseGameSet().findContentItem("P2ActualScore"); }],
        /// <field>
        /// Called to render the Id1 content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id1_render: [$element, function () { return new lightSwitchApplication.BrowseGameSet().findContentItem("Id1"); }]
    });

    lightSwitchApplication.BrowseUserSet.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseUserSet
        },
        UsersList: {
            _$class: msls.ContentItem,
            _$name: "UsersList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseUserSet,
            data: lightSwitchApplication.BrowseUserSet,
            value: lightSwitchApplication.BrowseUserSet
        },
        UsersSet: {
            _$class: msls.ContentItem,
            _$name: "UsersSet",
            _$parentName: "UsersList",
            screen: lightSwitchApplication.BrowseUserSet,
            data: lightSwitchApplication.BrowseUserSet,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseUserSet,
                _$entry: {
                    elementType: lightSwitchApplication.UserSetItem
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "UsersSet",
            screen: lightSwitchApplication.BrowseUserSet,
            data: lightSwitchApplication.UserSetItem,
            value: lightSwitchApplication.UserSetItem
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUserSet,
            data: lightSwitchApplication.UserSetItem,
            value: String
        },
        Win: {
            _$class: msls.ContentItem,
            _$name: "Win",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUserSet,
            data: lightSwitchApplication.UserSetItem,
            value: Number
        },
        Lose: {
            _$class: msls.ContentItem,
            _$name: "Lose",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUserSet,
            data: lightSwitchApplication.UserSetItem,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseUserSet
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseUserSet, {
        /// <field>
        /// Called when a new BrowseUserSet screen is created.
        /// <br/>created(msls.application.BrowseUserSet screen)
        /// </field>
        created: [lightSwitchApplication.BrowseUserSet],
        /// <field>
        /// Called before changes on an active BrowseUserSet screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseUserSet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseUserSet],
        /// <field>
        /// Called after the UsersList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UsersList_postRender: [$element, function () { return new lightSwitchApplication.BrowseUserSet().findContentItem("UsersList"); }],
        /// <field>
        /// Called after the UsersSet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UsersSet_postRender: [$element, function () { return new lightSwitchApplication.BrowseUserSet().findContentItem("UsersSet"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseUserSet().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseUserSet().findContentItem("Name"); }],
        /// <field>
        /// Called after the Win content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Win_postRender: [$element, function () { return new lightSwitchApplication.BrowseUserSet().findContentItem("Win"); }],
        /// <field>
        /// Called after the Lose content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Lose_postRender: [$element, function () { return new lightSwitchApplication.BrowseUserSet().findContentItem("Lose"); }]
    });

    lightSwitchApplication.DartGameScreen.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.DartGameScreen
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.DartGameScreen,
            data: lightSwitchApplication.DartGameScreen,
            value: lightSwitchApplication.DartGameScreen
        },
        MyCustomControl: {
            _$class: msls.ContentItem,
            _$name: "MyCustomControl",
            _$parentName: "Group",
            screen: lightSwitchApplication.DartGameScreen,
            data: lightSwitchApplication.DartGameScreen,
            value: lightSwitchApplication.DartGameScreen
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.DartGameScreen
        }
    };

    msls._addEntryPoints(lightSwitchApplication.DartGameScreen, {
        /// <field>
        /// Called when a new DartGameScreen screen is created.
        /// <br/>created(msls.application.DartGameScreen screen)
        /// </field>
        created: [lightSwitchApplication.DartGameScreen],
        /// <field>
        /// Called before changes on an active DartGameScreen screen are applied.
        /// <br/>beforeApplyChanges(msls.application.DartGameScreen screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.DartGameScreen],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.DartGameScreen().findContentItem("Group"); }],
        /// <field>
        /// Called to render the MyCustomControl content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MyCustomControl_render: [$element, function () { return new lightSwitchApplication.DartGameScreen().findContentItem("MyCustomControl"); }]
    });

}(msls.application));