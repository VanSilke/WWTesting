ol.proj.proj4.register(proj4);
ol.proj.get("ESRI:54001").setExtent([70812.083333, -3085.250000, 754758.750000, 601714.750000]);
var wms_layers = [];

var lyr_innserseav3a_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "innserseav3a",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/innserseav3a_0.png",
    attributions: ' ',
                                projection: 'ESRI:54001',
                                alwaysInRange: true,
                                imageExtent: [-1336761.240372, -2203500.138416, 1560912.814968, 2350194.639551]
                            })
                        });
var lyr_Gridexport_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Gridexport",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Gridexport_1.png",
    attributions: ' ',
                                projection: 'ESRI:54001',
                                alwaysInRange: true,
                                imageExtent: [-1336761.250000, -2257805.250000, 1735238.750000, 2350194.750000]
                            })
                        });
var format_LabelCheat_2 = new ol.format.GeoJSON();
var features_LabelCheat_2 = format_LabelCheat_2.readFeatures(json_LabelCheat_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:54001'});
var jsonSource_LabelCheat_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LabelCheat_2.addFeatures(features_LabelCheat_2);
var lyr_LabelCheat_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LabelCheat_2, 
                style: style_LabelCheat_2,
                interactive: true,
                title: '<img src="styles/legend/LabelCheat_2.png" /> Label Cheat'
            });

lyr_innserseav3a_0.setVisible(true);lyr_Gridexport_1.setVisible(true);lyr_LabelCheat_2.setVisible(true);
var layersList = [lyr_innserseav3a_0,lyr_Gridexport_1,lyr_LabelCheat_2];
lyr_LabelCheat_2.set('fieldAliases', {'id': 'id', 'Settlement': 'Settlement', });
lyr_LabelCheat_2.set('fieldImages', {'id': 'Hidden', 'Settlement': 'TextEdit', });
lyr_LabelCheat_2.set('fieldLabels', {'Settlement': 'inline label', });
lyr_LabelCheat_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});