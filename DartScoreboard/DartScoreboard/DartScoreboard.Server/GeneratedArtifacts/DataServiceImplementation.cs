﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using global::System.Linq;

namespace LightSwitchApplication.Implementation
{
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.1.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public class ApplicationDataDataService
        : global::Microsoft.LightSwitch.ServerGenerated.Implementation.DataService<global::LightSwitchApplication.Implementation.ApplicationData>
    {
    
        public ApplicationDataDataService() : base()
        {
        }
    
        protected override global::Microsoft.LightSwitch.IDataService GetDataService(global::Microsoft.LightSwitch.IDataWorkspace dataWorkspace)
        {
            return ((global::LightSwitchApplication.DataWorkspace)dataWorkspace).ApplicationData;
        }
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.1.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public class ApplicationDataServiceImplementation
        : global::Microsoft.LightSwitch.ServerGenerated.Implementation.DataServiceImplementation<global::LightSwitchApplication.Implementation.ApplicationData>
    {
        public ApplicationDataServiceImplementation(global::Microsoft.LightSwitch.IDataService dataService) : base(dataService)
        {
        }
    
    #region Queries
    #endregion

    #region Protected Methods
        protected override object CreateObject(global::System.Type type)
        {
            if (type == typeof(global::LightSwitchApplication.Implementation.GameSetItem))
            {
                return new global::LightSwitchApplication.Implementation.GameSetItem();
            }
            if (type == typeof(global::LightSwitchApplication.Implementation.HitSetItem))
            {
                return new global::LightSwitchApplication.Implementation.HitSetItem();
            }
            if (type == typeof(global::LightSwitchApplication.Implementation.UserSetItem))
            {
                return new global::LightSwitchApplication.Implementation.UserSetItem();
            }
    
            return base.CreateObject(type);
        }
    
        protected override global::LightSwitchApplication.Implementation.ApplicationData CreateObjectContext()
        {
            string assemblyName = global::System.Reflection.Assembly.GetExecutingAssembly().GetName().Name;
            return new global::LightSwitchApplication.Implementation.ApplicationData(this.GetEntityConnectionString(
                "_IntrinsicData",
                "res://" + assemblyName + "/ApplicationData.csdl|res://" + assemblyName + "/ApplicationData.ssdl|res://" + assemblyName + "/ApplicationData.msl",
                "System.Data.SqlClient",
                true));
        }
    
        protected override global::Microsoft.LightSwitch.Internal.IEntityImplementation CreateEntityImplementation<T>()
        {
            if (typeof(T) == typeof(global::LightSwitchApplication.GameSetItem))
            {
                return new global::LightSwitchApplication.Implementation.GameSetItem();
            }
            if (typeof(T) == typeof(global::LightSwitchApplication.HitSetItem))
            {
                return new global::LightSwitchApplication.Implementation.HitSetItem();
            }
            if (typeof(T) == typeof(global::LightSwitchApplication.UserSetItem))
            {
                return new global::LightSwitchApplication.Implementation.UserSetItem();
            }
            return null;
        }
    
    #endregion
    
    }
    
    #region DataServiceImplementationFactory
    [global::System.ComponentModel.Composition.PartCreationPolicy(global::System.ComponentModel.Composition.CreationPolicy.Shared)]
    [global::System.ComponentModel.Composition.Export(typeof(global::Microsoft.LightSwitch.Internal.IDataServiceFactory))]
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.1.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public class __DataServiceFactory :
        global::Microsoft.LightSwitch.ServerGenerated.Implementation.DataServiceFactory
    {
    
        protected override global::Microsoft.LightSwitch.IDataService CreateDataService(global::System.Type dataServiceType)
        {
            if (dataServiceType == typeof(global::LightSwitchApplication.ApplicationDataService))
            {
                return new global::LightSwitchApplication.ApplicationDataService();
            }
            return base.CreateDataService(dataServiceType);
        }
    
        protected override global::Microsoft.LightSwitch.Internal.IDataServiceImplementation CreateDataServiceImplementation<TDataService>(TDataService dataService)
        {
            if (typeof(TDataService) == typeof(global::LightSwitchApplication.ApplicationDataService))
            {
                return new global::LightSwitchApplication.Implementation.ApplicationDataServiceImplementation(dataService);
            }
            return base.CreateDataServiceImplementation(dataService);
        }
    }
    #endregion
    
    [global::System.ComponentModel.Composition.PartCreationPolicy(global::System.ComponentModel.Composition.CreationPolicy.Shared)]
    [global::System.ComponentModel.Composition.Export(typeof(global::Microsoft.LightSwitch.Internal.ITypeMappingProvider))]
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.1.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public class __TypeMapping
        : global::Microsoft.LightSwitch.Internal.ITypeMappingProvider
    {
        global::System.Type global::Microsoft.LightSwitch.Internal.ITypeMappingProvider.GetImplementationType(global::System.Type definitionType)
        {
            if (typeof(global::LightSwitchApplication.GameSetItem) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.GameSetItem);
            }
            if (typeof(global::LightSwitchApplication.HitSetItem) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.HitSetItem);
            }
            if (typeof(global::LightSwitchApplication.UserSetItem) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.UserSetItem);
            }
            return null;
        }
    }
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.1.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class GameSetItem :
        global::LightSwitchApplication.GameSetItem.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.GameSetItem.DetailsClass.IImplementation.Player1User
        {
            get
            {
                return this.Player1User;
            }
            set
            {
                this.Player1User = (global::LightSwitchApplication.Implementation.UserSetItem)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("Player1User");
                }
            }
        }
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.GameSetItem.DetailsClass.IImplementation.Player2User
        {
            get
            {
                return this.Player2User;
            }
            set
            {
                this.Player2User = (global::LightSwitchApplication.Implementation.UserSetItem)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("Player2User");
                }
            }
        }
        
        global::System.Collections.IEnumerable global::LightSwitchApplication.GameSetItem.DetailsClass.IImplementation.HitsCollection
        {
            get
            {
                return this.HitsCollection;
            }
        }
        
        partial void OnGames_UsersChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("Player1User");
            }
        }
        
        partial void OnGames_Users1Changed()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("Player2User");
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.1.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class HitSetItem :
        global::LightSwitchApplication.HitSetItem.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.HitSetItem.DetailsClass.IImplementation.Game
        {
            get
            {
                return this.Game;
            }
            set
            {
                this.Game = (global::LightSwitchApplication.Implementation.GameSetItem)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("Game");
                }
            }
        }
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.HitSetItem.DetailsClass.IImplementation.Player
        {
            get
            {
                return this.Player;
            }
            set
            {
                this.Player = (global::LightSwitchApplication.Implementation.UserSetItem)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("Player");
                }
            }
        }
        
        partial void OnHits_GamesChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("Game");
            }
        }
        
        partial void OnHits_UsersChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("Player");
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.1.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class UserSetItem :
        global::LightSwitchApplication.UserSetItem.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.ICreatedModifiedPropertiesImplementation
    
    {
    
        global::System.Collections.IEnumerable global::LightSwitchApplication.UserSetItem.DetailsClass.IImplementation.GamesAsPlayer1Collection
        {
            get
            {
                return this.GamesAsPlayer1Collection;
            }
        }
        
        global::System.Collections.IEnumerable global::LightSwitchApplication.UserSetItem.DetailsClass.IImplementation.GamesAsPlayer2Collection
        {
            get
            {
                return this.GamesAsPlayer2Collection;
            }
        }
        
        global::System.Collections.IEnumerable global::LightSwitchApplication.UserSetItem.DetailsClass.IImplementation.HitsCollection
        {
            get
            {
                return this.HitsCollection;
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
}

