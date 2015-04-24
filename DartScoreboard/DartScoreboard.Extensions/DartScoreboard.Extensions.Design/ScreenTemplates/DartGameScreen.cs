using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.Linq;
using System.Management;
using System.Text;

using Microsoft.LightSwitch.Designers.ScreenTemplates.Model;
using Microsoft.LightSwitch.DesignTime;
using Microsoft.LightSwitch.Model;
using Microsoft.LightSwitch.Model.Storage;

namespace DartScoreboard.Extensions.ScreenTemplates
{
    internal class DartGameScreen : IScreenTemplate
    {
        #region IScreenTemplate Members

        public void Generate(IScreenTemplateHost host)
        {

        }

        #endregion

        #region IScreenTemplateMetadata Members

        public string Description
        {
            get { return "DartGameScreen description"; }
        }

        public string DisplayName
        {
            get { return "DartGameScreen"; }
        }

        public Uri PreviewImage
        {
            get { return new Uri("/DartScoreboard.Extensions.Design;component/Resources/ScreenTemplateImages/DartGameScreenLarge.png", UriKind.Relative); }
        }

        public RootDataSourceType RootDataSource
        {
            get { return RootDataSourceType.Collection; }
        }

        public string ScreenNameFormat
        {
            get { return "{0}DartGameScreen"; }
        }

        public Uri SmallIcon
        {
            get { return new Uri("/DartScoreboard.Extensions.Design;component/Resources/ScreenTemplateImages/DartGameScreenSmall.png", UriKind.Relative); }
        }

        public bool SupportsChildCollections
        {
            get { return true; }
        }

        public string TemplateName
        {
            get { return DartGameScreen.TemplateId; }
        }

        #endregion

        #region Constants

        internal const string TemplateId = "DartScoreboard.Extensions:DartGameScreen";

        #endregion
    }

    [Export(typeof(IScreenTemplateFactory))]
    [Template(DartGameScreen.TemplateId, ScreenEditMode.Browse)]
    [TargetPlatform(TargetPlatformNames.MobileWeb)]
    internal class DartGameScreenFactory : IScreenTemplateFactory
    {
        #region IScreenTemplateFactory Members

        IScreenTemplate IScreenTemplateFactory.CreateScreenTemplate()
        {
            return new DartGameScreen();
        }

        #endregion
    }
}