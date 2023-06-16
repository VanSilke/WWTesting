ol.proj.proj4.register(proj4);
ol.proj.get("ESRI:54001").setExtent([-231155.734006, -215506.931125, 1031514.376463, 914617.698134]);
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
var lyr_TerrainGrid_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Terrain Grid",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TerrainGrid_1.png",
    attributions: ' ',
                                projection: 'ESRI:54001',
                                alwaysInRange: true,
                                imageExtent: [-1336761.240400, -2257805.360400, 1735238.759600, 2350194.639600]
                            })
                        });
var format_SettlementLabels_2 = new ol.format.GeoJSON();
var features_SettlementLabels_2 = format_SettlementLabels_2.readFeatures(json_SettlementLabels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:54001'});
var jsonSource_SettlementLabels_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SettlementLabels_2.addFeatures(features_SettlementLabels_2);
var lyr_SettlementLabels_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SettlementLabels_2, 
                style: style_SettlementLabels_2,
                interactive: true,
                title: '<img src="styles/legend/SettlementLabels_2.png" /> Settlement Labels'
            });

lyr_innserseav3a_0.setVisible(true);lyr_TerrainGrid_1.setVisible(true);lyr_SettlementLabels_2.setVisible(true);
var layersList = [lyr_innserseav3a_0,lyr_TerrainGrid_1,lyr_SettlementLabels_2];
lyr_SettlementLabels_2.set('fieldAliases', {'Settlement': 'Settlement', 'Settlement Data - Settlements_Description': 'Description', 'Settlement Data - Settlements_Government': 'Government', 'Settlement Data - Settlements_Blacksmith': 'Blacksmith', 'Settlement Data - Settlements_Academy': 'Academy', 'Settlement Data - Settlements_Runesmith': 'Runesmith', 'Settlement Data - Settlements_Apothecary': 'Apothecary', 'Settlement Data - Settlements_General Store': 'General Store', 'Settlement Data - Settlements_Stablemaster': 'Stablemaster', 'Settlement Data - Settlements_Curio Shop': 'Curio Shop', 'Settlement Data - Settlements_Shrines': 'Shrines', 'Settlement Data - Settlements_Guilds': 'Guilds', 'Settlement Data - Settlements_Grand Guilds': 'Grand Guilds', 'Settlement Data - Settlements_Special': 'Special', });
lyr_SettlementLabels_2.set('fieldImages', {'Settlement': 'TextEdit', 'Settlement Data - Settlements_Description': 'TextEdit', 'Settlement Data - Settlements_Government': 'TextEdit', 'Settlement Data - Settlements_Blacksmith': 'TextEdit', 'Settlement Data - Settlements_Academy': 'TextEdit', 'Settlement Data - Settlements_Runesmith': 'TextEdit', 'Settlement Data - Settlements_Apothecary': 'TextEdit', 'Settlement Data - Settlements_General Store': 'TextEdit', 'Settlement Data - Settlements_Stablemaster': 'TextEdit', 'Settlement Data - Settlements_Curio Shop': 'TextEdit', 'Settlement Data - Settlements_Shrines': 'TextEdit', 'Settlement Data - Settlements_Guilds': 'TextEdit', 'Settlement Data - Settlements_Grand Guilds': 'TextEdit', 'Settlement Data - Settlements_Special': 'TextEdit', });
lyr_SettlementLabels_2.set('fieldLabels', {'Settlement': 'inline label', 'Settlement Data - Settlements_Description': 'no label', 'Settlement Data - Settlements_Government': 'inline label', 'Settlement Data - Settlements_Blacksmith': 'inline label', 'Settlement Data - Settlements_Academy': 'inline label', 'Settlement Data - Settlements_Runesmith': 'inline label', 'Settlement Data - Settlements_Apothecary': 'inline label', 'Settlement Data - Settlements_General Store': 'inline label', 'Settlement Data - Settlements_Stablemaster': 'inline label', 'Settlement Data - Settlements_Curio Shop': 'inline label', 'Settlement Data - Settlements_Shrines': 'inline label', 'Settlement Data - Settlements_Guilds': 'inline label', 'Settlement Data - Settlements_Grand Guilds': 'inline label', 'Settlement Data - Settlements_Special': 'no label', });
lyr_SettlementLabels_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});