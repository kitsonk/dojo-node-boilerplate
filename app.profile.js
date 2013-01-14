var profile = (function(){

	return {
		releaseDir: "../lib",
		basePath: "src",
		action: "release",
		mini: true,
		selectorEngine: "lite",
		layerOptimize: "closure",
		cssOptimize: "comments",

		packages: [{
			name: "dojo",
			location: "dojo"
		},{
			name: "app",
			location: "app"
		},{
			name: "app-client",
			location: "app-client"
		}],

		defaultConfig: {
			hasCache:{
				"dojo-built": 1,
				"dojo-loader": 1,
				"dom": 1,
				"host-browser": 1,
				"host-node": 0,
				"config-selectorEngine": "lite"
			},
			async: 1
		},

		staticHasFeatures: {
			"config-dojo-loader-catches": 0,
			"config-tlmSiblingOfDojo": 0,
			"dojo-log-api": 0,
			"dojo-sync-loader": 0,
			"dojo-timeout-api": 0,
			"dojo-sniff": 0,
			"dojo-cdn": 0,
			"config-strip-strict": 0,
			"dojo-loader-eval-hint-url": 1,
			"dojo-firebug": 0,
			"dojo-debug-messages": 0
		},

		layers: {
			"dojo/dojo": {
				include: [ "dojo/dojo" ],
				customBase: true,
				boot: true
			},
			"app-client/main": {
				include: [],
				exclude: []
			}
		}
	};
})();