using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.IO;
using System.Reflection;
using System.Resources;

using Microsoft.LightSwitch.Model;

using DartScoreboard.Extensions.Resources;

namespace DartScoreboard.Extensions.Metadata
{
    [Export(typeof(IModuleDefinitionLoader))]
    [ModuleDefinitionLoader("DartScoreboard.Extensions")]
    internal class ModuleLoader :
        IModuleDefinitionLoader
    {
        #region IModuleDefinitionLoader Members

        ResourceManager IModuleDefinitionLoader.GetModelResourceManager()
        {
            return ModuleResources.ResourceManager;
        }

        IEnumerable<Stream> IModuleDefinitionLoader.LoadModelFragments()
        {
            Assembly assembly = Assembly.GetExecutingAssembly();
            IList<Stream> fragmentStreams = new List<Stream>();

            foreach (string resourceName in assembly.GetManifestResourceNames())
            {
                if (resourceName.EndsWith(".lsml", StringComparison.Ordinal))
                {
                    fragmentStreams.Add(assembly.GetManifestResourceStream(resourceName));
                }
            }

            return fragmentStreams;
        }

        #endregion
    }
}