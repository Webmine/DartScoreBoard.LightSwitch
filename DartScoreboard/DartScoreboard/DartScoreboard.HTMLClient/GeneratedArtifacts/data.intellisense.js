/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.GameSetItem, {
        /// <field>
        /// Called when a new gameSetItem is created.
        /// <br/>created(msls.application.GameSetItem entity)
        /// </field>
        created: [lightSwitchApplication.GameSetItem]
    });

    msls._addEntryPoints(lightSwitchApplication.HitSetItem, {
        /// <field>
        /// Called when a new hitSetItem is created.
        /// <br/>created(msls.application.HitSetItem entity)
        /// </field>
        created: [lightSwitchApplication.HitSetItem]
    });

    msls._addEntryPoints(lightSwitchApplication.UserSetItem, {
        /// <field>
        /// Called when a new userSetItem is created.
        /// <br/>created(msls.application.UserSetItem entity)
        /// </field>
        created: [lightSwitchApplication.UserSetItem]
    });

}(msls.application));
