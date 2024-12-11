var wms_layers = [];

var format_Kradenan_RIll_0 = new ol.format.GeoJSON();
var features_Kradenan_RIll_0 = format_Kradenan_RIll_0.readFeatures(json_Kradenan_RIll_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kradenan_RIll_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kradenan_RIll_0.addFeatures(features_Kradenan_RIll_0);
var lyr_Kradenan_RIll_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kradenan_RIll_0, 
                style: style_Kradenan_RIll_0,
                popuplayertitle: "Kradenan_RIll",
                interactive: true,
                title: '<img src="styles/legend/Kradenan_RIll_0.png" /> Kradenan_RIll'
            });
var format_Permukiman_RDTR_1 = new ol.format.GeoJSON();
var features_Permukiman_RDTR_1 = format_Permukiman_RDTR_1.readFeatures(json_Permukiman_RDTR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Permukiman_RDTR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Permukiman_RDTR_1.addFeatures(features_Permukiman_RDTR_1);
var lyr_Permukiman_RDTR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Permukiman_RDTR_1, 
                style: style_Permukiman_RDTR_1,
                popuplayertitle: "Permukiman_RDTR",
                interactive: true,
                title: '<img src="styles/legend/Permukiman_RDTR_1.png" /> Permukiman_RDTR'
            });
var format_JalanKradenan_2 = new ol.format.GeoJSON();
var features_JalanKradenan_2 = format_JalanKradenan_2.readFeatures(json_JalanKradenan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKradenan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKradenan_2.addFeatures(features_JalanKradenan_2);
var lyr_JalanKradenan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKradenan_2, 
                style: style_JalanKradenan_2,
                popuplayertitle: "Jalan Kradenan",
                interactive: true,
                title: '<img src="styles/legend/JalanKradenan_2.png" /> Jalan Kradenan'
            });

lyr_Kradenan_RIll_0.setVisible(true);lyr_Permukiman_RDTR_1.setVisible(true);lyr_JalanKradenan_2.setVisible(true);
var layersList = [lyr_Kradenan_RIll_0,lyr_Permukiman_RDTR_1,lyr_JalanKradenan_2];
lyr_Kradenan_RIll_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Permukiman_RDTR_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAMOBJ': 'NAMOBJ', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'Lahan': 'Lahan', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Keterangan': 'Keterangan', 'Tuplah': 'Tuplah', 'SUMBER': 'SUMBER', 'TAHUN': 'TAHUN', 'LUAS': 'LUAS', 'Set_Lebar': 'Set_Lebar', 'Lebar': 'Lebar', 'Nama_Objek': 'Nama_Objek', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_JalanKradenan_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Kradenan_RIll_0.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Permukiman_RDTR_1.set('fieldImages', {'OBJECTID_1': '', 'NAMOBJ': '', 'WADMKC': '', 'WADMKD': '', 'Lahan': '', 'OBJECTID': '', 'Shape_Leng': '', 'Keterangan': '', 'Tuplah': '', 'SUMBER': '', 'TAHUN': '', 'LUAS': '', 'Set_Lebar': '', 'Lebar': '', 'Nama_Objek': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_JalanKradenan_2.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_LENG': '', 'SHAPE_LEN': '', });
lyr_Kradenan_RIll_0.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Permukiman_RDTR_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'NAMOBJ': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'Lahan': 'no label', 'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Keterangan': 'no label', 'Tuplah': 'no label', 'SUMBER': 'no label', 'TAHUN': 'no label', 'LUAS': 'no label', 'Set_Lebar': 'no label', 'Lebar': 'no label', 'Nama_Objek': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_JalanKradenan_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_LEN': 'no label', });
lyr_JalanKradenan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});