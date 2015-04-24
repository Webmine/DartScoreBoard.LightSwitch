using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;

namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {
        partial void GameSet_Inserting(global::LightSwitchApplication.GameSetItem entity)
        {
            entity.IsFinished = false;
            entity.P1ActualScore = entity.StartScore;
            entity.P2ActualScore = entity.StartScore;
            entity.StartDate = DateTime.Now;
        }

        partial void UserSet_Inserting(UserSetItem entity)
        {

        }
    }
}
