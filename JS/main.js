
const mo667 = 0.921
const mo668 = 0.521
const mo669 = 0.577
const mo670 = 0.518



function captura_medidas() {
  ancho= document.getElementById("dato_ancho").value;
  alto= document.getElementById("dato_alto").value;
  unidades= document.getElementById("dato_unidades").value;
  precio= document.getElementById("dato_precio").value;
  nombreCliente= document.getElementById("nombreCliente").value;
}
function captura_accesorios() {
  felpa= document.getElementById("dato_felpa").value;
  aldaba= document.getElementById("dato_aldaba").value;
  ruedas= document.getElementById("dato_ruedas").value;
  escuadras= document.getElementById("dato_escuadras").value;
  vidrio= document.getElementById("dato_vidrio").value;
}
function captura_ganancia() {
  manodeobra= document.getElementById("dato_manodeobra").value;
  colocacion= document.getElementById("dato_colocacion").value;
  iva= document.getElementById("dato_iva").value;
  otros= document.getElementById("dato_otros").value;
}


function pdf_exportPresupuesto(nombreCliente) {

  var pdfPresupuesto = new jspdf.jsPDF(); 


  //var cliente = document.getElementById('nombreCliente').innerText;

  //doc.setFontSize(22);
  pdfPresupuesto.text(nombreCliente, 20, 10)

  pdfPresupuesto.text("Presupuesto!", 10, 10);
  pdfPresupuesto.save("Presupuesto - " + nombreCliente);
}

function pdf_exportTaller() {

  var pdfTaller = new jspdf.jsPDF(); 


  //var cliente = document.getElementById('nombreCliente').innerText;

  //doc.setFontSize(22);
  pdfTaller.text(nombreCliente, 30, 10)

  pdfTaller.text("Taller!", 10, 10);
  pdfTaller.save("Detalle Taller - " + nombreCliente);
}

function calcularPresupuesto() {

  captura_medidas();
  captura_accesorios();
  captura_ganancia();
  pdf_exportPresupuesto(nombreCliente);
  

  var pesomarco = ((alto*2)+(ancho*2)) * mo667
  var pesozocalo = (((ancho/2)-100) * mo668) * 4
  var pesoparantelateral = ((alto - 66) * mo669) * 2
  var pesoparantecentral = ((alto - 66) * mo670) * 2

  var pesototal = (pesomarco + pesozocalo + pesoparantelateral + pesoparantecentral) /1000

  var precioTOTAL = (pesototal*precio)+(felpa*2)+(aldaba*2)+(ruedas*4)+(escuadras*4)+(vidrio)

}

function calcularTaller() {

  captura_medidas();
  captura_accesorios();
  captura_ganancia();
  
  pdf_exportTaller(nombreCliente);

  var pesomarco = ((alto*2)+(ancho*2)) * mo667
  var pesozocalo = (((ancho/2)-100) * mo668) * 4
  var pesoparantelateral = ((alto - 66) * mo669) * 2
  var pesoparantecentral = ((alto - 66) * mo670) * 2

  var pesototal = (pesomarco + pesozocalo + pesoparantelateral + pesoparantecentral) /1000

  var precioTOTAL = (pesototal*precio)+(felpa*2)+(aldaba*2)+(ruedas*4)+(escuadras*4)+(vidrio)


}
