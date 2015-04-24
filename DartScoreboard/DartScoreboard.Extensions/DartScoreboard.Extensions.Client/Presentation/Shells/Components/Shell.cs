using System;
using System.ComponentModel.Composition;

using Microsoft.LightSwitch.Runtime.Shell;

namespace DartScoreboard.Extensions.Presentation.Shells.Components
{
    [Export(typeof(IShell))]
    [Shell(Shell.ShellId)]
    internal class Shell : IShell
    {
        #region IShell Members

        public string Name
        {
            get { return Shell.ShellId; }
        }

        public Uri ShellUri
        {
            get { return new Uri(@"/DartScoreboard.Extensions.Client;component/Presentation/Shells/Shell.xaml", UriKind.Relative); }
        }

        #endregion

        #region Constants

        private const string ShellId = "DartScoreboard.Extensions:Shell";

        #endregion
    }
}
