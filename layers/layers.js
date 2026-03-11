ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-5704985.857245, -3507333.234872, -5694837.206457, -3501734.440033]);
var wms_layers = [];


        var lyr_EsriImagery_0 = new ol.layer.Tile({
            'title': 'Esri Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_FundeadourosLongoPrazo_1 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_1 = format_FundeadourosLongoPrazo_1.readFeatures(json_FundeadourosLongoPrazo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FundeadourosLongoPrazo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_1.addFeatures(features_FundeadourosLongoPrazo_1);
var lyr_FundeadourosLongoPrazo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_1, 
                style: style_FundeadourosLongoPrazo_1,
                popuplayertitle: 'Fundeadouros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_1.png" /> Fundeadouros - Longo Prazo '
            });
var format_FundeadourosMdioPrazo_2 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_2 = format_FundeadourosMdioPrazo_2.readFeatures(json_FundeadourosMdioPrazo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FundeadourosMdioPrazo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_2.addFeatures(features_FundeadourosMdioPrazo_2);
var lyr_FundeadourosMdioPrazo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_2, 
                style: style_FundeadourosMdioPrazo_2,
                popuplayertitle: 'Fundeadouros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_2.png" /> Fundeadouros - Médio Prazo '
            });
var format_FundeadourosCurtoPrazo_3 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_3 = format_FundeadourosCurtoPrazo_3.readFeatures(json_FundeadourosCurtoPrazo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FundeadourosCurtoPrazo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_3.addFeatures(features_FundeadourosCurtoPrazo_3);
var lyr_FundeadourosCurtoPrazo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_3, 
                style: style_FundeadourosCurtoPrazo_3,
                popuplayertitle: 'Fundeadouros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_3.png" /> Fundeadouros - Curto Prazo '
            });
var format_FundeadourosSituaoAtual_4 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_4 = format_FundeadourosSituaoAtual_4.readFeatures(json_FundeadourosSituaoAtual_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FundeadourosSituaoAtual_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_4.addFeatures(features_FundeadourosSituaoAtual_4);
var lyr_FundeadourosSituaoAtual_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_4, 
                style: style_FundeadourosSituaoAtual_4,
                popuplayertitle: 'Fundeadouros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_4.png" /> Fundeadouros - Situação Atual '
            });
var format_BaciasdeEvoluoLongoPrazo_5 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoLongoPrazo_5 = format_BaciasdeEvoluoLongoPrazo_5.readFeatures(json_BaciasdeEvoluoLongoPrazo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaciasdeEvoluoLongoPrazo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoLongoPrazo_5.addFeatures(features_BaciasdeEvoluoLongoPrazo_5);
var lyr_BaciasdeEvoluoLongoPrazo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoLongoPrazo_5, 
                style: style_BaciasdeEvoluoLongoPrazo_5,
                popuplayertitle: 'Bacias de Evolução - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoLongoPrazo_5.png" /> Bacias de Evolução - Longo Prazo '
            });
var format_BaciasdeEvoluoMdioPrazo_6 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoMdioPrazo_6 = format_BaciasdeEvoluoMdioPrazo_6.readFeatures(json_BaciasdeEvoluoMdioPrazo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaciasdeEvoluoMdioPrazo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoMdioPrazo_6.addFeatures(features_BaciasdeEvoluoMdioPrazo_6);
var lyr_BaciasdeEvoluoMdioPrazo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoMdioPrazo_6, 
                style: style_BaciasdeEvoluoMdioPrazo_6,
                popuplayertitle: 'Bacias de Evolução - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoMdioPrazo_6.png" /> Bacias de Evolução - Médio Prazo '
            });
var format_BaciasdeEvoluoCurtoPrazo_7 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoCurtoPrazo_7 = format_BaciasdeEvoluoCurtoPrazo_7.readFeatures(json_BaciasdeEvoluoCurtoPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaciasdeEvoluoCurtoPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoCurtoPrazo_7.addFeatures(features_BaciasdeEvoluoCurtoPrazo_7);
var lyr_BaciasdeEvoluoCurtoPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoCurtoPrazo_7, 
                style: style_BaciasdeEvoluoCurtoPrazo_7,
                popuplayertitle: 'Bacias de Evolução - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoCurtoPrazo_7.png" /> Bacias de Evolução - Curto Prazo'
            });
var format_BaciasdeEvoluoSituaoAtual_8 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoSituaoAtual_8 = format_BaciasdeEvoluoSituaoAtual_8.readFeatures(json_BaciasdeEvoluoSituaoAtual_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaciasdeEvoluoSituaoAtual_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoSituaoAtual_8.addFeatures(features_BaciasdeEvoluoSituaoAtual_8);
var lyr_BaciasdeEvoluoSituaoAtual_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoSituaoAtual_8, 
                style: style_BaciasdeEvoluoSituaoAtual_8,
                popuplayertitle: 'Bacias de Evolução - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoSituaoAtual_8.png" /> Bacias de Evolução - Situação Atual '
            });
var format_CanaisdeAcessoLongoPrazo_9 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_9 = format_CanaisdeAcessoLongoPrazo_9.readFeatures(json_CanaisdeAcessoLongoPrazo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanaisdeAcessoLongoPrazo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_9.addFeatures(features_CanaisdeAcessoLongoPrazo_9);
var lyr_CanaisdeAcessoLongoPrazo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_9, 
                style: style_CanaisdeAcessoLongoPrazo_9,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_9.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_10 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_10 = format_CanaisdeAcessoMdioPrazo_10.readFeatures(json_CanaisdeAcessoMdioPrazo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanaisdeAcessoMdioPrazo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_10.addFeatures(features_CanaisdeAcessoMdioPrazo_10);
var lyr_CanaisdeAcessoMdioPrazo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_10, 
                style: style_CanaisdeAcessoMdioPrazo_10,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_10.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_11 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_11 = format_CanaisdeAcessoCurtoPrazo_11.readFeatures(json_CanaisdeAcessoCurtoPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanaisdeAcessoCurtoPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_11.addFeatures(features_CanaisdeAcessoCurtoPrazo_11);
var lyr_CanaisdeAcessoCurtoPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_11, 
                style: style_CanaisdeAcessoCurtoPrazo_11,
                popuplayertitle: 'Canais de Acesso - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_11.png" /> Canais de Acesso - Curto Prazo '
            });
var format_CanaisdeAcessoSituaoAtual_12 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_12 = format_CanaisdeAcessoSituaoAtual_12.readFeatures(json_CanaisdeAcessoSituaoAtual_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanaisdeAcessoSituaoAtual_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_12.addFeatures(features_CanaisdeAcessoSituaoAtual_12);
var lyr_CanaisdeAcessoSituaoAtual_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_12, 
                style: style_CanaisdeAcessoSituaoAtual_12,
                popuplayertitle: 'Canais de Acesso - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_12.png" /> Canais de Acesso - Situação Atual '
            });
var format_AcessosHidroviriosExternos_13 = new ol.format.GeoJSON();
var features_AcessosHidroviriosExternos_13 = format_AcessosHidroviriosExternos_13.readFeatures(json_AcessosHidroviriosExternos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosHidroviriosExternos_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosHidroviriosExternos_13.addFeatures(features_AcessosHidroviriosExternos_13);
var lyr_AcessosHidroviriosExternos_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosHidroviriosExternos_13, 
                style: style_AcessosHidroviriosExternos_13,
                popuplayertitle: 'Acessos Hidroviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosHidroviriosExternos_13.png" /> Acessos Hidroviários Externos '
            });
var format_AcessosFerroviriosExternos_14 = new ol.format.GeoJSON();
var features_AcessosFerroviriosExternos_14 = format_AcessosFerroviriosExternos_14.readFeatures(json_AcessosFerroviriosExternos_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosFerroviriosExternos_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosExternos_14.addFeatures(features_AcessosFerroviriosExternos_14);
var lyr_AcessosFerroviriosExternos_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosExternos_14, 
                style: style_AcessosFerroviriosExternos_14,
                popuplayertitle: 'Acessos Ferroviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosExternos_14.png" /> Acessos Ferroviários Externos '
            });
var format_AcessosRodoviriosInternosLongoPrazo_15 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosLongoPrazo_15 = format_AcessosRodoviriosInternosLongoPrazo_15.readFeatures(json_AcessosRodoviriosInternosLongoPrazo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosRodoviriosInternosLongoPrazo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosLongoPrazo_15.addFeatures(features_AcessosRodoviriosInternosLongoPrazo_15);
var lyr_AcessosRodoviriosInternosLongoPrazo_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosLongoPrazo_15, 
                style: style_AcessosRodoviriosInternosLongoPrazo_15,
                popuplayertitle: 'Acessos Rodoviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosLongoPrazo_15.png" /> Acessos Rodoviários Internos - Longo Prazo '
            });
var format_AcessosRodoviriosInternosMdioPrazo_16 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosMdioPrazo_16 = format_AcessosRodoviriosInternosMdioPrazo_16.readFeatures(json_AcessosRodoviriosInternosMdioPrazo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosRodoviriosInternosMdioPrazo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosMdioPrazo_16.addFeatures(features_AcessosRodoviriosInternosMdioPrazo_16);
var lyr_AcessosRodoviriosInternosMdioPrazo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosMdioPrazo_16, 
                style: style_AcessosRodoviriosInternosMdioPrazo_16,
                popuplayertitle: 'Acessos Rodoviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosMdioPrazo_16.png" /> Acessos Rodoviários Internos - Médio Prazo '
            });
var format_AcessosRodoviriosInternosCurtoPrazo_17 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosCurtoPrazo_17 = format_AcessosRodoviriosInternosCurtoPrazo_17.readFeatures(json_AcessosRodoviriosInternosCurtoPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosRodoviriosInternosCurtoPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosCurtoPrazo_17.addFeatures(features_AcessosRodoviriosInternosCurtoPrazo_17);
var lyr_AcessosRodoviriosInternosCurtoPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosCurtoPrazo_17, 
                style: style_AcessosRodoviriosInternosCurtoPrazo_17,
                popuplayertitle: 'Acessos Rodoviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosCurtoPrazo_17.png" /> Acessos Rodoviários Internos - Curto Prazo '
            });
var format_AcessosRodoviriosInternosSituaoAtual_18 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosSituaoAtual_18 = format_AcessosRodoviriosInternosSituaoAtual_18.readFeatures(json_AcessosRodoviriosInternosSituaoAtual_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosRodoviriosInternosSituaoAtual_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosSituaoAtual_18.addFeatures(features_AcessosRodoviriosInternosSituaoAtual_18);
var lyr_AcessosRodoviriosInternosSituaoAtual_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosSituaoAtual_18, 
                style: style_AcessosRodoviriosInternosSituaoAtual_18,
                popuplayertitle: 'Acessos Rodoviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosSituaoAtual_18.png" /> Acessos Rodoviários Internos - Situação Atual '
            });
var format_AcessosRodoviriosExternos_19 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_19 = format_AcessosRodoviriosExternos_19.readFeatures(json_AcessosRodoviriosExternos_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosRodoviriosExternos_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_19.addFeatures(features_AcessosRodoviriosExternos_19);
var lyr_AcessosRodoviriosExternos_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_19, 
                style: style_AcessosRodoviriosExternos_19,
                popuplayertitle: 'Acessos Rodoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_19.png" /> Acessos Rodoviários Externos '
            });
var format_reaseInstalaesAlfandegadas_20 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadas_20 = format_reaseInstalaesAlfandegadas_20.readFeatures(json_reaseInstalaesAlfandegadas_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaseInstalaesAlfandegadas_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadas_20.addFeatures(features_reaseInstalaesAlfandegadas_20);
var lyr_reaseInstalaesAlfandegadas_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadas_20, 
                style: style_reaseInstalaesAlfandegadas_20,
                popuplayertitle: 'Áreas e Instalações Alfandegadas ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadas_20.png" /> Áreas e Instalações Alfandegadas '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_25 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_25 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_25.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_25.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_25);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_25, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_25,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_25.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_26 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_26 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_26.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_26.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_26);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_26, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_26,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_26.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_28 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_28 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_28.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_28.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_28);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_28, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_28,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_28.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_29 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_29 = format_reasNoAfetassOperaesPorturiasLongoPrazo_29.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_29.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_29);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_29, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_29,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_29.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_30 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_30 = format_reasNoAfetassOperaesPorturiasMdioPrazo_30.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_30.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_30);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_30, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_30,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_30.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_31 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_31 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_31.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_31.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_31);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_31, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_31,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_31.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_32 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_32 = format_reasNoAfetassOperaesPorturiasSituaoAtual_32.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_32.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_32);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_32, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_32,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_32.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual '
            });
var format_AcostagemLongoPrazo_33 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_33 = format_AcostagemLongoPrazo_33.readFeatures(json_AcostagemLongoPrazo_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcostagemLongoPrazo_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_33.addFeatures(features_AcostagemLongoPrazo_33);
var lyr_AcostagemLongoPrazo_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_33, 
                style: style_AcostagemLongoPrazo_33,
                popuplayertitle: 'Acostagem - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_33.png" /> Acostagem - Longo Prazo'
            });
var format_AcostagemMdioPrazo_34 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_34 = format_AcostagemMdioPrazo_34.readFeatures(json_AcostagemMdioPrazo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcostagemMdioPrazo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_34.addFeatures(features_AcostagemMdioPrazo_34);
var lyr_AcostagemMdioPrazo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_34, 
                style: style_AcostagemMdioPrazo_34,
                popuplayertitle: 'Acostagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_34.png" /> Acostagem - Médio Prazo '
            });
var format_AcostagemCurtoPrazo_35 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_35 = format_AcostagemCurtoPrazo_35.readFeatures(json_AcostagemCurtoPrazo_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcostagemCurtoPrazo_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_35.addFeatures(features_AcostagemCurtoPrazo_35);
var lyr_AcostagemCurtoPrazo_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_35, 
                style: style_AcostagemCurtoPrazo_35,
                popuplayertitle: 'Acostagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_35.png" /> Acostagem - Curto Prazo '
            });
var format_AcostagemSituaoAtual_36 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_36 = format_AcostagemSituaoAtual_36.readFeatures(json_AcostagemSituaoAtual_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcostagemSituaoAtual_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_36.addFeatures(features_AcostagemSituaoAtual_36);
var lyr_AcostagemSituaoAtual_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_36, 
                style: style_AcostagemSituaoAtual_36,
                popuplayertitle: 'Acostagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_36.png" /> Acostagem - Situação Atual '
            });
var format_ArmazenagemLongoPrazo_37 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_37 = format_ArmazenagemLongoPrazo_37.readFeatures(json_ArmazenagemLongoPrazo_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArmazenagemLongoPrazo_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_37.addFeatures(features_ArmazenagemLongoPrazo_37);
var lyr_ArmazenagemLongoPrazo_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_37, 
                style: style_ArmazenagemLongoPrazo_37,
                popuplayertitle: 'Armazenagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_37.png" /> Armazenagem - Longo Prazo '
            });
var format_ArmazenagemMdioPrazo_38 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_38 = format_ArmazenagemMdioPrazo_38.readFeatures(json_ArmazenagemMdioPrazo_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArmazenagemMdioPrazo_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_38.addFeatures(features_ArmazenagemMdioPrazo_38);
var lyr_ArmazenagemMdioPrazo_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_38, 
                style: style_ArmazenagemMdioPrazo_38,
                popuplayertitle: 'Armazenagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_38.png" /> Armazenagem - Médio Prazo '
            });
var format_ArmazenagemCurtoPrazo_39 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_39 = format_ArmazenagemCurtoPrazo_39.readFeatures(json_ArmazenagemCurtoPrazo_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArmazenagemCurtoPrazo_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_39.addFeatures(features_ArmazenagemCurtoPrazo_39);
var lyr_ArmazenagemCurtoPrazo_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_39, 
                style: style_ArmazenagemCurtoPrazo_39,
                popuplayertitle: 'Armazenagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_39.png" /> Armazenagem - Curto Prazo '
            });
var format_ArmazenagemSituaoAtual_40 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_40 = format_ArmazenagemSituaoAtual_40.readFeatures(json_ArmazenagemSituaoAtual_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArmazenagemSituaoAtual_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_40.addFeatures(features_ArmazenagemSituaoAtual_40);
var lyr_ArmazenagemSituaoAtual_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_40, 
                style: style_ArmazenagemSituaoAtual_40,
                popuplayertitle: 'Armazenagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_40.png" /> Armazenagem - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_41 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_41 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_41.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_41.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_41);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_41, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_41,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_41.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_42 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_42 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_42.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_42.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_42);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_42, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_42,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_42.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_43 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_43 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_43.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_43.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_43);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_43, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_43,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_43.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_44 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_44 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_44.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_44.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_44);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_44, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_44,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_44.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoLongoPrazo_45 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoLongoPrazo_45 = format_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoLongoPrazo_45.readFeatures(json_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoLongoPrazo_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoLongoPrazo_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoLongoPrazo_45.addFeatures(features_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoLongoPrazo_45);
var lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoLongoPrazo_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoLongoPrazo_45, 
                style: style_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoLongoPrazo_45,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas de Uso Público - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasdeUsoPblicoLongoPrazo_45.png" /> Áreas Afetas às Operações Portuárias Arrendadas de Uso Público - Longo Prazo'
            });
var format_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoMdioPrazo_46 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoMdioPrazo_46 = format_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoMdioPrazo_46.readFeatures(json_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoMdioPrazo_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoMdioPrazo_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoMdioPrazo_46.addFeatures(features_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoMdioPrazo_46);
var lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoMdioPrazo_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoMdioPrazo_46, 
                style: style_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoMdioPrazo_46,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas de Uso Público - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasdeUsoPblicoMdioPrazo_46.png" /> Áreas Afetas às Operações Portuárias Arrendadas de Uso Público - Médio Prazo'
            });
var format_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoCurtoPrazo_47 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoCurtoPrazo_47 = format_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoCurtoPrazo_47.readFeatures(json_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoCurtoPrazo_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoCurtoPrazo_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoCurtoPrazo_47.addFeatures(features_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoCurtoPrazo_47);
var lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoCurtoPrazo_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoCurtoPrazo_47, 
                style: style_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoCurtoPrazo_47,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas de Uso Público - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasdeUsoPblicoCurtoPrazo_47.png" /> Áreas Afetas às Operações Portuárias Arrendadas de Uso Público - Curto Prazo'
            });
var format_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoSituaoAtual_48 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoSituaoAtual_48 = format_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoSituaoAtual_48.readFeatures(json_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoSituaoAtual_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoSituaoAtual_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoSituaoAtual_48.addFeatures(features_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoSituaoAtual_48);
var lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoSituaoAtual_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoSituaoAtual_48, 
                style: style_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoSituaoAtual_48,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas de Uso Público - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasdeUsoPblicoSituaoAtual_48.png" /> Áreas Afetas às Operações Portuárias Arrendadas de Uso Público - Situação Atual'
            });
var format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49 = format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49.readFeatures(json_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49.addFeatures(features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49);
var lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49, 
                style: style_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasLongoPrazo_49.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50 = format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50.readFeatures(json_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50.addFeatures(features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50);
var lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50, 
                style: style_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasMdioPrazo_50.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51 = format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51.readFeatures(json_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51.addFeatures(features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51);
var lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51, 
                style: style_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52 = format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52.readFeatures(json_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52.addFeatures(features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52);
var lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52, 
                style: style_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasSituaoAtual_52.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual '
            });
var format_GranelSlidoeApoioOperacional_53 = new ol.format.GeoJSON();
var features_GranelSlidoeApoioOperacional_53 = format_GranelSlidoeApoioOperacional_53.readFeatures(json_GranelSlidoeApoioOperacional_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranelSlidoeApoioOperacional_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoeApoioOperacional_53.addFeatures(features_GranelSlidoeApoioOperacional_53);
var lyr_GranelSlidoeApoioOperacional_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoeApoioOperacional_53, 
                style: style_GranelSlidoeApoioOperacional_53,
                popuplayertitle: 'Granel Sólido e Apoio Operacional',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoeApoioOperacional_53.png" /> Granel Sólido e Apoio Operacional'
            });
var format_GranelSlidoeCargaGeral_54 = new ol.format.GeoJSON();
var features_GranelSlidoeCargaGeral_54 = format_GranelSlidoeCargaGeral_54.readFeatures(json_GranelSlidoeCargaGeral_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranelSlidoeCargaGeral_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoeCargaGeral_54.addFeatures(features_GranelSlidoeCargaGeral_54);
var lyr_GranelSlidoeCargaGeral_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoeCargaGeral_54, 
                style: style_GranelSlidoeCargaGeral_54,
                popuplayertitle: 'Granel Sólido e Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoeCargaGeral_54.png" /> Granel Sólido e Carga Geral'
            });
var format_AcessodeUsoComum_55 = new ol.format.GeoJSON();
var features_AcessodeUsoComum_55 = format_AcessodeUsoComum_55.readFeatures(json_AcessodeUsoComum_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessodeUsoComum_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessodeUsoComum_55.addFeatures(features_AcessodeUsoComum_55);
var lyr_AcessodeUsoComum_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessodeUsoComum_55, 
                style: style_AcessodeUsoComum_55,
                popuplayertitle: 'Acesso de Uso Comum ',
                interactive: true,
                title: '<img src="styles/legend/AcessodeUsoComum_55.png" /> Acesso de Uso Comum '
            });
var format_GranelSlidoVegetal_56 = new ol.format.GeoJSON();
var features_GranelSlidoVegetal_56 = format_GranelSlidoVegetal_56.readFeatures(json_GranelSlidoVegetal_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranelSlidoVegetal_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoVegetal_56.addFeatures(features_GranelSlidoVegetal_56);
var lyr_GranelSlidoVegetal_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoVegetal_56, 
                style: style_GranelSlidoVegetal_56,
                popuplayertitle: 'Granel Sólido Vegetal',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoVegetal_56.png" /> Granel Sólido Vegetal'
            });
var format_ApoioOperacional_57 = new ol.format.GeoJSON();
var features_ApoioOperacional_57 = format_ApoioOperacional_57.readFeatures(json_ApoioOperacional_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ApoioOperacional_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApoioOperacional_57.addFeatures(features_ApoioOperacional_57);
var lyr_ApoioOperacional_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApoioOperacional_57, 
                style: style_ApoioOperacional_57,
                popuplayertitle: 'Apoio Operacional',
                interactive: true,
                title: '<img src="styles/legend/ApoioOperacional_57.png" /> Apoio Operacional'
            });
var format_Multipropsito_58 = new ol.format.GeoJSON();
var features_Multipropsito_58 = format_Multipropsito_58.readFeatures(json_Multipropsito_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Multipropsito_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_58.addFeatures(features_Multipropsito_58);
var lyr_Multipropsito_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_58, 
                style: style_Multipropsito_58,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_58.png" /> Multipropósito'
            });
var format_GranelSlido_59 = new ol.format.GeoJSON();
var features_GranelSlido_59 = format_GranelSlido_59.readFeatures(json_GranelSlido_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranelSlido_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_59.addFeatures(features_GranelSlido_59);
var lyr_GranelSlido_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_59, 
                style: style_GranelSlido_59,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_59.png" /> Granel Sólido'
            });
var format_CargaGeral_60 = new ol.format.GeoJSON();
var features_CargaGeral_60 = format_CargaGeral_60.readFeatures(json_CargaGeral_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CargaGeral_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_60.addFeatures(features_CargaGeral_60);
var lyr_CargaGeral_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_60, 
                style: style_CargaGeral_60,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_60.png" /> Carga Geral'
            });
var format_GranelSlidoeApoioOperacional_61 = new ol.format.GeoJSON();
var features_GranelSlidoeApoioOperacional_61 = format_GranelSlidoeApoioOperacional_61.readFeatures(json_GranelSlidoeApoioOperacional_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranelSlidoeApoioOperacional_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoeApoioOperacional_61.addFeatures(features_GranelSlidoeApoioOperacional_61);
var lyr_GranelSlidoeApoioOperacional_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoeApoioOperacional_61, 
                style: style_GranelSlidoeApoioOperacional_61,
                popuplayertitle: 'Granel Sólido e Apoio Operacional',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoeApoioOperacional_61.png" /> Granel Sólido e Apoio Operacional'
            });
var format_GranelSlidoeCargaGeral_62 = new ol.format.GeoJSON();
var features_GranelSlidoeCargaGeral_62 = format_GranelSlidoeCargaGeral_62.readFeatures(json_GranelSlidoeCargaGeral_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranelSlidoeCargaGeral_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoeCargaGeral_62.addFeatures(features_GranelSlidoeCargaGeral_62);
var lyr_GranelSlidoeCargaGeral_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoeCargaGeral_62, 
                style: style_GranelSlidoeCargaGeral_62,
                popuplayertitle: 'Granel Sólido e Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoeCargaGeral_62.png" /> Granel Sólido e Carga Geral'
            });
var format_AcessodeUsoComum_63 = new ol.format.GeoJSON();
var features_AcessodeUsoComum_63 = format_AcessodeUsoComum_63.readFeatures(json_AcessodeUsoComum_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessodeUsoComum_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessodeUsoComum_63.addFeatures(features_AcessodeUsoComum_63);
var lyr_AcessodeUsoComum_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessodeUsoComum_63, 
                style: style_AcessodeUsoComum_63,
                popuplayertitle: 'Acesso de Uso Comum',
                interactive: true,
                title: '<img src="styles/legend/AcessodeUsoComum_63.png" /> Acesso de Uso Comum'
            });
var format_GranelSlidoVegetal_64 = new ol.format.GeoJSON();
var features_GranelSlidoVegetal_64 = format_GranelSlidoVegetal_64.readFeatures(json_GranelSlidoVegetal_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranelSlidoVegetal_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoVegetal_64.addFeatures(features_GranelSlidoVegetal_64);
var lyr_GranelSlidoVegetal_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoVegetal_64, 
                style: style_GranelSlidoVegetal_64,
                popuplayertitle: 'Granel Sólido Vegetal',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoVegetal_64.png" /> Granel Sólido Vegetal'
            });
var format_ApoioOperacional_65 = new ol.format.GeoJSON();
var features_ApoioOperacional_65 = format_ApoioOperacional_65.readFeatures(json_ApoioOperacional_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ApoioOperacional_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApoioOperacional_65.addFeatures(features_ApoioOperacional_65);
var lyr_ApoioOperacional_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApoioOperacional_65, 
                style: style_ApoioOperacional_65,
                popuplayertitle: 'Apoio Operacional',
                interactive: true,
                title: '<img src="styles/legend/ApoioOperacional_65.png" /> Apoio Operacional'
            });
var format_Multipropsito_66 = new ol.format.GeoJSON();
var features_Multipropsito_66 = format_Multipropsito_66.readFeatures(json_Multipropsito_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Multipropsito_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_66.addFeatures(features_Multipropsito_66);
var lyr_Multipropsito_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_66, 
                style: style_Multipropsito_66,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_66.png" /> Multipropósito'
            });
var format_GranelSlido_67 = new ol.format.GeoJSON();
var features_GranelSlido_67 = format_GranelSlido_67.readFeatures(json_GranelSlido_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranelSlido_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_67.addFeatures(features_GranelSlido_67);
var lyr_GranelSlido_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_67, 
                style: style_GranelSlido_67,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_67.png" /> Granel Sólido'
            });
var format_CargaGeral_68 = new ol.format.GeoJSON();
var features_CargaGeral_68 = format_CargaGeral_68.readFeatures(json_CargaGeral_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CargaGeral_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_68.addFeatures(features_CargaGeral_68);
var lyr_CargaGeral_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_68, 
                style: style_CargaGeral_68,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_68.png" /> Carga Geral'
            });
var format_GranelSlidoeApoioOperacional_69 = new ol.format.GeoJSON();
var features_GranelSlidoeApoioOperacional_69 = format_GranelSlidoeApoioOperacional_69.readFeatures(json_GranelSlidoeApoioOperacional_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranelSlidoeApoioOperacional_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoeApoioOperacional_69.addFeatures(features_GranelSlidoeApoioOperacional_69);
var lyr_GranelSlidoeApoioOperacional_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoeApoioOperacional_69, 
                style: style_GranelSlidoeApoioOperacional_69,
                popuplayertitle: 'Granel Sólido e Apoio Operacional',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoeApoioOperacional_69.png" /> Granel Sólido e Apoio Operacional'
            });
var format_GranelSlidoeCargaGeral_70 = new ol.format.GeoJSON();
var features_GranelSlidoeCargaGeral_70 = format_GranelSlidoeCargaGeral_70.readFeatures(json_GranelSlidoeCargaGeral_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranelSlidoeCargaGeral_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoeCargaGeral_70.addFeatures(features_GranelSlidoeCargaGeral_70);
var lyr_GranelSlidoeCargaGeral_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoeCargaGeral_70, 
                style: style_GranelSlidoeCargaGeral_70,
                popuplayertitle: 'Granel Sólido e Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoeCargaGeral_70.png" /> Granel Sólido e Carga Geral'
            });
var format_AcessodeUsoComum_71 = new ol.format.GeoJSON();
var features_AcessodeUsoComum_71 = format_AcessodeUsoComum_71.readFeatures(json_AcessodeUsoComum_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessodeUsoComum_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessodeUsoComum_71.addFeatures(features_AcessodeUsoComum_71);
var lyr_AcessodeUsoComum_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessodeUsoComum_71, 
                style: style_AcessodeUsoComum_71,
                popuplayertitle: 'Acesso de Uso Comum',
                interactive: true,
                title: '<img src="styles/legend/AcessodeUsoComum_71.png" /> Acesso de Uso Comum'
            });
var format_GranelSlidoVegetal_72 = new ol.format.GeoJSON();
var features_GranelSlidoVegetal_72 = format_GranelSlidoVegetal_72.readFeatures(json_GranelSlidoVegetal_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranelSlidoVegetal_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoVegetal_72.addFeatures(features_GranelSlidoVegetal_72);
var lyr_GranelSlidoVegetal_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoVegetal_72, 
                style: style_GranelSlidoVegetal_72,
                popuplayertitle: 'Granel Sólido Vegetal ',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoVegetal_72.png" /> Granel Sólido Vegetal '
            });
var format_ApoioOperacional_73 = new ol.format.GeoJSON();
var features_ApoioOperacional_73 = format_ApoioOperacional_73.readFeatures(json_ApoioOperacional_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ApoioOperacional_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApoioOperacional_73.addFeatures(features_ApoioOperacional_73);
var lyr_ApoioOperacional_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApoioOperacional_73, 
                style: style_ApoioOperacional_73,
                popuplayertitle: 'Apoio Operacional',
                interactive: true,
                title: '<img src="styles/legend/ApoioOperacional_73.png" /> Apoio Operacional'
            });
var format_Multipropsito_74 = new ol.format.GeoJSON();
var features_Multipropsito_74 = format_Multipropsito_74.readFeatures(json_Multipropsito_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Multipropsito_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_74.addFeatures(features_Multipropsito_74);
var lyr_Multipropsito_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_74, 
                style: style_Multipropsito_74,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_74.png" /> Multipropósito'
            });
var format_GranelSlido_75 = new ol.format.GeoJSON();
var features_GranelSlido_75 = format_GranelSlido_75.readFeatures(json_GranelSlido_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranelSlido_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_75.addFeatures(features_GranelSlido_75);
var lyr_GranelSlido_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_75, 
                style: style_GranelSlido_75,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_75.png" /> Granel Sólido'
            });
var format_CargaGeral_76 = new ol.format.GeoJSON();
var features_CargaGeral_76 = format_CargaGeral_76.readFeatures(json_CargaGeral_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CargaGeral_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_76.addFeatures(features_CargaGeral_76);
var lyr_CargaGeral_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_76, 
                style: style_CargaGeral_76,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_76.png" /> Carga Geral'
            });
var format_GranelSlidoeApoioOperacional_77 = new ol.format.GeoJSON();
var features_GranelSlidoeApoioOperacional_77 = format_GranelSlidoeApoioOperacional_77.readFeatures(json_GranelSlidoeApoioOperacional_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranelSlidoeApoioOperacional_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoeApoioOperacional_77.addFeatures(features_GranelSlidoeApoioOperacional_77);
var lyr_GranelSlidoeApoioOperacional_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoeApoioOperacional_77, 
                style: style_GranelSlidoeApoioOperacional_77,
                popuplayertitle: 'Granel Sólido e Apoio Operacional',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoeApoioOperacional_77.png" /> Granel Sólido e Apoio Operacional'
            });
var format_GranelSlidoeCargaGeral_78 = new ol.format.GeoJSON();
var features_GranelSlidoeCargaGeral_78 = format_GranelSlidoeCargaGeral_78.readFeatures(json_GranelSlidoeCargaGeral_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranelSlidoeCargaGeral_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoeCargaGeral_78.addFeatures(features_GranelSlidoeCargaGeral_78);
var lyr_GranelSlidoeCargaGeral_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoeCargaGeral_78, 
                style: style_GranelSlidoeCargaGeral_78,
                popuplayertitle: 'Granel Sólido e Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoeCargaGeral_78.png" /> Granel Sólido e Carga Geral'
            });
var format_AcessodeUsoComum_79 = new ol.format.GeoJSON();
var features_AcessodeUsoComum_79 = format_AcessodeUsoComum_79.readFeatures(json_AcessodeUsoComum_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessodeUsoComum_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessodeUsoComum_79.addFeatures(features_AcessodeUsoComum_79);
var lyr_AcessodeUsoComum_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessodeUsoComum_79, 
                style: style_AcessodeUsoComum_79,
                popuplayertitle: 'Acesso de Uso Comum',
                interactive: true,
                title: '<img src="styles/legend/AcessodeUsoComum_79.png" /> Acesso de Uso Comum'
            });
var format_GranelSlidoVegetal_80 = new ol.format.GeoJSON();
var features_GranelSlidoVegetal_80 = format_GranelSlidoVegetal_80.readFeatures(json_GranelSlidoVegetal_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranelSlidoVegetal_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoVegetal_80.addFeatures(features_GranelSlidoVegetal_80);
var lyr_GranelSlidoVegetal_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoVegetal_80, 
                style: style_GranelSlidoVegetal_80,
                popuplayertitle: 'Granel Sólido Vegetal ',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoVegetal_80.png" /> Granel Sólido Vegetal '
            });
var format_ApoioOperacional_81 = new ol.format.GeoJSON();
var features_ApoioOperacional_81 = format_ApoioOperacional_81.readFeatures(json_ApoioOperacional_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ApoioOperacional_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApoioOperacional_81.addFeatures(features_ApoioOperacional_81);
var lyr_ApoioOperacional_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApoioOperacional_81, 
                style: style_ApoioOperacional_81,
                popuplayertitle: 'Apoio Operacional',
                interactive: true,
                title: '<img src="styles/legend/ApoioOperacional_81.png" /> Apoio Operacional'
            });
var format_Multipropsito_82 = new ol.format.GeoJSON();
var features_Multipropsito_82 = format_Multipropsito_82.readFeatures(json_Multipropsito_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Multipropsito_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_82.addFeatures(features_Multipropsito_82);
var lyr_Multipropsito_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_82, 
                style: style_Multipropsito_82,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_82.png" /> Multipropósito'
            });
var format_GranelSlido_83 = new ol.format.GeoJSON();
var features_GranelSlido_83 = format_GranelSlido_83.readFeatures(json_GranelSlido_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranelSlido_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlido_83.addFeatures(features_GranelSlido_83);
var lyr_GranelSlido_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlido_83, 
                style: style_GranelSlido_83,
                popuplayertitle: 'Granel Sólido',
                interactive: true,
                title: '<img src="styles/legend/GranelSlido_83.png" /> Granel Sólido'
            });
var format_CargaGeral_84 = new ol.format.GeoJSON();
var features_CargaGeral_84 = format_CargaGeral_84.readFeatures(json_CargaGeral_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CargaGeral_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_84.addFeatures(features_CargaGeral_84);
var lyr_CargaGeral_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_84, 
                style: style_CargaGeral_84,
                popuplayertitle: 'Carga Geral ',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_84.png" /> Carga Geral '
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_85 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_85 = format_reasAfetassOperaesPorturiasLongoPrazo_85.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_85.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_85);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_85, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_85,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_85.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_86 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_86 = format_reasAfetassOperaesPorturiasMdioPrazo_86.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_86.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_86);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_86, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_86,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_86.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_87 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_87 = format_reasAfetassOperaesPorturiasCurtoPrazo_87.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_87.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_87);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_87, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_87,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_87.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_88 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_88 = format_reasAfetassOperaesPorturiasSituaoAtual_88.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_88.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_88);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_88, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_88,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_88.png" /> Áreas Afetas às Operações Portuárias - Situação Atual '
            });
var format_PoligonaldareadoPortoOrganizadodePortoAlegre_89 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodePortoAlegre_89 = format_PoligonaldareadoPortoOrganizadodePortoAlegre_89.readFeatures(json_PoligonaldareadoPortoOrganizadodePortoAlegre_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoligonaldareadoPortoOrganizadodePortoAlegre_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodePortoAlegre_89.addFeatures(features_PoligonaldareadoPortoOrganizadodePortoAlegre_89);
var lyr_PoligonaldareadoPortoOrganizadodePortoAlegre_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodePortoAlegre_89, 
                style: style_PoligonaldareadoPortoOrganizadodePortoAlegre_89,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Porto Alegre',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodePortoAlegre_89.png" /> Poligonal da Área do Porto Organizado de Porto Alegre'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodePortoAlegre_89,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado'});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_85,lyr_reasAfetassOperaesPorturiasMdioPrazo_86,lyr_reasAfetassOperaesPorturiasCurtoPrazo_87,lyr_reasAfetassOperaesPorturiasSituaoAtual_88,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual = new ol.layer.Group({
                                layers: [lyr_GranelSlidoeApoioOperacional_77,lyr_GranelSlidoeCargaGeral_78,lyr_AcessodeUsoComum_79,lyr_GranelSlidoVegetal_80,lyr_ApoioOperacional_81,lyr_Multipropsito_82,lyr_GranelSlido_83,lyr_CargaGeral_84,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Situação Atual'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo = new ol.layer.Group({
                                layers: [lyr_GranelSlidoeApoioOperacional_69,lyr_GranelSlidoeCargaGeral_70,lyr_AcessodeUsoComum_71,lyr_GranelSlidoVegetal_72,lyr_ApoioOperacional_73,lyr_Multipropsito_74,lyr_GranelSlido_75,lyr_CargaGeral_76,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Curto Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo = new ol.layer.Group({
                                layers: [lyr_GranelSlidoeApoioOperacional_61,lyr_GranelSlidoeCargaGeral_62,lyr_AcessodeUsoComum_63,lyr_GranelSlidoVegetal_64,lyr_ApoioOperacional_65,lyr_Multipropsito_66,lyr_GranelSlido_67,lyr_CargaGeral_68,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Médio Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo = new ol.layer.Group({
                                layers: [lyr_GranelSlidoeApoioOperacional_53,lyr_GranelSlidoeCargaGeral_54,lyr_AcessodeUsoComum_55,lyr_GranelSlidoVegetal_56,lyr_ApoioOperacional_57,lyr_Multipropsito_58,lyr_GranelSlido_59,lyr_CargaGeral_60,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Longo Prazo'});
var group_reasAfetassOperaesPorturiasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49,lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50,lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51,lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Arrendadas '});
var group_reasAfetassOperaesPorturiasArrendadasdeUsoPblico = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoLongoPrazo_45,lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoMdioPrazo_46,lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoCurtoPrazo_47,lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoSituaoAtual_48,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Arrendadas de Uso Público'});
var group_reasAfetassOperaesPorturiasDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_41,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_42,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_43,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_44,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_37,lyr_ArmazenagemMdioPrazo_38,lyr_ArmazenagemCurtoPrazo_39,lyr_ArmazenagemSituaoAtual_40,],
                                fold: 'open',
                                title: 'Armazenagem'});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_33,lyr_AcostagemMdioPrazo_34,lyr_AcostagemCurtoPrazo_35,lyr_AcostagemSituaoAtual_36,],
                                fold: 'open',
                                title: 'Acostagem'});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_29,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_30,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_31,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_32,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias '});
var group_reasNoAfetassOperaesPorturiasemExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_25,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_26,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_28,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta '});
var group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta '});
var group_reaseInstalaesAlfandegadas = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadas_20,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas '});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_19,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos '});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternosLongoPrazo_15,lyr_AcessosRodoviriosInternosMdioPrazo_16,lyr_AcessosRodoviriosInternosCurtoPrazo_17,lyr_AcessosRodoviriosInternosSituaoAtual_18,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos '});
var group_AcessosFerroviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosExternos_14,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Externos '});
var group_AcessosHidroviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosHidroviriosExternos_13,],
                                fold: 'open',
                                title: 'Acessos Hidroviários Externos '});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_9,lyr_CanaisdeAcessoMdioPrazo_10,lyr_CanaisdeAcessoCurtoPrazo_11,lyr_CanaisdeAcessoSituaoAtual_12,],
                                fold: 'open',
                                title: 'Canais de Acesso '});
var group_BaciasdeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciasdeEvoluoLongoPrazo_5,lyr_BaciasdeEvoluoMdioPrazo_6,lyr_BaciasdeEvoluoCurtoPrazo_7,lyr_BaciasdeEvoluoSituaoAtual_8,],
                                fold: 'open',
                                title: 'Bacias de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_1,lyr_FundeadourosMdioPrazo_2,lyr_FundeadourosCurtoPrazo_3,lyr_FundeadourosSituaoAtual_4,],
                                fold: 'open',
                                title: 'Fundeadouros '});

lyr_EsriImagery_0.setVisible(true);lyr_FundeadourosLongoPrazo_1.setVisible(false);lyr_FundeadourosMdioPrazo_2.setVisible(false);lyr_FundeadourosCurtoPrazo_3.setVisible(false);lyr_FundeadourosSituaoAtual_4.setVisible(false);lyr_BaciasdeEvoluoLongoPrazo_5.setVisible(false);lyr_BaciasdeEvoluoMdioPrazo_6.setVisible(false);lyr_BaciasdeEvoluoCurtoPrazo_7.setVisible(false);lyr_BaciasdeEvoluoSituaoAtual_8.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_9.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_10.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_11.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_12.setVisible(false);lyr_AcessosHidroviriosExternos_13.setVisible(false);lyr_AcessosFerroviriosExternos_14.setVisible(false);lyr_AcessosRodoviriosInternosLongoPrazo_15.setVisible(false);lyr_AcessosRodoviriosInternosMdioPrazo_16.setVisible(false);lyr_AcessosRodoviriosInternosCurtoPrazo_17.setVisible(false);lyr_AcessosRodoviriosInternosSituaoAtual_18.setVisible(false);lyr_AcessosRodoviriosExternos_19.setVisible(false);lyr_reaseInstalaesAlfandegadas_20.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_25.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_26.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_28.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_29.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_30.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_31.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_32.setVisible(false);lyr_AcostagemLongoPrazo_33.setVisible(false);lyr_AcostagemMdioPrazo_34.setVisible(false);lyr_AcostagemCurtoPrazo_35.setVisible(false);lyr_AcostagemSituaoAtual_36.setVisible(false);lyr_ArmazenagemLongoPrazo_37.setVisible(false);lyr_ArmazenagemMdioPrazo_38.setVisible(false);lyr_ArmazenagemCurtoPrazo_39.setVisible(false);lyr_ArmazenagemSituaoAtual_40.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_41.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_42.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_43.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_44.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoLongoPrazo_45.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoMdioPrazo_46.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoCurtoPrazo_47.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoSituaoAtual_48.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52.setVisible(false);lyr_GranelSlidoeApoioOperacional_53.setVisible(false);lyr_GranelSlidoeCargaGeral_54.setVisible(false);lyr_AcessodeUsoComum_55.setVisible(false);lyr_GranelSlidoVegetal_56.setVisible(false);lyr_ApoioOperacional_57.setVisible(false);lyr_Multipropsito_58.setVisible(false);lyr_GranelSlido_59.setVisible(false);lyr_CargaGeral_60.setVisible(false);lyr_GranelSlidoeApoioOperacional_61.setVisible(false);lyr_GranelSlidoeCargaGeral_62.setVisible(false);lyr_AcessodeUsoComum_63.setVisible(false);lyr_GranelSlidoVegetal_64.setVisible(false);lyr_ApoioOperacional_65.setVisible(false);lyr_Multipropsito_66.setVisible(false);lyr_GranelSlido_67.setVisible(false);lyr_CargaGeral_68.setVisible(false);lyr_GranelSlidoeApoioOperacional_69.setVisible(false);lyr_GranelSlidoeCargaGeral_70.setVisible(false);lyr_AcessodeUsoComum_71.setVisible(false);lyr_GranelSlidoVegetal_72.setVisible(false);lyr_ApoioOperacional_73.setVisible(false);lyr_Multipropsito_74.setVisible(false);lyr_GranelSlido_75.setVisible(false);lyr_CargaGeral_76.setVisible(false);lyr_GranelSlidoeApoioOperacional_77.setVisible(false);lyr_GranelSlidoeCargaGeral_78.setVisible(false);lyr_AcessodeUsoComum_79.setVisible(false);lyr_GranelSlidoVegetal_80.setVisible(false);lyr_ApoioOperacional_81.setVisible(false);lyr_Multipropsito_82.setVisible(false);lyr_GranelSlido_83.setVisible(false);lyr_CargaGeral_84.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_85.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_86.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_87.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_88.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodePortoAlegre_89.setVisible(true);
var layersList = [lyr_EsriImagery_0,group_Fundeadouros,group_BaciasdeEvoluo,group_CanaisdeAcesso,group_AcessosHidroviriosExternos,group_AcessosFerroviriosExternos,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_reaseInstalaesAlfandegadas,group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta,group_reasNoAfetassOperaesPorturiasemExploraoIndireta,group_reasNoAfetassOperaesPorturias,group_Acostagem,group_Armazenagem,group_reasAfetassOperaesPorturiasDisponveisparaArrendamento,group_reasAfetassOperaesPorturiasArrendadasdeUsoPblico,group_reasAfetassOperaesPorturiasArrendadas,group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual,group_reasAfetassOperaesPorturias,group_PoligonaldareadoPortoOrganizado];
lyr_FundeadourosLongoPrazo_1.set('fieldAliases', {'NOME': 'Nome', 'FUNÇÃO': 'Função', 'N. Ident.': 'Identificação ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosMdioPrazo_2.set('fieldAliases', {'NOME': 'Nome', 'FUNÇÃO': 'Função', 'N. Ident.': 'Identificação ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosCurtoPrazo_3.set('fieldAliases', {'NOME': 'Nome', 'FUNÇÃO': 'Função', 'N. Ident.': 'Identificação ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosSituaoAtual_4.set('fieldAliases', {'NOME': 'Nome', 'FUNÇÃO': 'Função', 'N. Ident.': 'Identificação ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoLongoPrazo_5.set('fieldAliases', {'Nome': 'Nome', 'FUNÇÃO': 'Função', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoMdioPrazo_6.set('fieldAliases', {'Nome': 'Nome', 'FUNÇÃO': 'Função', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoCurtoPrazo_7.set('fieldAliases', {'Nome': 'Nome', 'FUNÇÃO': 'Função', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoSituaoAtual_8.set('fieldAliases', {'Nome': 'Nome', 'FUNÇÃO': 'Função', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoLongoPrazo_9.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoMdioPrazo_10.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoCurtoPrazo_11.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoSituaoAtual_12.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_AcessosHidroviriosExternos_13.set('fieldAliases', {'Nome_': 'Nome', 'Calado': 'Calado (m) ', 'Atual.': 'Atualização ', });
lyr_AcessosFerroviriosExternos_14.set('fieldAliases', {'LINHA': 'LINHA', 'Operador': 'Operador', 'Trecho': 'Trecho', 'Descricao': 'Descrição ', });
lyr_AcessosRodoviriosInternosLongoPrazo_15.set('fieldAliases', {'NOME': 'Nome', 'Ident.': 'Identificação ', 'Nº  Pista': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosMdioPrazo_16.set('fieldAliases', {'NOME': 'Nome', 'Ident.': 'Identificação ', 'Nº  Pista': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosCurtoPrazo_17.set('fieldAliases', {'NOME': 'Nome', 'Ident.': 'Identificação ', 'Nº  Pista': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosSituaoAtual_18.set('fieldAliases', {'NOME': 'Nome', 'Ident.': 'Identificação ', 'Nº  Pista': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosExternos_19.set('fieldAliases', {'Nome': 'Nome', 'SIGLA': 'Sigla', 'Jurisdicao': 'Jurisdição ', });
lyr_reaseInstalaesAlfandegadas_20.set('fieldAliases', {'Marco Lega': 'Instrumento Legal', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21.set('fieldAliases', {'Nome': 'Nome', 'Área m²': 'Área (m²) ', 'T. Explo.': 'Tipo de Exploração ', 'Util. áre': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22.set('fieldAliases', {'Nome': 'Nome', 'Área m²': 'Área (m²) ', 'T. Explo.': 'Tipo de Exploração ', 'Util. áre': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23.set('fieldAliases', {'Nome': 'Nome', 'Área m²': 'Área (m²) ', 'T. Explo.': 'Tipo de Exploração ', 'Util. áre': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24.set('fieldAliases', {'Nome': 'Nome', 'Área m²': 'Área (m²) ', 'T. Explo.': 'Tipo de Exploração ', 'Util. áre': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_25.set('fieldAliases', {'Nome': 'Nome', 'T. Cessão': 'Tipo de Cessão ', 'Respons.': 'Responsável ', 'Área': 'Área (m²) ', 'D. Inicio': 'Data de Início do Contrato ', 'D. Term.': 'Data de Término do Contrato ', 'A. Desenv.': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_26.set('fieldAliases', {'Nome': 'Nome', 'T. Cessão': 'Tipo de Cessão ', 'Respons.': 'Responsável ', 'Área': 'Área (m²) ', 'D. Inicio': 'Data de Início do Contrato ', 'D. Term.': 'Data de Término do Contrato ', 'A. Desenv.': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27.set('fieldAliases', {'Nome': 'Nome', 'T. Cessão': 'Tipo de Cessão ', 'Respons.': 'Responsável ', 'Área': 'Área (m²) ', 'D. Inicio': 'Data de Início do Contrato ', 'D. Term.': 'Data de Término do Contrato ', 'A. Desenv.': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_28.set('fieldAliases', {'Nome': 'Nome', 'T. Cessão': 'Tipo de Cessão ', 'Respons.': 'Responsável ', 'Área': 'Área (m²) ', 'D. Inicio': 'Data de Início do Contrato ', 'D. Term.': 'Data de Término do Contrato ', 'A. Desenv.': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_29.set('fieldAliases', {'Nome': 'Nome', 'Nº da ar': 'Nº da ar', 'Dest.': 'Dest.', 'Área m²': 'Área m²', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_30.set('fieldAliases', {'Nome': 'Nome', 'Nº da ar': 'Nº da ar', 'Dest.': 'Dest.', 'Área m²': 'Área m²', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_31.set('fieldAliases', {'Nome': 'Nome', 'Nº da ar': 'Nº da ar', 'Dest.': 'Dest.', 'Área m²': 'Área m²', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_32.set('fieldAliases', {'Nome': 'Nome', 'Nº da ar': 'Nº da ar', 'Dest.': 'Dest.', 'Área m²': 'Área m²', });
lyr_AcostagemLongoPrazo_33.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp. m': 'Comprimento (m) ', 'Profund. m': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemMdioPrazo_34.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp. m': 'Comprimento (m) ', 'Profund. m': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemCurtoPrazo_35.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp. m': 'Comprimento (m) ', 'Profund. m': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemSituaoAtual_36.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp. m': 'Comprimento (m) ', 'Profund. m': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_ArmazenagemLongoPrazo_37.set('fieldAliases', {'Nome': 'Nome', 'Capac. (t)': 'Capacidade ', 'Área m²': 'Área (m²) ', 'Volume m³': 'Volume (m³) ', 'T. Instal.': 'Tipo da Instalação ', });
lyr_ArmazenagemMdioPrazo_38.set('fieldAliases', {'Nome': 'Nome', 'Capac. (t)': 'Capacidade ', 'Área m²': 'Área (m²) ', 'Volume m³': 'Volume (m³) ', 'T. Instal.': 'Tipo da Instalação ', });
lyr_ArmazenagemCurtoPrazo_39.set('fieldAliases', {'Nome': 'Nome', 'Capac. (t)': 'Capacidade ', 'Área m²': 'Área (m²) ', 'Volume m³': 'Volume (m³) ', 'T. Instal.': 'Tipo da Instalação ', });
lyr_ArmazenagemSituaoAtual_40.set('fieldAliases', {'Nome': 'Nome', 'Capac. (t)': 'Capacidade ', 'Área m²': 'Área (m²) ', 'Volume m³': 'Volume (m³) ', 'T. Instal.': 'Tipo da Instalação ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_41.set('fieldAliases', {'Nome': 'Nome', 'Nome_': 'Tipo de Instalação ', 'Perfil': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_42.set('fieldAliases', {'Nome': 'Nome', 'Nome_': 'Tipo de Instalação ', 'Perfil': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_43.set('fieldAliases', {'Nome': 'Nome', 'Nome_': 'Tipo de Instalação ', 'Perfil': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_44.set('fieldAliases', {'Nome': 'Nome', 'Nome_': 'Tipo de Instalação ', 'Perfil': 'Perfil de Carga ', 'Área m²': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoLongoPrazo_45.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', 'Área': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoMdioPrazo_46.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', 'Área': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoCurtoPrazo_47.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', 'Área': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoSituaoAtual_48.set('fieldAliases', {'Nome': 'Nome', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', 'Área': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49.set('fieldAliases', {'Arrend.': 'Arrendatário ', 'Nº Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P. Prorrog': 'Possibilidade de Prorrogação', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50.set('fieldAliases', {'Arrend.': 'Arrendatário ', 'Nº Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P. Prorrog': 'Possibilidade de Prorrogação', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51.set('fieldAliases', {'Arrend.': 'Arrendatário ', 'Nº Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P. Prorrog': 'Possibilidade de Prorrogação', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'Nome': 'Nome', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52.set('fieldAliases', {'Arrend.': 'Arrendatário ', 'Nº Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P. Prorrog': 'Possibilidade de Prorrogação', 'Perfil': 'Perfil de Carga ', 'Área': 'Área (m²) ', 'Nome': 'Nome', });
lyr_GranelSlidoeApoioOperacional_53.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_GranelSlidoeCargaGeral_54.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_AcessodeUsoComum_55.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_GranelSlidoVegetal_56.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_ApoioOperacional_57.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_Multipropsito_58.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_GranelSlido_59.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_CargaGeral_60.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_GranelSlidoeApoioOperacional_61.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_GranelSlidoeCargaGeral_62.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_AcessodeUsoComum_63.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_GranelSlidoVegetal_64.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_ApoioOperacional_65.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_Multipropsito_66.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_GranelSlido_67.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_CargaGeral_68.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_GranelSlidoeApoioOperacional_69.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_GranelSlidoeCargaGeral_70.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_AcessodeUsoComum_71.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_GranelSlidoVegetal_72.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_ApoioOperacional_73.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_Multipropsito_74.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_GranelSlido_75.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_CargaGeral_76.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_GranelSlidoeApoioOperacional_77.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_GranelSlidoeCargaGeral_78.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_AcessodeUsoComum_79.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_GranelSlidoVegetal_80.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_ApoioOperacional_81.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_Multipropsito_82.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_GranelSlido_83.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_CargaGeral_84.set('fieldAliases', {'Nome': 'Nome', 'Perfil de': 'Perfil de Carga', 'Tipo de In': 'Tipo de Instalação ', 'Área (m²': 'Área (m²)', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_85.set('fieldAliases', {'Nome_': 'Nome ', 'Perfil': 'Perfil de Carga ', 'T. Inst.': 'Tipo de Instalação ', 'Área m²': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_86.set('fieldAliases', {'Nome_': 'Nome ', 'Perfil': 'Perfil de Carga ', 'T. Inst.': 'Tipo de Instalação ', 'Área m²': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_87.set('fieldAliases', {'Nome_': 'Nome ', 'Perfil': 'Perfil de Carga ', 'T. Inst.': 'Tipo de Instalação ', 'Área m²': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_88.set('fieldAliases', {'Nome_': 'Nome ', 'Perfil': 'Perfil de Carga ', 'T. Inst.': 'Tipo de Instalação ', 'Área m²': 'Área (m²) ', });
lyr_PoligonaldareadoPortoOrganizadodePortoAlegre_89.set('fieldAliases', {'Ins. Legal': 'Instrumento Legal', 'Anexo': 'Anexo', });
lyr_FundeadourosLongoPrazo_1.set('fieldImages', {'NOME': '', 'FUNÇÃO': '', 'N. Ident.': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosMdioPrazo_2.set('fieldImages', {'NOME': '', 'FUNÇÃO': '', 'N. Ident.': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosCurtoPrazo_3.set('fieldImages', {'NOME': '', 'FUNÇÃO': '', 'N. Ident.': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosSituaoAtual_4.set('fieldImages', {'NOME': 'TextEdit', 'FUNÇÃO': 'TextEdit', 'N. Ident.': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoLongoPrazo_5.set('fieldImages', {'Nome': '', 'FUNÇÃO': '', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoMdioPrazo_6.set('fieldImages', {'Nome': '', 'FUNÇÃO': '', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoCurtoPrazo_7.set('fieldImages', {'Nome': '', 'FUNÇÃO': '', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoSituaoAtual_8.set('fieldImages', {'Nome': 'TextEdit', 'FUNÇÃO': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_9.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_10.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_11.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_12.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_AcessosHidroviriosExternos_13.set('fieldImages', {'Nome_': 'TextEdit', 'Calado': 'TextEdit', 'Atual.': 'DateTime', });
lyr_AcessosFerroviriosExternos_14.set('fieldImages', {'LINHA': 'TextEdit', 'Operador': 'TextEdit', 'Trecho': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_AcessosRodoviriosInternosLongoPrazo_15.set('fieldImages', {'NOME': '', 'Ident.': 'TextEdit', 'Nº  Pista': '', });
lyr_AcessosRodoviriosInternosMdioPrazo_16.set('fieldImages', {'NOME': '', 'Ident.': 'TextEdit', 'Nº  Pista': '', });
lyr_AcessosRodoviriosInternosCurtoPrazo_17.set('fieldImages', {'NOME': '', 'Ident.': 'TextEdit', 'Nº  Pista': '', });
lyr_AcessosRodoviriosInternosSituaoAtual_18.set('fieldImages', {'NOME': 'TextEdit', 'Ident.': 'TextEdit', 'Nº  Pista': 'TextEdit', });
lyr_AcessosRodoviriosExternos_19.set('fieldImages', {'Nome': 'TextEdit', 'SIGLA': 'TextEdit', 'Jurisdicao': 'TextEdit', });
lyr_reaseInstalaesAlfandegadas_20.set('fieldImages', {'Marco Lega': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21.set('fieldImages', {'Nome': 'TextEdit', 'Área m²': 'TextEdit', 'T. Explo.': 'TextEdit', 'Util. áre': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22.set('fieldImages', {'Nome': 'TextEdit', 'Área m²': 'TextEdit', 'T. Explo.': 'TextEdit', 'Util. áre': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23.set('fieldImages', {'Nome': 'TextEdit', 'Área m²': 'TextEdit', 'T. Explo.': 'TextEdit', 'Util. áre': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24.set('fieldImages', {'Nome': 'TextEdit', 'Área m²': 'TextEdit', 'T. Explo.': 'TextEdit', 'Util. áre': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_25.set('fieldImages', {'Nome': 'TextEdit', 'T. Cessão': '', 'Respons.': 'TextEdit', 'Área': '', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'A. Desenv.': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_26.set('fieldImages', {'Nome': 'TextEdit', 'T. Cessão': '', 'Respons.': 'TextEdit', 'Área': '', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'A. Desenv.': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27.set('fieldImages', {'Nome': 'TextEdit', 'T. Cessão': '', 'Respons.': 'TextEdit', 'Área': '', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'A. Desenv.': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_28.set('fieldImages', {'Nome': 'TextEdit', 'T. Cessão': 'TextEdit', 'Respons.': 'TextEdit', 'Área': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'A. Desenv.': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_29.set('fieldImages', {'Nome': 'TextEdit', 'Nº da ar': '', 'Dest.': '', 'Área m²': '', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_30.set('fieldImages', {'Nome': 'TextEdit', 'Nº da ar': '', 'Dest.': '', 'Área m²': '', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_31.set('fieldImages', {'Nome': 'TextEdit', 'Nº da ar': '', 'Dest.': '', 'Área m²': '', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_32.set('fieldImages', {'Nome': 'TextEdit', 'Nº da ar': '', 'Dest.': '', 'Área m²': '', });
lyr_AcostagemLongoPrazo_33.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp. m': '', 'Profund. m': '', 'Calado': 'TextEdit', 'Per. Carga': '', });
lyr_AcostagemMdioPrazo_34.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp. m': '', 'Profund. m': '', 'Calado': 'TextEdit', 'Per. Carga': '', });
lyr_AcostagemCurtoPrazo_35.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp. m': '', 'Profund. m': '', 'Calado': 'TextEdit', 'Per. Carga': '', });
lyr_AcostagemSituaoAtual_36.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp. m': 'TextEdit', 'Profund. m': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_37.set('fieldImages', {'Nome': 'TextEdit', 'Capac. (t)': 'TextEdit', 'Área m²': 'TextEdit', 'Volume m³': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_38.set('fieldImages', {'Nome': 'TextEdit', 'Capac. (t)': 'TextEdit', 'Área m²': 'TextEdit', 'Volume m³': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_39.set('fieldImages', {'Nome': 'TextEdit', 'Capac. (t)': 'TextEdit', 'Área m²': 'TextEdit', 'Volume m³': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_40.set('fieldImages', {'Nome': 'TextEdit', 'Capac. (t)': 'TextEdit', 'Área m²': 'TextEdit', 'Volume m³': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_41.set('fieldImages', {'Nome': 'TextEdit', 'Nome_': '', 'Perfil': 'TextEdit', 'Área m²': '', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_42.set('fieldImages', {'Nome': 'TextEdit', 'Nome_': '', 'Perfil': 'TextEdit', 'Área m²': '', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_43.set('fieldImages', {'Nome': 'TextEdit', 'Nome_': '', 'Perfil': 'TextEdit', 'Área m²': '', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_44.set('fieldImages', {'Nome': 'TextEdit', 'Nome_': 'TextEdit', 'Perfil': 'TextEdit', 'Área m²': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoLongoPrazo_45.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoMdioPrazo_46.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoCurtoPrazo_47.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoSituaoAtual_48.set('fieldImages', {'Nome': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', 'Área': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49.set('fieldImages', {'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50.set('fieldImages', {'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51.set('fieldImages', {'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52.set('fieldImages', {'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Área': 'TextEdit', 'Nome': 'TextEdit', });
lyr_GranelSlidoeApoioOperacional_53.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlidoeCargaGeral_54.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_AcessodeUsoComum_55.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlidoVegetal_56.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_ApoioOperacional_57.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_Multipropsito_58.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlido_59.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_CargaGeral_60.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlidoeApoioOperacional_61.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlidoeCargaGeral_62.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_AcessodeUsoComum_63.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlidoVegetal_64.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_ApoioOperacional_65.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_Multipropsito_66.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlido_67.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_CargaGeral_68.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlidoeApoioOperacional_69.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlidoeCargaGeral_70.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_AcessodeUsoComum_71.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlidoVegetal_72.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_ApoioOperacional_73.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_Multipropsito_74.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlido_75.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_CargaGeral_76.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlidoeApoioOperacional_77.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlidoeCargaGeral_78.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_AcessodeUsoComum_79.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlidoVegetal_80.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_ApoioOperacional_81.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_Multipropsito_82.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_GranelSlido_83.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_CargaGeral_84.set('fieldImages', {'Nome': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', 'Área (m²': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_85.set('fieldImages', {'Nome_': 'TextEdit', 'Perfil': 'TextEdit', 'T. Inst.': 'TextEdit', 'Área m²': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_86.set('fieldImages', {'Nome_': 'TextEdit', 'Perfil': 'TextEdit', 'T. Inst.': 'TextEdit', 'Área m²': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_87.set('fieldImages', {'Nome_': 'TextEdit', 'Perfil': 'TextEdit', 'T. Inst.': 'TextEdit', 'Área m²': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_88.set('fieldImages', {'Nome_': 'TextEdit', 'Perfil': 'TextEdit', 'T. Inst.': 'TextEdit', 'Área m²': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodePortoAlegre_89.set('fieldImages', {'Ins. Legal': 'TextEdit', 'Anexo': 'TextEdit', });
lyr_FundeadourosLongoPrazo_1.set('fieldLabels', {'NOME': 'inline label - visible with data', 'FUNÇÃO': 'inline label - visible with data', 'N. Ident.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_2.set('fieldLabels', {'NOME': 'inline label - visible with data', 'FUNÇÃO': 'inline label - visible with data', 'N. Ident.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_3.set('fieldLabels', {'NOME': 'inline label - visible with data', 'FUNÇÃO': 'inline label - visible with data', 'N. Ident.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_4.set('fieldLabels', {'NOME': 'inline label - visible with data', 'FUNÇÃO': 'inline label - visible with data', 'N. Ident.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoLongoPrazo_5.set('fieldLabels', {'Nome': 'inline label - visible with data', 'FUNÇÃO': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoMdioPrazo_6.set('fieldLabels', {'Nome': 'inline label - visible with data', 'FUNÇÃO': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoCurtoPrazo_7.set('fieldLabels', {'Nome': 'inline label - visible with data', 'FUNÇÃO': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoSituaoAtual_8.set('fieldLabels', {'Nome': 'inline label - visible with data', 'FUNÇÃO': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_9.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_10.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_11.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_12.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_AcessosHidroviriosExternos_13.set('fieldLabels', {'Nome_': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Atual.': 'inline label - visible with data', });
lyr_AcessosFerroviriosExternos_14.set('fieldLabels', {'LINHA': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Trecho': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosLongoPrazo_15.set('fieldLabels', {'NOME': 'inline label - visible with data', 'Ident.': 'inline label - visible with data', 'Nº  Pista': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosMdioPrazo_16.set('fieldLabels', {'NOME': 'inline label - visible with data', 'Ident.': 'inline label - visible with data', 'Nº  Pista': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosCurtoPrazo_17.set('fieldLabels', {'NOME': 'inline label - visible with data', 'Ident.': 'inline label - visible with data', 'Nº  Pista': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosSituaoAtual_18.set('fieldLabels', {'NOME': 'inline label - visible with data', 'Ident.': 'inline label - visible with data', 'Nº  Pista': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_19.set('fieldLabels', {'Nome': 'inline label - visible with data', 'SIGLA': 'inline label - visible with data', 'Jurisdicao': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadas_20.set('fieldLabels', {'Marco Lega': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_21.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T. Explo.': 'inline label - visible with data', 'Util. áre': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_22.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T. Explo.': 'inline label - visible with data', 'Util. áre': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_23.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T. Explo.': 'inline label - visible with data', 'Util. áre': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_24.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'T. Explo.': 'inline label - visible with data', 'Util. áre': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_25.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Cessão': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'A. Desenv.': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_26.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Cessão': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'A. Desenv.': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_27.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Cessão': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'A. Desenv.': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_28.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Cessão': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'A. Desenv.': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_29.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Nº da ar': 'inline label - visible with data', 'Dest.': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_30.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Nº da ar': 'inline label - visible with data', 'Dest.': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_31.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Nº da ar': 'inline label - visible with data', 'Dest.': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_32.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Nº da ar': 'inline label - visible with data', 'Dest.': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_33.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp. m': 'inline label - visible with data', 'Profund. m': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_34.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp. m': 'inline label - visible with data', 'Profund. m': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_35.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp. m': 'inline label - visible with data', 'Profund. m': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_36.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp. m': 'inline label - visible with data', 'Profund. m': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_37.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Capac. (t)': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'Volume m³': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_38.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Capac. (t)': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'Volume m³': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_39.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Capac. (t)': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'Volume m³': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_40.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Capac. (t)': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', 'Volume m³': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_41.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Nome_': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_42.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Nome_': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_43.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Nome_': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_44.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Nome_': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoLongoPrazo_45.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoMdioPrazo_46.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoCurtoPrazo_47.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasdeUsoPblicoSituaoAtual_48.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_49.set('fieldLabels', {'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_50.set('fieldLabels', {'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_51.set('fieldLabels', {'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_52.set('fieldLabels', {'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_GranelSlidoeApoioOperacional_53.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlidoeCargaGeral_54.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_AcessodeUsoComum_55.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlidoVegetal_56.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_ApoioOperacional_57.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_Multipropsito_58.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlido_59.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_CargaGeral_60.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlidoeApoioOperacional_61.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlidoeCargaGeral_62.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_AcessodeUsoComum_63.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlidoVegetal_64.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_ApoioOperacional_65.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_Multipropsito_66.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlido_67.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_CargaGeral_68.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlidoeApoioOperacional_69.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlidoeCargaGeral_70.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_AcessodeUsoComum_71.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlidoVegetal_72.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_ApoioOperacional_73.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_Multipropsito_74.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlido_75.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_CargaGeral_76.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlidoeApoioOperacional_77.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlidoeCargaGeral_78.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_AcessodeUsoComum_79.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlidoVegetal_80.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_ApoioOperacional_81.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_Multipropsito_82.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_GranelSlido_83.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_CargaGeral_84.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_85.set('fieldLabels', {'Nome_': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Inst.': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_86.set('fieldLabels', {'Nome_': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Inst.': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_87.set('fieldLabels', {'Nome_': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Inst.': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_88.set('fieldLabels', {'Nome_': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Inst.': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodePortoAlegre_89.set('fieldLabels', {'Ins. Legal': 'inline label - visible with data', 'Anexo': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodePortoAlegre_89.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});