var intentosSeleccionMultiple3=0;
function seleccionMultiple3() {

    var pregunta_3_1 = $("input[name='pregunta_3_1']:checked").val();
    var pregunta_3_2 = $("input[name='pregunta_3_2']:checked").val();
    var pregunta_3_3 = $("input[name='pregunta_3_3']:checked").val();
    var pregunta_3_4 = $("input[name='pregunta_3_4']:checked").val();
    var pregunta_3_5 = $("input[name='pregunta_3_5']:checked").val();
    var pregunta_3_6 = $("input[name='pregunta_3_6']:checked").val();

   /* if(!(pregunta_3_1 && pregunta_3_2 && pregunta_3_3 && pregunta_3_4 && pregunta_3_5 && pregunta_3_6)) {
        $("#calificacionEjercicio_3").html(`Debes responder todas las preguntas.`);
        return false;
    }*/

    var calificacion = 0;

    $("#pregunta_3_1").css("background-color", "rgb(255 0 0 / 0.2)")

    if(pregunta_3_1 == "a" && pregunta_3_2 == "b" && pregunta_3_3 == "c" && pregunta_3_5 == "e" && pregunta_3_6 == "f"){
    $("#calificacionEjercicio_3").show();
        calificacion = 5;
        $("#pregunta_3_1").css("background-color", "rgb(57 236 36 / 20%)");
    $("#calificacionEjercicio_3").html(`Tu calificación es: ${calificacion}/5`);  
    }


    if (calificacion === 5) {
        Swal.fire({
            title: '¡Buen trabajo!',
            text: 'Has respondido correctamente todas las preguntas',
            icon: 'success',
            showDenyButton: true,            
            confirmButtonText: 'Jugar de nuevo',
            denyButtonText: 'Terminar'
        }).then((result) => {
            if (result.isConfirmed) {
                replaySeleccionMultiple3();
            }
        })
    } else{
        intentosSeleccionMultiple3++;

        if(intentosSeleccionMultiple3 >= 2){
            Swal.fire(
                '¡Has superado el número de intentos!',
                'Deberías revisar nuevamente el contenido relacionado a esta unidad de aprendizaje.',
                'warning'
            )
            intentosSeleccionMultiple3 = 0;
            $("#calificar_oculto3").hide();
        } else {
            Swal.fire(
                '¡Lo sentimos!',
                'Puedes intentarlo de nuevo',
                'error'
            )
        }
    }
}

function replaySeleccionMultiple3() {
    $("#calificacionEjercicio_3").hide();
    $("#pregunta_3_1").css("background-color", "white");
    $("input[name=pregunta_3_1]").prop("checked", false);
    $("input[name=pregunta_3_2]").prop("checked", false);
    $("input[name=pregunta_3_3]").prop("checked", false);
    $("input[name=pregunta_3_4]").prop("checked", false);
    $("input[name=pregunta_3_5]").prop("checked", false);
    $("input[name=pregunta_3_6]").prop("checked", false);
}

var intentosSeleccionMultiple=0;
function seleccionMultiple() {

    var pregunta_1 = $("input[name='pregunta_1']:checked").val();
    var pregunta_2 = $("input[name='pregunta_2']:checked").val();
    var pregunta_3 = $("input[name='pregunta_3']:checked").val();
    $("#calificacionEjercicio_1").show();

    if(!(pregunta_1 && pregunta_2 && pregunta_3)) {
        $("#calificacionEjercicio_1").html(`Debes responder todas las preguntas.`);
        return false;
    }

    var calificacion = 0;

    $("#pregunta_1").css("background-color", "rgb(255 0 0 / 0.2)")
    $("#pregunta_2").css("background-color", "rgb(255 0 0 / 0.2)")
    $("#pregunta_3").css("background-color", "rgb(255 0 0 / 0.2)")

    if(pregunta_1 == "a"){
        calificacion++;
        $("#pregunta_1").css("background-color", "rgb(57 236 36 / 20%)");
    }
    if (pregunta_2 == "c") {
        calificacion++;
        $("#pregunta_2").css("background-color", "rgb(57 236 36 / 20%)");
    }
    if (pregunta_3 == "b") {
        calificacion++;
        $("#pregunta_3").css("background-color", "rgb(57 236 36 / 20%)");
    }

    $("#calificacionEjercicio_1").html(`Tu calificación es: ${calificacion}/3`);  

    if (calificacion === 3) {
        Swal.fire({
            title: '¡Buen trabajo!',
            text: 'Has respondido correctamente todas las preguntas',
            icon: 'success',
            showDenyButton: true,            
            confirmButtonText: 'Jugar de nuevo',
            denyButtonText: 'Terminar'
        }).then((result) => {
            if (result.isConfirmed) {
                replaySeleccionMultiple();
            }
        })
    } else{
        intentosSeleccionMultiple++;

        if(intentosSeleccionMultiple >= 2){
            Swal.fire(
                '¡Has superado el número de intentos!',
                'Deberías revisar nuevamente el contenido relacionado a esta unidad de aprendizaje.',
                'warning'
            )
            intentosSeleccionMultiple = 0;
            $("#calificar_oculto").hide();
        } else {
            Swal.fire(
                '¡Lo sentimos!',
                'Puedes intentarlo de nuevo',
                'error'
            )
        }
    }
}

function replaySeleccionMultiple() {
    $("#calificacionEjercicio_1").hide();
    $("#pregunta_1").css("background-color", "white");
    $("#pregunta_2").css("background-color", "white");
    $("#pregunta_3").css("background-color", "white");
    $("input[name=pregunta_1]").prop("checked", false);
    $("input[name=pregunta_2]").prop("checked", false);
    $("input[name=pregunta_3]").prop("checked", false);
}

function pantalla25(num){
    $(".btn_25").css('background','#e67e22');
    $(".btn_25_"+num).css('background','orange');
    var info = "";
    if (num == 1) {
        info = `
                <div id="carouselpantalla25" class="carousel slide">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <p class="p_black justificado">
                        <p class="p_black my-3">Utilizados para aplicar en forma exacta tratamientos a los frutos tales como ceras, recubrimientos o fungicidas:</p>
                        <p class="p_black my-3"><span class="font-weight-bold">APLICACIÓN DE FUNGICIDAS:</span> Una vez son trasladados los frutos al centro de acopio, el primer proceso al que son expuestos es la aplicación de fungicidas con el fin de minimizar la reproducción de hogos que puedan causar podredumbre en los mismos.</p>
                        <p class="p_black my-3"><span class="font-weight-bold">RECUBRIMIENTO DE FRUTAS:</span> Para realizar este procedimiento se utilizan ceras autorizadas como aditivos alimenticios, como es el caso de la cera de abejas y resinas como la colofonia (resina del pino); o recubrimientos comestibles naturales derivados de azúcares y otros alimentos. La adición de ceras y recubrimientos logra en los frutos entre muchos otros beneficios evitar su deshidratación, el crecimiento de microbios y la perdida de textura.</p>
                      </p>
                      <div class="d-flex justify-content-center">
                        <a class="pull-right" href="#carouselpantalla25" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <p class="p_black my-3">Entre los equipos para llevar a cabo estos procesos se encuentran:</p>
                      <p class="p_black my-3"><span class="font-weight-bold">DRENCHER:</span> Maquina diseñada para aplicar los tratamientos fungicidas de       manera uniforme a los frutos postcosecha, siendo el agua el canal utilizado para su difusión, la cual se recicla tras su paso por los palets (plataformas para el almacenamiento o traslado de mercadería). En la actualidad encontramos dos tipos de Drenchers: Los Drencher de cadena y los drencher de cabina:</p>
                      <p class="p_black my-3"><span class="font-weight-bold">Drenchers en cadena:</span> Está constituido por un transportador de cadenas con movimientos continuos, cuya longitud es variable, una cabina para prevenir salpicaduras hacia el exterior y el techo donde se encuentran las duchas con las que se realiza el tratamiento del producto. La cadena permite, dependiendo de la longitud del transportador, colocar uno o varios palets antes de las duchas y después de tratado el producto facilita la eliminación del exceso de agua del palet y de la fruta.</p>
                      <p class="text-center"><a class="" href="#carouselpantalla25" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                      <a class="" href="#carouselpantalla25" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                    </div>
                    <div class="carousel-item">
                      <p class="p_black my-3"><span class="font-weight-bold">Drenchers en cabinas o compartimentos:</span> Está constituido por dos cabinas juntas, con una puerta móvil que permite cerrar la cabina donde se está tratando el producto, a través de un conducto de agua que se mueve con la puerta, entretanto que la otra cabina queda libre para ser colocado un palet nuevo o retirar el tratado. Por medio de sensores se pone en funcionamiento la puerta la cual al cerrarse acciona las bombas que recirculan el agua y realizan el tratamiento de la fruta.</p>
                      <div class="d-flex justify-content-end">
                        <button class="btn btn-primary" data-toggle="modal" data-target="#pantalla25_modal1">VER ILUSTRACIÓN</button>
                      </div>
                      <p class="text-center"><a class="" href="#carouselpantalla25" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a>
                      <a class="" href="#carouselpantalla25" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a></p>
                    </div>
                    <div class="carousel-item">
                      <p class="p_black my-3"><span class="font-weight-bold">APLICADOR DE CERAS POR SPRAY:</span> Está constituido por un aplicador viajero que se desplaza a través del ancho de la enceradora aplicando la cera a los frutos por medio del spray.</p>
                      <div class="d-flex justify-content-end">
                        <button class="btn btn-primary" data-toggle="modal" data-target="#pantalla25_modal2">VER ILUSTRACIÓN</button>
                      </div>
                      <p class="text-center"><a class="" href="#carouselpantalla25" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a></p>
                    </div>
                  </div>
                </div>
                `;
    }else if (num == 2) {
        info = `
                <p class="p_black my-3"><span class="font-weight-bold"> EQUIPOS DE CONTROL DE CAMARAS:</span> Estos equipos permiten acondicionar el color de la fruta a través del control de la temperatura, la humedad, el etileno y el gas carbónico.</p>
                <div class="row">
                  <div class="col-md-6">
                    <p class="p_black my-3"><span class="font-weight-bold">HUMIDIFICADOR:</span> Este equipo posee un sistema automático de humidificación por boquillas de aire/agua que permite mantener la humedad de la fruta sin humedecerla, ni aumentar la temperatura del ambiente.</p>
                  </div>
                  <div class="col-md-6">
                    <button class="btn btn-primary m-3" data-toggle="modal" data-target="#pantalla25_modal3">VER ILUSTRACIÓN</button>
                  </div>
                </div>
                <p class="p_black my-3"><span class="font-weight-bold">CAMARAS DE MADURACIÓN:</span> Estos equipos permiten controlar las condiciones ambientales con el objeto de madurar los frutos en condiciones de climáticos ideales, para obtener un tiempo de vida más largo para su comercialización. La temperatura en estas cámaras puede oscilar entre 15°C y 25°C y se gradúa dependiendo de las necesidades del fruto a almacenar.</p>
                <button class="btn btn-primary" data-toggle="modal" data-target="#pantalla25_modal4">VER ILUSTRACIÓN</button>
                `;
    }else if (num == 3) {
        info = `
                <div id="carouselpantalla25" class="carousel slide">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <p class="p_black justificado">
                        <p class="p_black my-3">Durante la realización de los procesos postcosecha se generan unos caldos residuales con fungicidas, a los cuales se les debe dar manejo conforme a lo exigido por la normatividad vigente.</p>
                        <p class="p_black my-3">La gestión de los caldos se puede realizar de dos formas, ya sea acumulándolos para posteriormente ser retirados por medio de un gestor de residuos legalmente aprobado, o depurarlos a través de procesos físico-químicos. </p>
                        <p class="p_black my-3">Estos procesos acarrean grandes costos para su implementación representados en la pérdida de los fungicidas, el costo de retirar los caldos y la construcción de depósitos para el almacenamiento; mientras que en el método de depuración el costo se presenta por la adquisición de reactivos y el mantenimiento en general del proceso.</p>
                      </p>
                      <div class="d-flex justify-content-center">
                        <a class="pull-right" href="#carouselpantalla25" role="button" data-slide="next"><img class="boton-dialogo" src="assets/img/btn_siguiente.png"></a>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <p class="p_black my-3">Entre las referencias más representativas para la recuperación de caldos en el mercado se destacan: El Decco Ibérica el cual dispone de dos Sistemas de Recuperación de Caldos:</p>
                      <p class="p_black my-3"><span class="font-weight-bold">SRC Decco SM470:</span>  Entre las características que presenta este sistema está el permitir la reutilización de los caldos de tratamiento sobrantes en forma semiautomática; eliminando los sólidos en suspensión, materia orgánica y esporas de hongos. Otro de los beneficios que presta este sistema es no generar lodos residuales, ya que los sólidos en suspensión son prensados y deshidratados para su gestión al mínimo costo.</p>
                      <div class="d-flex justify-content-end">
                        <button class="btn btn-primary" data-toggle="modal" data-target="#pantalla25_modal5">VER ILUSTRACIÓN</button>
                      </div>
                      <p class="text-center"><a class="" href="#carouselpantalla25" role="button" data-slide="prev"><img class="boton-dialogo" src="assets/img/btn_anterior.png"></a></p>
                    </div>
                  </div>
                </div>
                `;
    }else if (num == 4) {
        info = `
                <p class="p_black my-3">Tratamiento térmico en productos vegetales que se realiza antes a un segundo proceso ya sea de conservación, secado, enlatado; su objetivo es ablandar el producto, simplificar el pelado, inactivar las enzimas y favorecer el empacado. Las variables como el tamaño, la forma, el grado de madures, la textura del fruto es lo que determina el tiempo de exposición al calor.</p>
                <p class="p_black my-3">Existe dos tipos de equipos para escaldados los que realizan el proceso a vapor o los que utilizan agua caliente.</p>
                <div class="d-flex justify-content-end">
                  <button class="btn btn-primary" data-toggle="modal" data-target="#pantalla25_modal6">VER ILUSTRACIÓN</button>
                </div>
                `;
    }
    $("#pantalla25").html(info);
}