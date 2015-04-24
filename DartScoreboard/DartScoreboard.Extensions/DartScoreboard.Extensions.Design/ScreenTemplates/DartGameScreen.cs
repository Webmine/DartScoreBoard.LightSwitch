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

        //http://lightswitchhelpwebsite.com/Blog/tabid/61/EntryId/3239/Creating-A-LightSwitch-HTML-Screen-Extension.aspx
        public void Generate(IScreenTemplateHost host)
        {
            ContentItem tabContentItem;

            tabContentItem = host.AddContentItem(host.ScreenTabPagesContentItem, "Group",
                ContentItemKind.Group);

            // Set screen to use view controls by default

            host.SetControlPropertyValue(
                host.ScreenTabPagesContentItem, "Microsoft.LightSwitch.MobileWeb:RootControl", "BrowseOnly", "True");

            // Add CustomControl to screen

            string MyCustomControlName = "MyCustomControl";

            host.AddContentItem(tabContentItem, MyCustomControlName, ContentItemKind.ScreenContent);

            // Create JavaScript code for Utility function

            string UtilityTemplate = "";

            UtilityTemplate = UtilityTemplate + "{0}myapp.{2}" + ".{3}_render = function (element, contentItem) {{";
            UtilityTemplate = UtilityTemplate + "{0}element.innerHTML = '<h1>Hello World!</h1>';";
            UtilityTemplate = UtilityTemplate + "{0}}};";

            // Call AddScreenCodeBehind for UtilityTemplate

            host.AddScreenCodeBehind(String.Format(UtilityTemplate,
                                                       Environment.NewLine,
                                                       host.ScreenNamespace,
                                                       host.ScreenName,
                                                       MyCustomControlName));

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