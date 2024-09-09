var wms_layers = [];

var format_Nen_0 = new ol.format.GeoJSON();
var features_Nen_0 = format_Nen_0.readFeatures(json_Nen_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nen_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nen_0.addFeatures(features_Nen_0);
var lyr_Nen_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nen_0, 
                style: style_Nen_0,
                popuplayertitle: "Nen",
                interactive: true,
                title: '<img src="styles/legend/Nen_0.png" /> Nen'
            });
var format_Song_1 = new ol.format.GeoJSON();
var features_Song_1 = format_Song_1.readFeatures(json_Song_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Song_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Song_1.addFeatures(features_Song_1);
var lyr_Song_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Song_1, 
                style: style_Song_1,
                popuplayertitle: "Song",
                interactive: true,
                title: '<img src="styles/legend/Song_1.png" /> Song'
            });
var format_Ho_2 = new ol.format.GeoJSON();
var features_Ho_2 = format_Ho_2.readFeatures(json_Ho_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ho_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ho_2.addFeatures(features_Ho_2);
var lyr_Ho_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ho_2, 
                style: style_Ho_2,
                popuplayertitle: "Ho",
                interactive: true,
                title: '<img src="styles/legend/Ho_2.png" /> Ho'
            });
var format_GiaoThong_3 = new ol.format.GeoJSON();
var features_GiaoThong_3 = format_GiaoThong_3.readFeatures(json_GiaoThong_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GiaoThong_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GiaoThong_3.addFeatures(features_GiaoThong_3);
var lyr_GiaoThong_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GiaoThong_3, 
                style: style_GiaoThong_3,
                popuplayertitle: "GiaoThong",
                interactive: true,
                title: '<img src="styles/legend/GiaoThong_3.png" /> GiaoThong'
            });
var format_UBND_4 = new ol.format.GeoJSON();
var features_UBND_4 = format_UBND_4.readFeatures(json_UBND_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UBND_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBND_4.addFeatures(features_UBND_4);
var lyr_UBND_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBND_4, 
                style: style_UBND_4,
                popuplayertitle: "UBND",
                interactive: true,
    title: 'UBND<br />\
    <img src="styles/legend/UBND_4_0.png" /> Phường<br />\
    <img src="styles/legend/UBND_4_1.png" /> TP<br />\
    <img src="styles/legend/UBND_4_2.png" /> Xã<br />\
    <img src="styles/legend/UBND_4_3.png" /> <br />'
        });

lyr_Nen_0.setVisible(true);lyr_Song_1.setVisible(true);lyr_Ho_2.setVisible(true);lyr_GiaoThong_3.setVisible(true);lyr_UBND_4.setVisible(true);
var layersList = [lyr_Nen_0,lyr_Song_1,lyr_Ho_2,lyr_GiaoThong_3,lyr_UBND_4];
lyr_Nen_0.set('fieldAliases', {'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Song_1.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', 'Shape_Leng': 'Shape_Leng', });
lyr_Ho_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_GiaoThong_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'Shape_Leng': 'Shape_Leng', });
lyr_UBND_4.set('fieldAliases', {'STT': 'STT', 'TEN': 'TEN', 'LOAI': 'LOAI', 'X': 'X', 'Y': 'Y', });
lyr_Nen_0.set('fieldImages', {'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Song_1.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'width': 'TextEdit', 'name': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Ho_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_GiaoThong_3.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', 'Shape_Leng': '', });
lyr_UBND_4.set('fieldImages', {'STT': 'TextEdit', 'TEN': 'TextEdit', 'LOAI': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Nen_0.set('fieldLabels', {'GID_3': 'hidden field', 'GID_0': 'header label - visible with data', 'COUNTRY': 'no label', 'GID_1': 'hidden field', 'NAME_1': 'no label', 'NL_NAME_1': 'hidden field', 'GID_2': 'hidden field', 'NAME_2': 'no label', 'NL_NAME_2': 'hidden field', 'NAME_3': 'hidden field', 'VARNAME_3': 'no label', 'NL_NAME_3': 'hidden field', 'TYPE_3': 'hidden field', 'ENGTYPE_3': 'hidden field', 'CC_3': 'hidden field', 'HASC_3': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Song_1.set('fieldLabels', {'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'width': 'hidden field', 'name': 'no label', 'Shape_Leng': 'hidden field', });
lyr_Ho_2.set('fieldLabels', {'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'no label', 'name': 'no label', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_GiaoThong_3.set('fieldLabels', {'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'name': 'inline label - always visible', 'ref': 'hidden field', 'oneway': 'hidden field', 'maxspeed': 'hidden field', 'layer': 'hidden field', 'bridge': 'hidden field', 'tunnel': 'hidden field', 'Shape_Leng': 'hidden field', });
lyr_UBND_4.set('fieldLabels', {'STT': 'hidden field', 'TEN': 'inline label - always visible', 'LOAI': 'inline label - always visible', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_UBND_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});