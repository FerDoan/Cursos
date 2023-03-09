var maintable = document.getElementById('maintable'),
            pdfout = document.getElementById('pdfout');
// const btnpdf = document.getElementById('btn');
const nombre = document.getElementById('nombre'),
        h1Name = document.querySelector('.header'),
        iday = document.getElementById('day'),
        imonth = document.getElementById('month'),
        iyear = document.getElementById('year'),
        ddia = document.querySelector('.day'),
        dmonth = document.querySelector('.month'),
        dyear = document.querySelector('.year'),
        btnInsert = document.getElementById('insert'),
        pdf = document.getElementById('banorte')

btnInsert.onclick = (e) => {
    e.preventDefault();
    console.log('Si entra')
    ddia.textContent = iday.value
    dmonth.textContent = imonth.value
    dyear.textContent = iyear.value
}       
pdfout.onclick = function(){
    pdf.removeAttribute("hidden")
    var doc = new jsPDF('p', 'pt', 'letter'); //declara una nueva instancia de jspdf/
    // var logo = new Image();
    // logo.src = 'Banorte.png';
    // doc.addImage(logo,'png', 15, 40,148,210);
    var margin = 20; //margen de la pagina/
    var scale = (doc.internal.pageSize.width - margin * 2) / document.body.clientWidth; //ancho de la pagina para escritorio/
    var scale_mobile = (doc.internal.pageSize.width - margin * 2) / document.body.getBoundingClientRect(); //ancho de pagina en dispositivos moviles/

    //cheaqueando si el dispositivo es un movil o es una PC/
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        //Si el dispositivo es un telefono movil/
        doc.html(banorte, { //llamamos al contenido encapsulado en un ID (maintable) para poder exportar todo el contenido que posee ene l interior/
            x: margin,
            y: margin,
            html2canvas:{
                scale: scale_mobile,
            },
            callback: function(doc){
                doc.output('dataurlnewwindow', {filename: 'pdf.pdf'}); //crear el pdf y abrir una nueva ventana en el navegador/
            }
        });
    } else{
        //Si es dispositivo es una PC o escritorio/ 
        doc.html(banorte, {
            x: margin,
            y: margin,
            html2canvas:{
                scale: scale,
            },
            callback: function(doc){
                doc.output('dataurlnewwindow', {filename: 'pdf.pdf'}); //crear el pdf y abrir una nueva ventana en el navegador/
            }
        });
    }
};