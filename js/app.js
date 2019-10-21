const cotizador= new API('d03efeadeacf6a185348d292871d13aae5886d32ddc67b953d8af146ca572e11');
const ui = new Interfaz()

cotizador.obtenerMonedasAPI();


//Leer el formulario
const formulario = document.querySelector('#formulario');


//Event Listener
formulario.addEventListener('submit', mostrarResultados);


//Funciones

function mostrarResultados(e){
        e.preventDefault();

        cotizador.obtenerMonedasAPI()
    
        //Leer la moneda seleccionada
        const monedaSelect = document.querySelector('#moneda');
        const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
    
        //Leer la criptomoneda seleccionada
        const criptoMonedaSelect = document.querySelector('#criptomoneda');
        const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;
    
        //Comprobar que ambos campos tengan algo seleccionado
        if(monedaSeleccionada === '' || criptoMonedaSeleccionada ===''){
            //Arrojar un alerta de error
            ui.mostrarMensaje('Ambos campos son obligatorios','alert bg-danger text-center');
        }else{
            cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
            .then(data => {
                ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptoMonedaSeleccionada);
                
            })
        }
}
