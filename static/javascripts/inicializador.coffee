# NOTA: Recuerda inicializar sólo en las páginas pertinentes los plugins
$j = jQuery

$j ->

  # SELECT
  if $j('.selectpicker').length > 0
    $j('.selectpicker').selectpicker()

  $j().ready ->
 
    # CHECKBOXES
    if $j('input.check').length > 0
      $j("input.check").prettyCheckable color: "red"
      $j('input.checked').each ->
        $j(this).next().addClass('checked')
      
    # DATEPICKER
    if $j('.datepicker').length > 0
      $j('.datepicker').datepicker()
    
    # POPUPS
    if $j('.popupfooter').length > 0
      popupfooter = $j('.popupfooter').html()
  
      $j("#buyPopup").popover
        trigger: "click"
        html: true
        placement: "bottom"
        content: popupfooter
      
      $j("#buyPopup2").popover
        trigger: "click"
        html: true
        placement: "right"
        content: popupfooter
      
    # FILE INPUT
    if $j('file-inputs').length > 0
      $j('input[type=file]').bootstrapFileInput();
      $j('.file-inputs').bootstrapFileInput();
    
    # FUNCIONES PARA ACTIVAR BÚSQUEDA AL TECLEAR

    # 1. Funciones de dajaxice
    
    dajBuscador = (dataid) ->
      Dajaxice.buscador.buscar carga_resultados,
        busca: $("#buscaInput").val()
        
    dajBuscadorUsuarios = (dataid) ->
      Dajaxice.buscador.buscar_usuarios carga_resultados_usuarios,
        busca: $("#buscaInput").val()
        joinity_id: dataid
    dajBuscadorParticipantes = (dataid) ->
      Dajaxice.buscador.buscar_participantes carga_resultados_participantes,
        busca: $("#buscaInputParticipantes").val()
        joinity_id: dataid
    dajBuscadorAficiones = (dataid) ->
      Dajaxice.buscador.buscar_aficiones carga_resultados_aficiones,
        busca: $("#buscaInputAficiones").val()
    dajBuscadorRegalos = (dataid) ->
      Dajaxice.buscador.buscar_regalos carga_resultados_regalos,
        busca: $("#buscaInputRegalos").val()
        joinity_id: dataid
    dajBuscadorRestaurantes = (dataid) ->
      Dajaxice.buscador.buscar_restaurantes carga_resultados_restaurantes,
        busca: $("#buscaInputRestaurantes").val()
    dajBuscadorHoteles = (dataid) ->
      Dajaxice.buscador.buscar_hoteles carga_resultados_hoteles,
        busca: $("#buscaInputHoteles").val()
    
    # 2. Llamadas a función principal
    
    teclear_buscador('#search',dajBuscador)
    teclear_buscador('#modal-edita-contactos',dajBuscadorUsuarios)
    teclear_buscador('#modal-edita-aficiones',dajBuscadorAficiones)
    teclear_buscador('#modal-regalo', dajBuscadorRegalos)
    teclear_buscador('#modal-restaurante', dajBuscadorRestaurantes)
    teclear_buscador('#modal-hotel', dajBuscadorHoteles)
    teclear_buscador('#modal-participantes', dajBuscadorParticipantes)
    