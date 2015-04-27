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
        P2ActualScore_postRender: [$element, function () { return new lightSwitchApplication.BrowseGameSet().findContentItem("P2ActualScore"); }]
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

    lightSwitchApplication.ViewGameSetItem.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewGameSetItem
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.ViewGameSetItem,
            value: lightSwitchApplication.ViewGameSetItem
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.ViewGameSetItem,
            value: lightSwitchApplication.GameSetItem
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.GameSetItem,
            value: lightSwitchApplication.GameSetItem
        },
        Player1User: {
            _$class: msls.ContentItem,
            _$name: "Player1User",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.GameSetItem,
            value: lightSwitchApplication.UserSetItem
        },
        Player2User: {
            _$class: msls.ContentItem,
            _$name: "Player2User",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.GameSetItem,
            value: lightSwitchApplication.UserSetItem
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.GameSetItem,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.GameSetItem,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.GameSetItem,
            value: String
        },
        Modified: {
            _$class: msls.ContentItem,
            _$name: "Modified",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.GameSetItem,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.GameSetItem,
            value: lightSwitchApplication.GameSetItem
        },
        IsFinished: {
            _$class: msls.ContentItem,
            _$name: "IsFinished",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.GameSetItem,
            value: Boolean
        },
        StartScore: {
            _$class: msls.ContentItem,
            _$name: "StartScore",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.GameSetItem,
            value: Number
        },
        P1ActualScore: {
            _$class: msls.ContentItem,
            _$name: "P1ActualScore",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.GameSetItem,
            value: Number
        },
        P2ActualScore: {
            _$class: msls.ContentItem,
            _$name: "P2ActualScore",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.GameSetItem,
            value: Number
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.GameSetItem,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.GameSetItem,
            value: Date
        },
        HitsCollection: {
            _$class: msls.ContentItem,
            _$name: "HitsCollection",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.ViewGameSetItem,
            value: lightSwitchApplication.ViewGameSetItem
        },
        HitsCollection1: {
            _$class: msls.ContentItem,
            _$name: "HitsCollection1",
            _$parentName: "HitsCollection",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.ViewGameSetItem,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewGameSetItem,
                _$entry: {
                    elementType: lightSwitchApplication.HitSetItem
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "HitsCollection1",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.HitSetItem,
            value: lightSwitchApplication.HitSetItem
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.HitSetItem,
            value: Number
        },
        Player: {
            _$class: msls.ContentItem,
            _$name: "Player",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.HitSetItem,
            value: lightSwitchApplication.UserSetItem
        },
        Value: {
            _$class: msls.ContentItem,
            _$name: "Value",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.HitSetItem,
            value: Number
        },
        Multiplicity: {
            _$class: msls.ContentItem,
            _$name: "Multiplicity",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.HitSetItem,
            value: Number
        },
        Turn: {
            _$class: msls.ContentItem,
            _$name: "Turn",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.HitSetItem,
            value: Number
        },
        DartNumber: {
            _$class: msls.ContentItem,
            _$name: "DartNumber",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.HitSetItem,
            value: Number
        },
        Succesful: {
            _$class: msls.ContentItem,
            _$name: "Succesful",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.HitSetItem,
            value: Boolean
        },
        ThrowDate: {
            _$class: msls.ContentItem,
            _$name: "ThrowDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewGameSetItem,
            data: lightSwitchApplication.HitSetItem,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewGameSetItem
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewGameSetItem, {
        /// <field>
        /// Called when a new ViewGameSetItem screen is created.
        /// <br/>created(msls.application.ViewGameSetItem screen)
        /// </field>
        created: [lightSwitchApplication.ViewGameSetItem],
        /// <field>
        /// Called before changes on an active ViewGameSetItem screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewGameSetItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewGameSetItem],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("left"); }],
        /// <field>
        /// Called after the Player1User content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Player1User_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("Player1User"); }],
        /// <field>
        /// Called after the Player2User content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Player2User_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("Player2User"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("Created"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the Modified content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Modified_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("Modified"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("right"); }],
        /// <field>
        /// Called after the IsFinished content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IsFinished_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("IsFinished"); }],
        /// <field>
        /// Called after the StartScore content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartScore_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("StartScore"); }],
        /// <field>
        /// Called after the P1ActualScore content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        P1ActualScore_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("P1ActualScore"); }],
        /// <field>
        /// Called after the P2ActualScore content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        P2ActualScore_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("P2ActualScore"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("EndDate"); }],
        /// <field>
        /// Called after the HitsCollection content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HitsCollection_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("HitsCollection"); }],
        /// <field>
        /// Called after the HitsCollection1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HitsCollection1_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("HitsCollection1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("rows"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("Id"); }],
        /// <field>
        /// Called after the Player content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Player_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("Player"); }],
        /// <field>
        /// Called after the Value content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Value_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("Value"); }],
        /// <field>
        /// Called after the Multiplicity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Multiplicity_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("Multiplicity"); }],
        /// <field>
        /// Called after the Turn content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Turn_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("Turn"); }],
        /// <field>
        /// Called after the DartNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DartNumber_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("DartNumber"); }],
        /// <field>
        /// Called after the Succesful content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Succesful_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("Succesful"); }],
        /// <field>
        /// Called after the ThrowDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ThrowDate_postRender: [$element, function () { return new lightSwitchApplication.ViewGameSetItem().findContentItem("ThrowDate"); }]
    });

    lightSwitchApplication.AddEditHitSetItem.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditHitSetItem
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditHitSetItem,
            data: lightSwitchApplication.AddEditHitSetItem,
            value: lightSwitchApplication.AddEditHitSetItem
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditHitSetItem,
            data: lightSwitchApplication.AddEditHitSetItem,
            value: lightSwitchApplication.HitSetItem
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditHitSetItem,
            data: lightSwitchApplication.HitSetItem,
            value: lightSwitchApplication.HitSetItem
        },
        Game: {
            _$class: msls.ContentItem,
            _$name: "Game",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditHitSetItem,
            data: lightSwitchApplication.HitSetItem,
            value: lightSwitchApplication.GameSetItem
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Game",
            screen: lightSwitchApplication.AddEditHitSetItem,
            data: lightSwitchApplication.GameSetItem,
            value: lightSwitchApplication.GameSetItem
        },
        Player: {
            _$class: msls.ContentItem,
            _$name: "Player",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditHitSetItem,
            data: lightSwitchApplication.HitSetItem,
            value: lightSwitchApplication.UserSetItem
        },
        Value: {
            _$class: msls.ContentItem,
            _$name: "Value",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditHitSetItem,
            data: lightSwitchApplication.HitSetItem,
            value: Number
        },
        Multiplicity: {
            _$class: msls.ContentItem,
            _$name: "Multiplicity",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditHitSetItem,
            data: lightSwitchApplication.HitSetItem,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditHitSetItem,
            data: lightSwitchApplication.HitSetItem,
            value: lightSwitchApplication.HitSetItem
        },
        Turn: {
            _$class: msls.ContentItem,
            _$name: "Turn",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditHitSetItem,
            data: lightSwitchApplication.HitSetItem,
            value: Number
        },
        DartNumber: {
            _$class: msls.ContentItem,
            _$name: "DartNumber",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditHitSetItem,
            data: lightSwitchApplication.HitSetItem,
            value: Number
        },
        Succesful: {
            _$class: msls.ContentItem,
            _$name: "Succesful",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditHitSetItem,
            data: lightSwitchApplication.HitSetItem,
            value: Boolean
        },
        ThrowDate: {
            _$class: msls.ContentItem,
            _$name: "ThrowDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditHitSetItem,
            data: lightSwitchApplication.HitSetItem,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditHitSetItem
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditHitSetItem, {
        /// <field>
        /// Called when a new AddEditHitSetItem screen is created.
        /// <br/>created(msls.application.AddEditHitSetItem screen)
        /// </field>
        created: [lightSwitchApplication.AddEditHitSetItem],
        /// <field>
        /// Called before changes on an active AddEditHitSetItem screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditHitSetItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditHitSetItem],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditHitSetItem().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditHitSetItem().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditHitSetItem().findContentItem("left"); }],
        /// <field>
        /// Called after the Game content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Game_postRender: [$element, function () { return new lightSwitchApplication.AddEditHitSetItem().findContentItem("Game"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditHitSetItem().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Player content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Player_postRender: [$element, function () { return new lightSwitchApplication.AddEditHitSetItem().findContentItem("Player"); }],
        /// <field>
        /// Called after the Value content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Value_postRender: [$element, function () { return new lightSwitchApplication.AddEditHitSetItem().findContentItem("Value"); }],
        /// <field>
        /// Called after the Multiplicity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Multiplicity_postRender: [$element, function () { return new lightSwitchApplication.AddEditHitSetItem().findContentItem("Multiplicity"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditHitSetItem().findContentItem("right"); }],
        /// <field>
        /// Called after the Turn content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Turn_postRender: [$element, function () { return new lightSwitchApplication.AddEditHitSetItem().findContentItem("Turn"); }],
        /// <field>
        /// Called after the DartNumber content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DartNumber_postRender: [$element, function () { return new lightSwitchApplication.AddEditHitSetItem().findContentItem("DartNumber"); }],
        /// <field>
        /// Called after the Succesful content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Succesful_postRender: [$element, function () { return new lightSwitchApplication.AddEditHitSetItem().findContentItem("Succesful"); }],
        /// <field>
        /// Called after the ThrowDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ThrowDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditHitSetItem().findContentItem("ThrowDate"); }]
    });

}(msls.application));