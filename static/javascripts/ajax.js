

/* FUNCIONES QUE ENVÍAN MENSAJE CON LA TECLA ENTER */

var linea_chat;
var func;
var n, z;
var flag_messages=false;
funcionEnter = function(accion,target) {
  console.log("hola");
  func = new Function(accion);
  return $(window).keydown(function(event) {
    n = 0;
    if (event.keyCode === 13){
    	
    	event.preventDefault();
        console.log("despues de prevent");

	    if (!flag_messages) {
	      flag_messages=true;
	      
	      console.log(n);
	      func();
	    }
    }
    console.log("que ase");

    
  });
}

cargarOnFocus = function(){
  $('.post-write').each(function(){
      elinput = $(this).parent().parent().children('input');
      atributo = $(this).attr('onclick');
      elinput.attr('onfocus','funcionEnter("'+atributo+'",this)');
  });
}

$(document).ready(function(){
  cargarOnFocus(); 
});

/* FIN DE FUNCIONES QUE ENVÍAN CON ENTER */


hideLoader = function(targets) {
  var hijo;
  targets.children('#fadingBarsG').remove();
  hijo = targets.children('.hide-text');
  return hijo.contents().unwrap();
};
/* Cargar el preloader */
cargaPreloader = function() {
    $('.preloader').click(function() {
      /* $(this).addClass('destacado'); */
      hideLoader($('.preloader #fadingBarsG').parent());
      if ($(this).has('#fadingBarsG').length) { 
        return hideLoader($(this));
      } else {
        console.log('hola');
        $(this).wrapInner("<div class='hide-text'></div>");
        return $('.ajax-loader #fadingBarsG').clone().appendTo($(this));
      }
    });
}
cargaPreloaderTarget = function(target) {
    $(target).click(function() {
      /* $(this).addClass('destacado'); */
      hideLoader($('.preloader #fadingBarsG').parent());
      if ($(this).has('#fadingBarsG').length) { 
        return hideLoader($(this));
      } else {
        var m = 0;
        if (m === 0) {
          console.log(m);
          $(this).wrapInner("<div class='hide-text'></div>");
          $('.ajax-loader #fadingBarsG').clone().appendTo($(this));
          m = m+1;
        }
      }
    });
}


/* Incializa checkboxes */
checkboxStart = function() {
  $("input.check").prettyCheckable({
    color: "red"
  });
  $('input.checked').each(function() {
    return $(this).next().addClass('checked');
  });
}

addChecked2 = function() {
  console.log('ahora');
  $('.table-cell.primero').each(function(){
    if ($(this).children('a').hasClass('checked')) {
      $(this).removeClass('checked');
    } else {
      $(this).addClass('checked');
    }
  });
}

addChecked = function() {
  console.log('ahora');
  $('.table-cell.primero').each(function(){
    if ($(this).children('a').hasClass('checked')) {
      $(this).addClass('checked');
    } else {
      $(this).removeClass('checked');
    }
  });
}

/* Tarea check inside group */
tareaTable = function() {
  $('.clearfix.prettycheckbox').each(function(){
    $(this).prepend('<div class="table-cell primero"></div>');
    $('.table-cell',this).prepend($(this).children('input'));
    $('.table-cell',this).prepend($(this).children('a'));
    $(this).children('input').remove();
    $(this).children('a').remove();
    $(this).children('label').addClass('table-cell');
    $(this).addClass('table-row');
    
  });
}

/* Donut */
donutfunction = function() {
    var delay, timer;
    $(".azul .donutchart").donutchart();
    $(".rojo .donutchart").donutchart({
      bgColor: "#aa252b"
    });
    $(".verde .donutchart").donutchart({
      bgColor: "#08705b"
    });
    timer = void 0;
    delay = 400;
    return $(".joinity-thumb").hover((function() {
      var donut;
      donut = $(".donutchart", this);
      donut.stop().donutchart("stopanimate");
      return timer = setTimeout(function() {
        return donut.stop().donutchart("animate");
      }, delay);
    }), function() {
      return clearTimeout(timer);
    });
  };
/* Mostrar info de tareas */
showInfoTasks = function() {
  task = $('li.task');
  userTask = $('.asignada');
  timer = void 0;
  delay = 200;
  task.hover((function() {
    var etask;
    etask = $(this);
    return timer = setTimeout(function() {
      return etask.find(userTask).addClass('show');
    }, delay);
  }), function() {
    clearTimeout(timer);
    return userTask.removeClass('show');
  });
}

showPop = function (target) {
  $(target).next().next().css({"display":"inherit"});
}
cancelPop = function (target) {
  $(target).parent().parent().parent().css({"display":"none"});
}
/* FIN DE FUNCIONES GENÉRICAS */

/* FUNCIONES AJAX */
function carga_me(data){
	  /* console.log('siiiiii'); */
	    
	       
	    var contenido = $(".contenido_family");
	    n_family=data.n;
	    order_family=data.order;
	    contenido.html(data.joinitys);
	    donutfunction();
	    hideLoader($('.preloader #fadingBarsG').parent());
	}
function anyadir_categoria(data){
	Dajaxice.buscador.buscar_aficiones(carga_resultados_aficiones, {busca: $("#buscaInputAficiones").val()});
}
function eliminar_aficion(data){
	$("#lista_aficiones").html(data.salida);
}
function registro(data){
	$("#modal-gracias").html(data.salida);
	if (data.ok){
		$("#id_registro-first_name").val("");
		$("#id_registro-last_name").val("");
		$("#id_registro-username").val("");
		$("#id_registro-password1").val("");
		$("#id_registro-password2").val("");
	}
	
}
function carga_home(data){
  /* console.log('siiiiii'); */
    if (data.categoria==3){
        //if (data.n==n_aficiones && data.mas)
            /* alert("Hemos llegado al final"); */
        var contenido = $(".contenido_aficiones");
        n_aficiones=data.n;
        order_aficiones=data.order;
    }
    else if (data.categoria==1){
        //if (data.n==n_family && data.mas)
            /* alert("Hemos llegado al final"); */
        var contenido = $(".contenido_family");
        n_family=data.n;
        order_family=data.order;
    }
    else{
        //if (data.n==n_compras && data.mas)
            /* alert("Hemos llegado al final"); */
        var contenido = $(".contenido_compras");
        n_compras=data.n;
        order_compras=data.order;
    }
    if (data.mas){
        contenido.append(data.joinitys);
    }
    else{
        contenido.html(data.joinitys);
    }
    /* Borrar al unificar */
    /* Autoscroll */
    if ($(".faficiones").length > 0) {
      var offsetAfi, offsetFam, offsetCom;
      offsetAfi = $(".faficiones").offset().top;
      offsetFam = $(".fandfriends").offset().top;
      offsetCom = $(".fcompras").offset().top;
      $(".aficat").click(function() {
        return $("html,body").stop().animate({
          scrollTop: offsetAfi - 90
        }, 800);
      });
      $(".compracat").click(function() {
        return $("html,body").stop().animate({
          scrollTop: offsetCom - 90
        }, 800);
      });
      $(".famcat").click(function() {
        return $("html,body").stop().animate({
          scrollTop: offsetFam - 90
        }, 800);
      });
    }
    donutfunction();
    hideLoader($('.preloader #fadingBarsG').parent());
}

$.fn.serializeObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name]) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};

function enviar_mensaje(data){
  flag_messages=false;
  if (data.error){
    var mensajeerror = $("#error");
    mensajeerror.html(data.error);
  }
  else {
    $("#entradamensaje").val("");
    refresca_chat(conversacion=data.conversacion_id);
    hideLoader($('.preloader #fadingBarsG').parent());
    $(".write input").val("");
  }
}
function refresca_chat(conversacion){
    clearTimeout(linea_chat);
    Dajaxice.mensajes.refresca_lista(refrescar_conversaciones, {'conversacion_id':conversacion});
    cargarOnFocus();
}

function refrescar_conversaciones(data){
  var caja=$("#cajaconversaciones");
  caja.html(data.salida);
  if (conversacion!=data.abierta)clearTimeout(linea_chat);
  conversacion=data.abierta;
  $("#participante").html(data.participante);
  var timeline = $("#timeline");
  timeline.html(data.mensajes);
  linea_chat=setTimeout("refresca_chat("+data.abierta+")", 10000);
  cargaPreloader();
}

function cargar_joinitys_categoria(data){
	if(data.fin){
		$("#ver_mas_filtro").remove();
	}
	else{
		$('#ver_mas').html("Ver más");
	}
	var caja=$("#contenedor_filtro");
	var caja_categorias=$("#contenedor_subcategorias");
	var nombre_categoria=$("#nombre_categoria");
	var titulo_categoria=$("#titulo_seleccion_categorias");
	caja.html(data.salida);
	if (data.salida_categorias){
		titulo_categoria.fadeIn();
		caja_categorias.html(data.salida_categorias);
		nombre_categoria.html(data.nombre_categoria);
	}
	else{
		titulo_categoria.fadeOut();
	}
	n=data.n;
	order=data.order;
	hideLoader($('.preloader #fadingBarsG').parent());
	

}
function cargar_mas_subcategorias(data){
	var caja_categorias=$("#contenedor_subcategorias");
	caja_categorias.html(data.salida);
}
function carga_categoria(data){
  if (data.fin){
	  $('#ver_mas').remove();
  }
  else{
	  $('#ver_mas').html("Ver más");
  }
  var caja=$("#contenedor_categoria");
  
  caja.html(data.salida);
  $("#categoria_"+categoria).removeClass('activo');
  categoria=data.categoria_id;
  n_seleccion=data.n_seleccion;
  
  $("#categoria_"+categoria).addClass('activo');
  $("#n_resultados").html(data.n+" resultados en <span>"+data.nombre+"</span>");
  n_filtro=0;
  order_filtro=0;
  if (data.compra){
	  Dajaxice.categorias.carga_filtro_categoria_compra(carga_filtro_categoria, {'categoria_id':data.categoria_id, 'order':order_filtro, 'n':n_filtro});
  }
  else{
	  Dajaxice.categorias.carga_filtro_categoria(carga_filtro_categoria, {'categoria_id':data.categoria_id, 'order':order_filtro, 'n':n_filtro});
  }
}
function carga_filtro_categoria(data){
	n_filtro=data.n;
	order_filtro=data.order;
	$('#contenedor_filtro').html(data.salida);
	if (data.fin){
		$('#ver_mas_filtro').remove();
	}
	else{
		$('#ver_mas_filtro').html("Ver más");
	}
	hideLoader($('.preloader #fadingBarsG').parent());
}


function cargar_contenedor_general(data){
	$("#contenedor_general_hobbies").html(data.salida);
	cargada=false;
}

function cambia_categoria(nueva){
  $("#categoria_"+categoria).removeClass('active');
  
  categoria=nueva;
  $("#categoria_"+categoria).addClass('active');
  if (nueva==0)
	  order=2;
  else
	  order=0;
  Dajaxice.categorias.cargar_joinitys(cargar_joinitys_categoria, {"order":order, "n":0, "categoria_id":categoria});
}
function cambia_categoria_compras(nueva){
	categoria=nueva;
	Dajaxice.categorias.cargar_categoria_compra(carga_categoria, {"categoria_id":categoria});
}
function carga_blogs_subcategoria(data){
  var caja=$("#contenedor_blogs");
  caja.html(data.salida);
}
function carga_joinitys_subcategoria(data){
	var caja=$("#joinitys");
	caja.html(data.salida);
	n=data.n;
	order=data.order;
	if (data.fin){
		$("#carga_joinitys").remove();
	}
	donutfunction();
	hideLoader($('.preloader #fadingBarsG').parent());

}
/*function carga_joinitys_populares(data){
  var caja=$("#joinitys_populares");
  caja.html(data.salida);
  n_populares=data.n;
  if (data.fin){
	  $("#carga_populares").remove();
  }
  donutfunction();
}
function carga_joinitys_zona(data){
  var caja=$("#joinitys_zona");
  caja.html(data.salida);
  n_zona=data.n;
  if (data.fin){
	  $("#carga_zona").remove();
  }
  donutfunction();
}
*/
function salida_estandar(data){
    if (!data.ok)
        alert("Error");
}

function postear(data){
    if(data.status){
    	flag_messages=false;

    }
    else{
    	flag_messages=false;
        $("#contenido_texto").val("");
        Dajaxice.joinitys.refresca(refresca_timeline, {'joinity_id':data.joinity_id});
        hideLoader($('.preloader #fadingBarsG').parent());
    }
}
function postear_evento(data){
	if (data.status){
    	flag_messages=false;

	}
	else{
		flag_messages=false;
		$("#contenido_texto").val("");
    Dajaxice.joinitys.eventos.cargar_evento(carga_evento, {"evento_id": data.evento_id});
		hideLoader($('.preloader #fadingBarsG').parent());
		cargaPreloaderTarget('.post-write.preloader');
	}
}

function refresca_timeline(data){
    var timeline=$(".timeline");
    timeline.html(data.muro);
    $('.answer').click(function() {
      $(this).next().removeClass('hide');
      return $(this).addClass('hide');
    });
}

function cargar_subcategoria(data){
  $("#select_subcategorias").html(data.select);
  $('.selectpicker').selectpicker();
  selectp = $('.bootstrap-select');
  selectp.each(function(){
    selectC = $(this).children('.dropdown-toggle');
    selectC.attr('class',$(this).attr('class')).removeClass('btn-group bootstrap-select');
    $(this).removeClass('btn');
  });
}

function anyadir_lugar(data){
  $(".lista_lugares").html(data.lista);
}

function eliminar_joiner(data){
  $(".lista_joiners").html(data.lista);
}
function invitar_joiner(data){
	$(".lista_joiners").html(data.lista);
}


function unirse_compras(data){
}
function carga_pago(data){
  $("#contenedor_pago").html(data.pagina);
  if (es_compra)
     $("#caja_compra_"+id).removeClass("active");
  else if(es_pago)
     $("#caja_pago_"+id).removeClass("active");
  else if(es_ticket)
	 $("#caja_ticket_"+id).removeClass("active");
  if (data.compra_id){
     id=data.compra_id;
     es_compra=true;
     es_pago=false;
     es_ticket=false;
     $("#caja_compra_"+id).addClass("active");
  }
  else{
     id=data.pago_id;
     es_compra=false;
     es_pago=true;
     es_ticket=false;
     $("#caja_pago_"+id).addClass("active");
  }
  /* CONCAT REMOVE */
  $('.btnPago').click(function() {
    if ($('.acepto-terminos').children('.clearfix').children('a').hasClass('checked')){
      $(this).css({
        'display': 'none'
      });
      return $('.paypago').css({
        'display': 'inherit'
      });
    } else {
      $(this).parent().children('.content').children('.has-pretty-child').children('.clearfix').children('a').addClass('nooo');
      alert('Debes leer y aceptar los términos del contrato.');
    }
  });
  $("input.check").prettyCheckable({
    color: "red"
  });
  
  var aceptarpago, cancelarpago, pagadopago, volverpago;
  aceptarpago = $('.aceptar-btn');
  if (aceptarpago.length > 0) {
    volverpago = $('.volver-pago');
    cancelarpago = $('.cancelar-btn');
    pagadopago = $('.pagado-btn');
    cancelarpago.click(function() {
      aceptarpago.addClass('hide');
      pagadopago.addClass('hide');
      $(this).addClass('hide');
      $(this).next().removeClass('hide');
      return pagadopago.next().addClass('hide');
    });
    pagadopago.click(function() {
      aceptarpago.addClass('hide');
      cancelarpago.addClass('hide');
      $(this).addClass('hide');
      $(this).next().removeClass('hide');
      return cancelarpago.next().addClass('hide');
    });
    volverpago.click(function(){
      aceptarpago.removeClass('hide');
      cancelarpago.removeClass('hide');
      pagadopago.removeClass('hide');
      pagadopago.next().addClass('hide');
      cancelarpago.next().addClass('hide');
    })
  }

}

function carga_ticket(data){
	  $("#contenedor_pago").html(data.pagina);
	  if (es_compra)
	     $("#caja_compra_"+id).removeClass("active");
	  else if (es_pago)
	     $("#caja_pago_"+id).removeClass("active");
	  else if (es_ticket)
		 $("#caja_ticket_"+id).removeClass("active");
	  
	  id=data.ticket_id;
	  es_compra=false;
	  es_ticket=true;
	  es_pago=false;
	  $("#caja_ticket_"+id).addClass("active");
	  
	  /* CONCAT REMOVE */
	  $('.btnPago').click(function() {
	    if ($('.acepto-terminos').children('.clearfix').children('a').hasClass('checked')){
	      $(this).css({
	        'display': 'none'
	      });
	      return $('.paypago').css({
	        'display': 'inherit'
	      });
	    } else {
	      $(this).parent().children('.content').children('.has-pretty-child').children('.clearfix').children('a').addClass('nooo');
	      alert('Debes leer y aceptar los términos del contrato.');
	    }
	  });
	  $("input.check").prettyCheckable({
	    color: "red"
	  });
	  
	  var aceptarpago, cancelarpago, pagadopago, volverpago;
	  aceptarpago = $('.aceptar-btn');
	  if (aceptarpago.length > 0) {
	    volverpago = $('.volver-pago');
	    cancelarpago = $('.cancelar-btn');
	    pagadopago = $('.pagado-btn');
	    cancelarpago.click(function() {
	      aceptarpago.addClass('hide');
	      pagadopago.addClass('hide');
	      $(this).addClass('hide');
	      $(this).next().removeClass('hide');
	      return pagadopago.next().addClass('hide');
	    });
	    pagadopago.click(function() {
	      aceptarpago.addClass('hide');
	      cancelarpago.addClass('hide');
	      $(this).addClass('hide');
	      $(this).next().removeClass('hide');
	      return cancelarpago.next().addClass('hide');
	    });
	    volverpago.click(function(){
	      aceptarpago.removeClass('hide');
	      cancelarpago.removeClass('hide');
	      pagadopago.removeClass('hide');
	      pagadopago.next().addClass('hide');
	      cancelarpago.next().addClass('hide');
	    })
	  }

}



/* FUNCIÓN PARA BUSCAR AL TECLEAR */

var teclear_buscador;

teclear_buscador = function(elinput,dajax) {
  var inputSearch;
  inputSearch = $(elinput);
  inputSearch.focus(function() {
    dataid = $(this).data("idjoinity");
    //alert('inputSearch');
    var doneTyping, doneTypingInterval, typingTimer, vez;
    vez = 0;
    doneTyping = function() {
      if (vez === 0) {
        /* console.log(dataid); */
        dajax(dataid);
        return vez = 1;
      }
    };
    typingTimer = void 0;
    doneTypingInterval = 1000;
    inputSearch.keyup(function() {
      vez = 0;
      return typingTimer = setTimeout(doneTyping, doneTypingInterval);
    });
    return inputSearch.keydown(function() {
      return clearTimeout(typingTimer);
    });
  });
};

/* Funciones que cargan dajaxice en la función de teclear_buscador */

/*
function dajBuscador(dataid) {
  Dajaxice.buscador.buscar(carga_resultados, {"busca":$("#buscaInput").val()})
}
*/

/*
function dajBuscadorUsuarios(datid){
	Dajaxice.buscador.buscar_usuarios(carga_resultados_usuarios, {"busca":$("#buscaInput").val(), "joinity_id":$("#modal-edita-contactos").datid})
}
*/

function carga_resultados(data){
	if (data.usuarios)
		$("#users").html(data.usuarios);
	if (data.joinitys)
		$("#joinities").html(data.joinitys);
	if (data.lugares)
		$("#places").html(data.lugares);
	if (data.hobbies)
		$("#hobbies").html(data.hobbies);
}

function unirse_evento(data){
	if (data.ok){
		$("#caja_apuntarse").html("");
	}
}
function carga_resultados_aficiones(data){
	$("#filtro-joinitys").html(data.joinitys);
	$("#filtro-lugares").html(data.lugares);
	$("#nombre_filtro").html(data.nombre);
}
function carga_resultados_regalos(data){
	$("#filtro-regalo-nombre").html(data.nombre);
	$("#filtro-regalo-aficiones").html(data.aficiones);
	$("#filtro-regalo-brands").html(data.brands);
}
function carga_resultados_restaurantes(data){
	$("#filtro-restaurante-nombre").html(data.nombre);
	$("#filtro-restaurante-lugar").html(data.lugar);
	$("#filtro-restaurante-brand").html(data.brand);
}
function carga_resultados_hoteles(data){
	$("#filtro-hotel-nombre").html(data.nombre);
	$("#filtro-hotel-lugar").html(data.lugar);
	$("#filtro-hotel-brand").html(data.brand);
}
function carga_resultados_usuarios(data){
	if (data.usuarios)
		$("#filtro-nombre").html(data.usuarios);
	if (data.ciudades)
		$("#filtro-ubicacion").html(data.ciudades);
	if (data.aficiones)
		$("#filtro-aficiones").html(data.aficiones);
}
function carga_resultados_participantes(data){
	$("#filtro-nombre").html(data.nombre);
	$("#filtro-ubicacion").html(data.ubicacion);
}
function invita_joiner_busqueda(data){
	if (data.joinity_id){
		Dajaxice.buscador.buscar_usuarios(carga_resultados_usuarios, {"busca":$("#buscaInput").val(), "joinity_id": data.joinity_id});
    	$(".lista_joiners").html(data.lista);
	}
    else{
    	Dajaxice.buscador.buscar_usuarios(carga_resultados_usuarios, {"busca":$("#buscaInput").val(), "joinity_id": 0});
    }

}
function carga_factura(data){
	$("#contenedor_factura").html(data.pagina);
	if (compra==1)
		$("#caja_compra_"+id).removeClass("active");
	else
		$("#caja_pago_"+id).removeClass("active");
	if (data.compra_id){
		id=data.compra_id;
		compra=1;
	    $("#caja_compra_"+id).addClass("active");
	}
	else{
		id=data.pago_id;
	    compra=0;
	    $("#caja_pago_"+id).addClass("active");
	}
}

function eliminar_tarea(data){
    Dajaxice.joinitys.tareas.cargar_tareas(carga_tareas, {"joinity_id": data.joinity_id});
    addChecked();

}
function realizar_reserva(data){
	if (data.ok){
		$("#alert_reserva").fadeIn();
	}
	else{
		alert("Error");
	}
}
function carga_reserva(data){
	$("#contenedor_reservas").html(data.pagina);
	  $("#caja_reserva_"+id).removeClass("active");
	  id=data.reserva_id;
	  $("#caja_reserva_"+id).addClass("active");
}

function carga_tareas(data){
	$("#contenedor_tareas").html(data.pagina);
	$("#caja_joinity_"+id).removeClass("active");
	id=data.id;
	$("#caja_joinity_"+id).addClass("active");
	checkboxStart();
	showInfoTasks();
	tareaTable();
	addChecked();
	hideLoader($('.preloader #fadingBarsG').parent());
}

function carga_evento(data){
	$("#contenedor_evento").html(data.pagina);
	$("#caja_evento_"+id).removeClass("active");
	id=data.id;
	$("#caja_evento_"+id).addClass("active");
  hideLoader($('.preloader #fadingBarsG').parent());
  cargaPreloaderTarget('.post-write.preloader');
}
function editar_reserva(data){
	Dajaxice.brands.carga_reserva(carga_reserva, {"id_reserva": data.reserva_id});
}
function editar_reserva_manage(data){
	Dajaxice.brands.carga_reserva_manage(carga_reserva, {"id_reserva": data.reserva_id});
}

function puntuar(data){
	$("#caja_votacion").html(data.caja);
}
function carga_notificaciones(data){
	var caja=$("#caja_notificaciones");
	caja.html(data.menu);
	if (notificaciones)
		clearTimeout(notificaciones);
	notificaciones=setTimeout("refresca_notificaciones()", 10000);
}
function refresca_notificaciones(){
	if (notificaciones)
		clearTimeout(notificaciones);
    Dajaxice.notificaciones.refrescar(carga_notificaciones, {});

}

function carga_filtro(data){
  $("#caja_filtro").html(data.caja);
}
function inicio_carga_filtro(){
  
    Dajaxice.joinitys.carga_filtro(carga_filtro, {"tipo":0});

}

function carga_destacados(data){
	$("#caja_destacados").html(data.caja);
}
function inicio_carga_destacados(){
	Dajaxice.joinitys.carga_destacados(carga_destacados,{});
}

function comentar_joinity(data){
	caja=$("#caja_comentarios_"+data.actualizacion);
	caja.html(data.salida);
	flag_messages=false;
  hideLoader($('.preloader #fadingBarsG').parent());
	$('.preloader').parent().parent().children('input').val("");
}
function anyadir_aficion(data){
	if (data.anyadido){
		$("#btn_aficion").html("Eliminar afición");
	}
	else{
		$("#btn_aficion").html("Añadir afición");
	}
}

function comprar_ahora(data){
	$("#caja_confirmacion_comprar_ahora").html(data.respuesta);
}

function cancelar_pago(data){
	Dajaxice.joinitys.pagos.carga_pago(carga_pago, {'id_pago': data.pago_id, 'compra':compra});
}

function seguir_brand(data){
	if (data.seguir){
		$('#botonseguir').html("Dejar de seguir");
	}
	else{
		$('#botonseguir').html("Sigue a esta marca");
	}
}
function anyadir_aficion_usuario(data){
	if (data.anyadido){
		$("#btn_aficion_"+data.aficion).html("Eliminar afición");
	}
	else{
		$("#btn_aficion_"+data.aficion).html("Añadir afición");
	}
	
}
function unirse(data){
	if (data.privado){
		$('#btn-unirse').html("<div id='btn amarillo normal' onclick=\"Dajaxice.joinitys.abandonar(abandonar, {'joinity_id':"+data.joinity_id+"});\">Eliminar Solicitud</div>");
		$('#btn_unirse_panel').html("Solicitud Enviada");
	}
	else{
		$('#btn-unirse').html("<div id='btn amarillo normal' onclick=\"Dajaxice.joinitys.abandonar(abandonar, {'joinity_id':"+data.joinity_id+"});\">Abandonar</div>");
	    Dajaxice.joinitys.refresca(refresca_timeline, {'joinity_id':data.joinity_id});
	    $('.votacion.no-votado .icon-star').click(function() {
	        Dajaxice.joinitys.puntuar(puntuar, {"joinity_id": data.joinity_id, "valor":$(this).data("star")});
	        return $(this).parent().removeClass('no-votado').addClass('votado');
	      });
	    $("#panel_unirse").css({"display":"none"});
	}

}
function abandonar(data){
	
	$('#btn-unirse').html("<div id='btn amarillo normal' onclick=\"Dajaxice.joinitys.unirse(unirse, {'joinity_id':"+data.joinity_id+"});\">Unirse</div>");
}


function solicitar_amistad(data){
	$('#caja_amistad').html("<div class='btn amarillo normal alargado'>Solicitud de amistad enviada</div>");
}

function aceptar_amistad(data){
	$('#caja_amistad').html("<div class='btn amarillo normal alargado'>Sois amigos</div>");
}

function rechazar_amistad(data){
	$('#caja_amistad').html("<div class='btn amarillo normal alargado'>Solicitud rechazada</div>");
}

function eliminar_amistad(data){
	$('#caja_amistad').html("<div class='btn amarillo normal alargado'>Amigo eliminado</div>");
}
function eliminar_amigo_perfil(data){
	$('#boton_amigo_'+data.id_amigo).html("Amigo eliminado");
}

function carga_modal_foto(data){
	$("#imagen_modal").css({"background-image":"url('"+data.foto+"')"});
}
function carga_jonitys_compras(data){
	$("#contenedor_joinitys").html(data.salida);
	if (data.fin){
		$("#btn_ver_mas_joinitys").remove();
	}
	n_joinitys=data.n;
	order_joinitys=data.order;
	hideLoader($('.preloader #fadingBarsG').parent());

}

function carga_brands(data){
	$("#contenedor_marcas").html(data.salida);
	if (data.fin){
		$("#btn_ver_mas_marcas").remove();
	}
	n_brands=data.n;
	hideLoader($('.preloader #fadingBarsG').parent());
}
function carga_hoteles(data){
	$("#contenedor_hoteles").html(data.salida);
	if (data.fin){
		$("#btn_ver_mas_hoteles").remove();
	}
	n_hoteles=data.n;
	hideLoader($('.preloader #fadingBarsG').parent());
}
function repartir(data){
	document.location.href = document.location.href;

}
function carga_restaurantes(data){
	$("#contenedor_restaurantes").html(data.salida);
	if (data.fin){
		$("#btn_ver_mas_restaurantes").remove();
	}
	n_restaurantes=data.n;
	hideLoader($('.preloader #fadingBarsG').parent());
}

function anyadir_respuesta(data){
	if (data.lista){
		$("#lista_respuestas").html(data.lista);
	}
	$("#respuesta").val("");
	$("#id_lugar").val("");
	$("#limite").val("");
	$("#fecha_inicio").val("");
	$("#fecha_fin").val("");
}

function ver_votacion(data){
	if (data.vista){
		$("#vista_votacion").html(data.vista);
	}
}


function comprar_ticket(data){
	if (data.salida){
		$("#contenedor_modal_compra").html(data.salida);
	}
}

function recargar_usuarios_tickets(data){
	if (data.lista){
		$("#lista_usuarios").html(data.lista);
	}
}
function invitar_tickets(data){
	if (data.ok){
		alert("Invitaciones Mandadas\n");
	}
}
function recarga_ticket(data){
	if (data.ok){
		Dajaxice.joinitys.pagos.carga_ticket(carga_ticket, {'ticket_id': data.ticket_id})
	}
}