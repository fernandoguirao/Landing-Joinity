// Generated by CoffeeScript 1.6.3
(function() {
  var $j;

  $j = jQuery;

  $j(function() {
    if ($j('.selectpicker').length > 0) {
      $j('.selectpicker').selectpicker();
    }
    return $j().ready(function() {
      var dajBuscador, dajBuscadorAficiones, dajBuscadorHoteles, dajBuscadorParticipantes, dajBuscadorRegalos, dajBuscadorRestaurantes, dajBuscadorUsuarios, popupfooter;
      if ($j('input.check').length > 0) {
        $j("input.check").prettyCheckable({
          color: "red"
        });
        $j('input.checked').each(function() {
          return $j(this).next().addClass('checked');
        });
      }
      if ($j('.datepicker').length > 0) {
        $j('.datepicker').datepicker();
      }
      if ($j('.popupfooter').length > 0) {
        popupfooter = $j('.popupfooter').html();
        $j("#buyPopup").popover({
          trigger: "click",
          html: true,
          placement: "bottom",
          content: popupfooter
        });
        $j("#buyPopup2").popover({
          trigger: "click",
          html: true,
          placement: "right",
          content: popupfooter
        });
      }
      if ($j('file-inputs').length > 0) {
        $j('input[type=file]').bootstrapFileInput();
        $j('.file-inputs').bootstrapFileInput();
      }
      dajBuscador = function(dataid) {
        return Dajaxice.buscador.buscar(carga_resultados, {
          busca: $("#buscaInput").val()
        });
      };
      dajBuscadorUsuarios = function(dataid) {
        return Dajaxice.buscador.buscar_usuarios(carga_resultados_usuarios, {
          busca: $("#buscaInput").val(),
          joinity_id: dataid
        });
      };
      dajBuscadorParticipantes = function(dataid) {
        return Dajaxice.buscador.buscar_participantes(carga_resultados_participantes, {
          busca: $("#buscaInputParticipantes").val(),
          joinity_id: dataid
        });
      };
      dajBuscadorAficiones = function(dataid) {
        return Dajaxice.buscador.buscar_aficiones(carga_resultados_aficiones, {
          busca: $("#buscaInputAficiones").val()
        });
      };
      dajBuscadorRegalos = function(dataid) {
        return Dajaxice.buscador.buscar_regalos(carga_resultados_regalos, {
          busca: $("#buscaInputRegalos").val(),
          joinity_id: dataid
        });
      };
      dajBuscadorRestaurantes = function(dataid) {
        return Dajaxice.buscador.buscar_restaurantes(carga_resultados_restaurantes, {
          busca: $("#buscaInputRestaurantes").val()
        });
      };
      dajBuscadorHoteles = function(dataid) {
        return Dajaxice.buscador.buscar_hoteles(carga_resultados_hoteles, {
          busca: $("#buscaInputHoteles").val()
        });
      };
      teclear_buscador('#search', dajBuscador);
      teclear_buscador('#modal-edita-contactos', dajBuscadorUsuarios);
      teclear_buscador('#modal-edita-aficiones', dajBuscadorAficiones);
      teclear_buscador('#modal-regalo', dajBuscadorRegalos);
      teclear_buscador('#modal-restaurante', dajBuscadorRestaurantes);
      teclear_buscador('#modal-hotel', dajBuscadorHoteles);
      return teclear_buscador('#modal-participantes', dajBuscadorParticipantes);
    });
  });

}).call(this);