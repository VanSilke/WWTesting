ol.proj.proj4.register(proj4);
ol.proj.get("ESRI:54001").setExtent([155048.879768, 66798.084880, 751082.941241, 631860.399510]);
var wms_layers = [];

var lyr_InnerSeaMap_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Inner Sea Map",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/InnerSeaMap_0.png",
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

lyr_InnerSeaMap_0.setVisible(true);lyr_TerrainGrid_1.setVisible(true);lyr_SettlementLabels_2.setVisible(true);
var layersList = [lyr_InnerSeaMap_0,lyr_TerrainGrid_1,lyr_SettlementLabels_2];
lyr_SettlementLabels_2.set('fieldAliases', {'Settlement': 'Settlement', 'Settlement Data_Level': 'Level', 'Settlement Data_Description': 'Description', 'Settlement Data_Government': 'Government', 'Settlement Data_Blacksmith': 'Blacksmith', 'Settlement Data_Academy': 'Academy', 'Settlement Data_Runesmith': 'Runesmith', 'Settlement Data_Apothecary': 'Apothecary', 'Settlement Data_General Store': 'General', 'Settlement Data_Stablemaster': 'Stablemaster', 'Settlement Data_Curio Shop': 'Curio Shop', 'Settlement Data_Shrines': 'Shrines', 'Settlement Data_Guilds': 'Guilds', 'Settlement Data_Grand Guilds': 'Grand Guilds', 'Settlement Data_Special': 'Special', });
lyr_SettlementLabels_2.set('fieldImages', {'Settlement': 'TextEdit', 'Settlement Data_Level': 'TextEdit', 'Settlement Data_Description': 'TextEdit', 'Settlement Data_Government': 'TextEdit', 'Settlement Data_Blacksmith': 'TextEdit', 'Settlement Data_Academy': 'TextEdit', 'Settlement Data_Runesmith': 'TextEdit', 'Settlement Data_Apothecary': 'TextEdit', 'Settlement Data_General Store': 'TextEdit', 'Settlement Data_Stablemaster': 'TextEdit', 'Settlement Data_Curio Shop': 'TextEdit', 'Settlement Data_Shrines': 'TextEdit', 'Settlement Data_Guilds': 'TextEdit', 'Settlement Data_Grand Guilds': 'TextEdit', 'Settlement Data_Special': 'TextEdit', });
lyr_SettlementLabels_2.set('fieldLabels', {'Settlement': 'inline label', 'Settlement Data_Level': 'inline label', 'Settlement Data_Description': 'no label', 'Settlement Data_Government': 'inline label', 'Settlement Data_Blacksmith': 'inline label', 'Settlement Data_Academy': 'inline label', 'Settlement Data_Runesmith': 'inline label', 'Settlement Data_Apothecary': 'inline label', 'Settlement Data_General Store': 'inline label', 'Settlement Data_Stablemaster': 'inline label', 'Settlement Data_Curio Shop': 'inline label', 'Settlement Data_Shrines': 'inline label', 'Settlement Data_Guilds': 'inline label', 'Settlement Data_Grand Guilds': 'inline label', 'Settlement Data_Special': 'no label', });
lyr_SettlementLabels_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});