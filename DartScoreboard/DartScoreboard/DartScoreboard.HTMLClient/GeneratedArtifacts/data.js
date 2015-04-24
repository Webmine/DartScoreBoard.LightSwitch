/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function UserSetItem(entitySet) {
        /// <summary>
        /// Represents the UserSetItem entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this userSetItem.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this userSetItem.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this userSetItem.
        /// </field>
        /// <field name="Win" type="Number">
        /// Gets or sets the win for this userSetItem.
        /// </field>
        /// <field name="Lose" type="Number">
        /// Gets or sets the lose for this userSetItem.
        /// </field>
        /// <field name="GamesAsPlayer1Collection" type="msls.EntityCollection" elementType="msls.application.GameSetItem">
        /// Gets the gamesAsPlayer1Collection for this userSetItem.
        /// </field>
        /// <field name="GamesAsPlayer2Collection" type="msls.EntityCollection" elementType="msls.application.GameSetItem">
        /// Gets the gamesAsPlayer2Collection for this userSetItem.
        /// </field>
        /// <field name="HitsCollection" type="msls.EntityCollection" elementType="msls.application.HitSetItem">
        /// Gets the hitsCollection for this userSetItem.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this userSetItem.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this userSetItem.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this userSetItem.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this userSetItem.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this userSetItem.
        /// </field>
        /// <field name="details" type="msls.application.UserSetItem.Details">
        /// Gets the details for this userSetItem.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function GameSetItem(entitySet) {
        /// <summary>
        /// Represents the GameSetItem entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this gameSetItem.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this gameSetItem.
        /// </field>
        /// <field name="Player1User" type="msls.application.UserSetItem">
        /// Gets or sets the player1User for this gameSetItem.
        /// </field>
        /// <field name="Player2User" type="msls.application.UserSetItem">
        /// Gets or sets the player2User for this gameSetItem.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this gameSetItem.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this gameSetItem.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this gameSetItem.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this gameSetItem.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this gameSetItem.
        /// </field>
        /// <field name="IsFinished" type="Boolean">
        /// Gets or sets the isFinished for this gameSetItem.
        /// </field>
        /// <field name="StartScore" type="Number">
        /// Gets or sets the startScore for this gameSetItem.
        /// </field>
        /// <field name="P1ActualScore" type="Number">
        /// Gets or sets the p1ActualScore for this gameSetItem.
        /// </field>
        /// <field name="P2ActualScore" type="Number">
        /// Gets or sets the p2ActualScore for this gameSetItem.
        /// </field>
        /// <field name="StartDate" type="Date">
        /// Gets or sets the startDate for this gameSetItem.
        /// </field>
        /// <field name="EndDate" type="Date">
        /// Gets or sets the endDate for this gameSetItem.
        /// </field>
        /// <field name="HitsCollection" type="msls.EntityCollection" elementType="msls.application.HitSetItem">
        /// Gets the hitsCollection for this gameSetItem.
        /// </field>
        /// <field name="details" type="msls.application.GameSetItem.Details">
        /// Gets the details for this gameSetItem.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function HitSetItem(entitySet) {
        /// <summary>
        /// Represents the HitSetItem entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this hitSetItem.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this hitSetItem.
        /// </field>
        /// <field name="Game" type="msls.application.GameSetItem">
        /// Gets or sets the game for this hitSetItem.
        /// </field>
        /// <field name="Player" type="msls.application.UserSetItem">
        /// Gets or sets the player for this hitSetItem.
        /// </field>
        /// <field name="Value" type="Number">
        /// Gets or sets the value for this hitSetItem.
        /// </field>
        /// <field name="Multiplicity" type="Number">
        /// Gets or sets the multiplicity for this hitSetItem.
        /// </field>
        /// <field name="Turn" type="Number">
        /// Gets or sets the turn for this hitSetItem.
        /// </field>
        /// <field name="DartNumber" type="Number">
        /// Gets or sets the dartNumber for this hitSetItem.
        /// </field>
        /// <field name="Succesful" type="Boolean">
        /// Gets or sets the succesful for this hitSetItem.
        /// </field>
        /// <field name="ThrowDate" type="Date">
        /// Gets or sets the throwDate for this hitSetItem.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this hitSetItem.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this hitSetItem.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this hitSetItem.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this hitSetItem.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this hitSetItem.
        /// </field>
        /// <field name="details" type="msls.application.HitSetItem.Details">
        /// Gets the details for this hitSetItem.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="UserSet" type="msls.EntitySet">
        /// Gets the UserSet entity set.
        /// </field>
        /// <field name="GameSet" type="msls.EntitySet">
        /// Gets the GameSet entity set.
        /// </field>
        /// <field name="HitSet" type="msls.EntitySet">
        /// Gets the HitSet entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        UserSetItem: $defineEntity(UserSetItem, [
            { name: "Id", type: Number },
            { name: "Name", type: String },
            { name: "Win", type: Number },
            { name: "Lose", type: Number },
            { name: "GamesAsPlayer1Collection", kind: "collection", elementType: GameSetItem },
            { name: "GamesAsPlayer2Collection", kind: "collection", elementType: GameSetItem },
            { name: "HitsCollection", kind: "collection", elementType: HitSetItem },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        GameSetItem: $defineEntity(GameSetItem, [
            { name: "Id", type: Number },
            { name: "Player1User", kind: "reference", type: UserSetItem },
            { name: "Player2User", kind: "reference", type: UserSetItem },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array },
            { name: "IsFinished", type: Boolean },
            { name: "StartScore", type: Number },
            { name: "P1ActualScore", type: Number },
            { name: "P2ActualScore", type: Number },
            { name: "StartDate", type: Date },
            { name: "EndDate", type: Date },
            { name: "HitsCollection", kind: "collection", elementType: HitSetItem }
        ]),

        HitSetItem: $defineEntity(HitSetItem, [
            { name: "Id", type: Number },
            { name: "Game", kind: "reference", type: GameSetItem },
            { name: "Player", kind: "reference", type: UserSetItem },
            { name: "Value", type: Number },
            { name: "Multiplicity", type: Number },
            { name: "Turn", type: Number },
            { name: "DartNumber", type: Number },
            { name: "Succesful", type: Boolean },
            { name: "ThrowDate", type: Date },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "UserSet", elementType: UserSetItem },
            { name: "GameSet", elementType: GameSetItem },
            { name: "HitSet", elementType: HitSetItem }
        ], [
            {
                name: "UserSet_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.UserSet },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/UserSet(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "GameSet_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.GameSet },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/GameSet(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "HitSet_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.HitSet },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/HitSet(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
