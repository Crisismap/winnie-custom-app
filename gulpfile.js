var gulp = require('gulp');
var path = require('path');

var jquery = {
    bowerComponent: 'jquery',
    distFiles: ['dist/jquery.js']
};

var jqueryui = {
    bowerComponent: 'jquery-ui',
    distFiles: ['jquery-ui.js']
};

var underscore = {
    bowerComponent: 'underscore',
    distFiles: ['underscore.js']
}

var handlebars = {
    bowerComponent: 'handlebars',
    distFiles: ['handlebars.js']
};

var backbone = {
    bowerComponent: 'backbone#1.1.2',
    distFiles: ['backbone.js']
}

var aceEditor = {
    id: 'ace-builds',
    bowerComponent: 'git@github.com:ajaxorg/ace-builds.git',
    distFiles: [
        './src/ace.js',
        './src/worker-json.js',
        './src/mode-json.js',
        './src/theme-chrome.js'
    ]
};

var leaflet = {
    bowerComponent: 'leaflet',
    distFiles: [
        'dist/leaflet-src.js',
        'dist/leaflet.css',
        'dist/images/layers.png',
        'dist/images/layers-2x.png',
        'dist/images/marker-icon.png',
        'dist/images/marker-icon-2x.png',
        'dist/images/marker-shadow.png'
    ]
};

var leafletActiveArea = {
    id: 'Leaflet-active-area',
    bowerComponent: 'Mappy/Leaflet-active-area',
    distFiles: ['./src/leaflet.activearea.js']
};

var markercluster = {
    id: 'leaflet.markercluster',
    srcDir: './external/leaflet.markercluster',
    distFiles: ['dist/MarkerCluster.css', 'dist/MarkerCluster.Default.css', 'dist/leaflet.markercluster.js'],
    build: true,
    watch: true
};

var heatmap = {
    id: 'leaflet.heat',
    bowerComponent: 'leaflet/leaflet.heat',
    distFiles: ['dist/leaflet-heat.js']
};

var leafletGeomixer = {
    id: 'Leaflet-GeoMixer',
    srcDir: './external/Leaflet-GeoMixer',
    distFiles: ['./dist/leaflet-geomixer-src.js'],
    build: true,
    watch: false
};

var tileLayerMercator = {
    id: 'Leaflet.TileLayer.Mercator',
    srcDir: './external/Leaflet.TileLayer.Mercator',
    distFiles: ['./src/TileLayer.Mercator.js'],
    build: false,
    watch: false
};

var gmxBaseLayersManager = {
    id: 'Leaflet.gmxBaseLayersManager',
    srcDir: './external/Leaflet.gmxBaseLayersManager',
    distFiles: [
        './src/gmxBaseLayersManager.js',
        './src/initBaseLayerManager.js'
    ],
    build: false,
    watch: false
};

var gmxDrawing = {
    id: 'gmxDrawing',
    srcDir: './external/gmxDrawing',
    distDir: './dist',
    build: true
};

var gmxControls = {
    id: 'gmxControls',
    srcDir: './external/gmxControls',
    distFiles: [
        './dist/gmxControls-src.js',
        './dist/css/gmxControls.css',
        './dist/css/img/band.png',
        './dist/css/img/coords.png',
        './dist/css/img/gmxSprite.png',
        './dist/css/img/logo_footer.png',
        './dist/css/img/logo_footer_color.png'
    ],
    build: true,
    watch: false
};

var iconLayersControl = {
    id: 'Leaflet-IconLayers',
    srcDir: './external/Leaflet-IconLayers',
    distDir: './src',
    build: false
};

var gmxIconLayers = {
    id: 'GmxIconLayers',
    srcDir: './external/GMXCommonComponents/GmxIconLayers',
    build: false
};

var componentsManager = {
    id: 'ComponentsManager',
    srcDir: './external/GMXCommonComponents/ComponentsManager',
    distDir: './build',
    build: true
};

var utils = {
    id: 'Utils',
    srcDir: './external/GMXCommonComponents/Utils',
    build: false
};

var winnieCore = {
    id: 'winnie-core',
    srcDir: './external/winnie-core',
    distDir: './dist',
    build: true
};

var commonStyles = {
    id: 'CommonStyles',
    srcDir: './external/GMXCommonComponents/CommonStyles',
    distDir: './build',
    build: true
};

var translations = {
    id: 'translations',
    url: 'http://maps.kosmosnimki.ru/api/translations.js'
};

var dropdownMenuWidget = {
    id: 'DropdownMenuWidget',
    srcDir: './external/GMXCommonComponents/DropdownMenuWidget',
    distDir: './build',
    build: true
};

var popover = {
    id: 'Popover',
    srcDir: './external/GMXCommonComponents/Popover',
    distDir: './build',
    build: true
};

var authManager = {
    id: 'AuthManager',
    srcDir: './external/GMXCommonComponents/AuthManager',
    distDir: './build',
    build: true
};

var thorax = {
    id: 'Thorax',
    srcDir: './external/GMXCommonComponents/Thorax',
    distFiles: [
        './thorax.js'
    ],
    build: false,
    watch: false
}

var layersTree = {
    id: 'LayersTree',
    srcDir: './external/GMXCommonComponents/LayersTree',
    distDir: './build',
    build: true
};

var layersDebugger = './external/GMXCommonComponents/LayersDebugger';

var gmxWidget = {
    id: 'GmxWidget',
    srcDir: './external/GMXCommonComponents/GmxWidget',
    build: false
};

var animationHelpers = {
    id: 'animationHelpers',
    srcDir: './external/GMXCommonComponents/animationHelpers',
    build: false
};

var sidebar = {
    id: 'IconSidebarControl',
    srcDir: './external/GMXCommonComponents/IconSidebarControl'
};

var scrollView = {
    id: 'ScrollView',
    srcDir: 'external/GMXCommonComponents/ScrollView',
    distDir: 'build',
    build: true
};

var storytellingControl = {
    id: 'StorytellingControl',
    srcDir: './external/GMXCommonComponents/StorytellingControl',
    build: false
};

var storytellingAccordeonControl = {
    id: 'storytellingAccordeonControl',
    srcDir: './external/GMXCommonComponents/StorytellingAccordeonControl',
    build: false
};

var layersTreeWidget = {
    id: 'LayersTreeWidget',
    srcDir: './external/GMXCommonComponents/LayersTreeWidget',
    distDir: './build',
    build: true
};

var dateInterval = {
    id: 'DateInterval',
    srcDir: './external/GMXCommonComponents/DateInterval',
    build: false
};

var calendarWidget = {
    id: 'CalendarWidget',
    srcDir: './external/GMXCommonComponents/CalendarWidget',
    distDir: './build',
    build: true
};

var switchingCollectionWidget = {
    id: 'SwitchingCollectionWidget',
    srcDir: './external/GMXCommonComponents/SwitchingCollectionWidget',
    build: false
};

var bookmarksWidget = {
    id: 'BookmarksWidget',
    srcDir: './external/GMXCommonComponents/BookmarksWidget',
    distDir: './build',
    build: true
};

var stateManager = {
    id: 'StateManager',
    srcDir: './external/GMXCommonComponents/StateManager',
    build: false
};

var alertWidget = {
    id: 'AlertWidget',
    srcDir: './external/GMXCommonComponents/AlertWidget',
    distDir: './build',
    build: true
};

var shareIconControl = {
    id: 'ShareIconControl',
    srcDir: './external/GMXCommonComponents/ShareIconControl',
    distDir: 'build',
    build: true
};

var coreComponents = [
    jquery,
    jqueryui,
    handlebars,
    underscore,
    backbone,
    thorax,
    leaflet,
    leafletActiveArea,
    markercluster,
    heatmap,
    leafletGeomixer,
    tileLayerMercator,
    gmxBaseLayersManager,
    gmxDrawing,
    gmxControls,
    layersTree,
    layersDebugger,
    commonStyles,
    popover,
    translations,
    iconLayersControl,
    gmxIconLayers,
    componentsManager,
    utils,
    gmxWidget,
    animationHelpers,
    switchingCollectionWidget,
    sidebar,
    scrollView,
    layersTreeWidget,
    dateInterval,
    calendarWidget,
    bookmarksWidget,
    storytellingControl,
    storytellingAccordeonControl,
    stateManager,
    winnieCore
];

var virtualLayers = [{
    id: 'GmxVirtualTileLayer',
    srcDir: './external/GMXCommonComponents/GmxVirtualTileLayer',
    build: false
}, {
    id: 'leaflet-GIBS',
    srcDir: './external/leaflet-GIBS',
    distFiles: [
        './src/GeoMixerGIBSLayer.js',
        './src/GIBSLayer.js',
        './src/GIBSMetadata.js'
    ],
    build: false
}, {
    id: 'GMXPluginGFW',
    srcDir: './external/GMXPluginGFW',
    distFiles: [
        './src/L.GFWLayer.js',
        './src/L.GFWSlider.js',
        './src/L.GFWSlider.css',
        './src/GmxGFWLayer.js'
    ],
    build: false
}, {
    id: 'L.ImageOverlay.Pane',
    srcDir: './external/L.ImageOverlay.Pane',
    distDir: './src',
    build: false
}, {
    id: 'GMXPluginCadatsre',
    srcDir: './external/GMXPluginCadatsre',
    distFiles: [
        './GmxCadastreLayer.js',
        './L.Cadastre/src/L.Cadastre.js',
        './L.Cadastre/src/L.Cadastre.css',
        './L.Cadastre/src/L.Cadastre.Info.js'
    ],
    build: false
}];

require('./external/GMXBuilder')(gulp, {
    tempDir: './temp',
    distDir: './dist',
    watchExtensions: ['.js', '.css', '.html', '.less', '.svg'],
    distributionExtensions: ['.js', '.css', '.jpg', '.png', '.eot', '.ttf', '.woff', '.svg']
}, [{
    id: 'viewer',
    htmlfile: 'html/index.html',
    components: [].concat(coreComponents, virtualLayers, [{
        id: 'app',
        srcDir: './app',
        build: false
    }])
}]);
