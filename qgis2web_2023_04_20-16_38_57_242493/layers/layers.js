ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32749").setExtent([388776.117215, 9129782.279430, 389613.040485, 9130438.137570]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMaps_1 = new ol.layer.Tile({
            'title': 'OpenStreetMaps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Admin_Purwodadi_2 = new ol.format.GeoJSON();
var features_Admin_Purwodadi_2 = format_Admin_Purwodadi_2.readFeatures(json_Admin_Purwodadi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Admin_Purwodadi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Admin_Purwodadi_2.addFeatures(features_Admin_Purwodadi_2);
var lyr_Admin_Purwodadi_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Admin_Purwodadi_2, 
                style: style_Admin_Purwodadi_2,
                interactive: true,
                title: '<img src="styles/legend/Admin_Purwodadi_2.png" /> Admin_Purwodadi'
            });
var format_Bangunan_PWD_3 = new ol.format.GeoJSON();
var features_Bangunan_PWD_3 = format_Bangunan_PWD_3.readFeatures(json_Bangunan_PWD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Bangunan_PWD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_PWD_3.addFeatures(features_Bangunan_PWD_3);
var lyr_Bangunan_PWD_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bangunan_PWD_3, 
                style: style_Bangunan_PWD_3,
                interactive: true,
                title: '<img src="styles/legend/Bangunan_PWD_3.png" /> Bangunan_PWD'
            });
var format_Area_Terdampak_Pembangunan_4 = new ol.format.GeoJSON();
var features_Area_Terdampak_Pembangunan_4 = format_Area_Terdampak_Pembangunan_4.readFeatures(json_Area_Terdampak_Pembangunan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Area_Terdampak_Pembangunan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_Terdampak_Pembangunan_4.addFeatures(features_Area_Terdampak_Pembangunan_4);
var lyr_Area_Terdampak_Pembangunan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Area_Terdampak_Pembangunan_4, 
                style: style_Area_Terdampak_Pembangunan_4,
                interactive: true,
                title: '<img src="styles/legend/Area_Terdampak_Pembangunan_4.png" /> Area_Terdampak_Pembangunan'
            });
var format_Jaringan_Jalan_5 = new ol.format.GeoJSON();
var features_Jaringan_Jalan_5 = format_Jaringan_Jalan_5.readFeatures(json_Jaringan_Jalan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Jaringan_Jalan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_Jalan_5.addFeatures(features_Jaringan_Jalan_5);
var lyr_Jaringan_Jalan_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jaringan_Jalan_5, 
                style: style_Jaringan_Jalan_5,
                interactive: true,
                title: '<img src="styles/legend/Jaringan_Jalan_5.png" /> Jaringan_Jalan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMaps_1.setVisible(true);lyr_Admin_Purwodadi_2.setVisible(false);lyr_Bangunan_PWD_3.setVisible(true);lyr_Area_Terdampak_Pembangunan_4.setVisible(true);lyr_Jaringan_Jalan_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMaps_1,lyr_Admin_Purwodadi_2,lyr_Bangunan_PWD_3,lyr_Area_Terdampak_Pembangunan_4,lyr_Jaringan_Jalan_5];
lyr_Admin_Purwodadi_2.set('fieldAliases', {'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', });
lyr_Bangunan_PWD_3.set('fieldAliases', {'Jenis': 'Jenis', });
lyr_Area_Terdampak_Pembangunan_4.set('fieldAliases', {'Jenis': 'Jenis', 'Desa': 'Desa', 'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'ganti_rugi': 'ganti_rugi', });
lyr_Jaringan_Jalan_5.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Tema': 'Tema', 'Jenis': 'Jenis', 'Jenis_Bang': 'Jenis_Bang', 'Toponim': 'Toponim', 'Metadata': 'Metadata', });
lyr_Admin_Purwodadi_2.set('fieldImages', {'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'SUMBER': 'TextEdit', });
lyr_Bangunan_PWD_3.set('fieldImages', {'Jenis': '', });
lyr_Area_Terdampak_Pembangunan_4.set('fieldImages', {'Jenis': '', 'Desa': '', 'Kecamatan': '', 'Kabupaten': '', 'ganti_rugi': '', });
lyr_Jaringan_Jalan_5.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', 'Tema': '', 'Jenis': '', 'Jenis_Bang': '', 'Toponim': '', 'Metadata': '', });
lyr_Admin_Purwodadi_2.set('fieldLabels', {'KDEBPS': 'no label', 'KDEPUM': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER': 'no label', });
lyr_Bangunan_PWD_3.set('fieldLabels', {'Jenis': 'no label', });
lyr_Area_Terdampak_Pembangunan_4.set('fieldLabels', {'Jenis': 'header label', 'Desa': 'header label', 'Kecamatan': 'header label', 'Kabupaten': 'header label', 'ganti_rugi': 'header label', });
lyr_Jaringan_Jalan_5.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Tema': 'no label', 'Jenis': 'no label', 'Jenis_Bang': 'no label', 'Toponim': 'no label', 'Metadata': 'no label', });
lyr_Jaringan_Jalan_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});