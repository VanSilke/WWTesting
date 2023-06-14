ol.proj.proj4.register(proj4);
ol.proj.get("ESRI:54001").setExtent([-2000.070801, -3149.932617, 9.108337, 0.067530]);
var wms_layers = [];

var lyr_innserseav3a_modifiedkopia_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "innserseav3a_modified — kopia",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/innserseav3a_modifiedkopia_0.png",
    attributions: ' ',
                                projection: 'ESRI:54001',
                                alwaysInRange: true,
                                imageExtent: [-2000.070608, -3143.015599, -0.017711, 0.067530]
                            })
                        });
var format_NormalTerrain_1 = new ol.format.GeoJSON();
var features_NormalTerrain_1 = format_NormalTerrain_1.readFeatures(json_NormalTerrain_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:54001'});
var jsonSource_NormalTerrain_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NormalTerrain_1.addFeatures(features_NormalTerrain_1);
var lyr_NormalTerrain_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NormalTerrain_1,
maxResolution:0.7463190229577813,
 
                style: style_NormalTerrain_1,
                interactive: true,
    title: 'Normal Terrain<br />\
    <img src="styles/legend/NormalTerrain_1_0.png" /> Settlement<br />\
    <img src="styles/legend/NormalTerrain_1_1.png" /> Road<br />\
    <img src="styles/legend/NormalTerrain_1_2.png" /> Natural Terrain<br />\
    <img src="styles/legend/NormalTerrain_1_3.png" /> Difficult Terrain<br />\
    <img src="styles/legend/NormalTerrain_1_4.png" /> Greater Difficult<br />\
    <img src="styles/legend/NormalTerrain_1_5.png" /> <br />'
        });

lyr_innserseav3a_modifiedkopia_0.setVisible(true);lyr_NormalTerrain_1.setVisible(true);
var layersList = [lyr_innserseav3a_modifiedkopia_0,lyr_NormalTerrain_1];
lyr_NormalTerrain_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'Biome': 'Biome', 'Settlement': 'Settlement', 'Font Size': 'Font Size', 'auxiliary_storage_labeling_size': 'auxiliary_storage_labeling_size', });
lyr_NormalTerrain_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'Biome': 'ValueMap', 'Settlement': 'TextEdit', 'Font Size': '', 'auxiliary_storage_labeling_size': 'Hidden', });
lyr_NormalTerrain_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'Biome': 'no label', 'Settlement': 'no label', });
lyr_NormalTerrain_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});