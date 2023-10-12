var wms_layers = [];


        var lyr_ESRITopo_0 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_MurrayCreekWatershed_1 = new ol.format.GeoJSON();
var features_MurrayCreekWatershed_1 = format_MurrayCreekWatershed_1.readFeatures(json_MurrayCreekWatershed_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MurrayCreekWatershed_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MurrayCreekWatershed_1.addFeatures(features_MurrayCreekWatershed_1);
var lyr_MurrayCreekWatershed_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MurrayCreekWatershed_1, 
                style: style_MurrayCreekWatershed_1,
                interactive: true,
                title: '<img src="styles/legend/MurrayCreekWatershed_1.png" /> Murray Creek Watershed'
            });

lyr_ESRITopo_0.setVisible(true);lyr_MurrayCreekWatershed_1.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_MurrayCreekWatershed_1];
lyr_MurrayCreekWatershed_1.set('fieldAliases', {'NAMED_WATE': 'NAMED_WATE', 'GNIS_ID': 'GNIS_ID', 'GNIS_NAME': 'GNIS_NAME', 'BLUE_LINE_': 'BLUE_LINE_', 'WATERSHED_': 'WATERSHED_', 'FWA_WATERS': 'FWA_WATERS', 'STREAM_ORD': 'STREAM_ORD', 'STREAM_MAG': 'STREAM_MAG', 'AREA_HA': 'AREA_HA', 'FEATURE_CO': 'FEATURE_CO', 'GEOMETRY_L': 'GEOMETRY_L', 'GEOMETRY_A': 'GEOMETRY_A', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MurrayCreekWatershed_1.set('fieldImages', {'NAMED_WATE': 'TextEdit', 'GNIS_ID': 'TextEdit', 'GNIS_NAME': 'TextEdit', 'BLUE_LINE_': 'TextEdit', 'WATERSHED_': 'TextEdit', 'FWA_WATERS': 'TextEdit', 'STREAM_ORD': 'TextEdit', 'STREAM_MAG': 'TextEdit', 'AREA_HA': 'TextEdit', 'FEATURE_CO': 'TextEdit', 'GEOMETRY_L': 'TextEdit', 'GEOMETRY_A': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MurrayCreekWatershed_1.set('fieldLabels', {'NAMED_WATE': 'header label', 'GNIS_ID': 'no label', 'GNIS_NAME': 'no label', 'BLUE_LINE_': 'no label', 'WATERSHED_': 'no label', 'FWA_WATERS': 'no label', 'STREAM_ORD': 'no label', 'STREAM_MAG': 'no label', 'AREA_HA': 'no label', 'FEATURE_CO': 'no label', 'GEOMETRY_L': 'no label', 'GEOMETRY_A': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_MurrayCreekWatershed_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});