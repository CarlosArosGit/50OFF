$(document).ready(function() {
  $('#codigoDescuento').hide();
  $('#oCodigo').on('click', function () {
    if($('#checkT').prop('checked')){
      $('#codigoDescuento').show();
    }else{
      alert('Para obtener un código de descuento debe aceptar los términos y condiciones');
    }
  });
});