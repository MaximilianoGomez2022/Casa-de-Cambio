let moneda = document.querySelector('#moneda');
let ingreso = document.querySelector('#ingreso');
let cambio = document.querySelector('#cambio');
let btn = document.querySelector('#boton');
let resultado = document.querySelector('#resultado');
let blue = document.querySelector('#blue');
let ccl = document.querySelector('#ccl');
let turista = document.querySelector('#turista');
let solidario = document.querySelector('#solidario');
let oficial = document.querySelector('#oficial');
let ARSblue = document.querySelector('#ARSblue');
let ARSccl = document.querySelector('#ARSccl');
let ARSturista = document.querySelector('#ARSturista');
let ARSsolidario = document.querySelector('#ARSsolidario');
let ARSoficial = document.querySelector('#ARSoficial');
let euro = document.querySelector('#euro');
let real = document.querySelector('#real');
let ARS = document.querySelector('#ARS');
let error = document.querySelector('#error');
let options = document.querySelectorAll('option');
let errorSuperior = document.querySelector('#errorSuperior');
let errorMonto = document.querySelector('#errorMonto');
let errorMoneda1 = document.querySelector('#errorMoneda1');
let errorMoneda = document.querySelector('#errorMoneda');

function obtenerValue(){
    let selected = moneda.value;
    console.log(`Seleccionaste ${selected}`);

    if ( selected === 'ARS' ) {

        blue.style.display = 'block';
        ccl.style.display = 'block';
        turista.style.display = 'block';
        oficial.style.display = 'block';
        solidario.style.display = 'block';
        euro.style.display = 'block';
        real.style.display = 'block';
        ARSblue.style.display = 'none';
        ARSccl.style.display = 'none';
        ARSturista.style.display = 'none';
        ARSoficial.style.display = 'none';
        ARSsolidario.style.display = 'none';
        ARS.style.display = 'none';
        dolar.style.display = 'none';
    }

    if ( selected === 'dolar' ) {

        ARS.style.display = ' none'
        dolar.style.display = 'none';
        blue.style.display = 'none';
        ccl.style.display = 'none';
        turista.style.display = 'none';
        oficial.style.display = 'none';
        solidario.style.display = 'none';
        ARSblue.style.display = 'block';
        ARSccl.style.display = 'block';
        ARSturista.style.display = 'block';
        ARSoficial.style.display = 'block';
        ARSsolidario.style.display = 'block';
        real.style.display = 'block';
        euro.style.display = 'block';
    }

    if ( selected === 'euro' ) {

        ARS.style.display = 'block';
        dolar.style.display = 'block';
        real.style.display = 'block';
        blue.style.display = 'none';
        ccl.style.display = 'none';
        turista.style.display = 'none';
        oficial.style.display = 'none';
        solidario.style.display = 'none';
        ARSblue.style.display = 'none';
        ARSccl.style.display = 'none';
        ARSturista.style.display = 'none';
        ARSoficial.style.display = 'none';
        ARSsolidario.style.display = 'none';
        euro.style.display = 'none';
    }

    if ( selected === 'real' ) {

        ARS.style.display = 'block';
        dolar.style.display = 'block';
        euro.style.display = 'block';
        blue.style.display = 'none';
        ccl.style.display = 'none';
        turista.style.display = 'none';
        oficial.style.display = 'none';
        solidario.style.display = 'none';
        ARSblue.style.display = 'none';
        ARSccl.style.display = 'none';
        ARSturista.style.display = 'none';
        ARSoficial.style.display = 'none';
        ARSsolidario.style.display = 'none';
        real.style.display = 'none';
    }

} 

btn.addEventListener('click', (e)=>{
    let res = '';

    if (moneda.value == 'elegi') {
        errorMoneda.style.display = 'block';
    } else {
        errorMoneda.style.display = 'none';
    }
    
    if (cambio.value == 'elegi2') {
        errorMoneda1.style.display = 'block'; 
    }  else {
        errorMoneda1.style.display = 'none';
    }
    
    if(moneda.value === 'ARS' && ingreso.value !=0) {

        switch (cambio.value) {
            case 'dolar blue':
                res = ingreso.value / 290;
                break;
    
            case 'dolar ccl':
                res = ingreso.value / 300;
                break;
    
            case 'dolar turista':
                res = ingreso.value / 280;
                break;
    
            case 'dolar solidario':
                res = ingreso.value / 240;
                break

            case 'dolar oficial':
                res = ingreso.value / 140;
                break
            
            case 'euro':
                res = ingreso.value / 310;
                break
    
            case 'real':
                res = ingreso.value / 22.50;
                break
        
            default:
                break;
        }

        let li = document.createElement('li');
        resultado.appendChild(li);
    
        console.log('Cambiaste ' + ingreso.value + ' ' + moneda.value + ' por ' + res.toFixed(2) + ' ' + cambio.value );
        li.innerHTML = 'Cambiaste ' + ingreso.value + ' ' + moneda.value + ' por ' + res.toFixed(2) + ' ' + cambio.value;

    }   else if (moneda.value === 'dolar' && ingreso.value !=0) {
        switch (cambio.value) {
            case 'ARSblue':
                res = ingreso.value * 290;
                break;
    
            case 'ARSccl':
                res = ingreso.value * 300;
                break;
    
            case 'ARSturista':
                res = ingreso.value * 280;
                break;
    
            case 'ARSsolidario':
                res = ingreso.value * 240;
                break

            case 'ARSoficial':
                res = ingreso.value * 138;
                break
            
            case 'euro':
                res = ingreso.value * 0.97;
                break
    
            case 'real':
                res = ingreso.value * 5.21;
                break
        
            default:
                break;
        }

        let li = document.createElement('li');
        resultado.appendChild(li);
    
        console.log('Cambiaste ' + ingreso.value + ' ' + moneda.value + ' por ' + res.toFixed(2) + ' ' + cambio.value );
        li.innerHTML = 'Cambiaste ' + ingreso.value + ' ' + moneda.value + ' por ' + res.toFixed(2) + ' ' + cambio.value;

    } else if(moneda.value === 'euro' && ingreso.value !=0) {
        switch (cambio.value) {
            
            case 'ARS':
                res = ingreso.value * 310;
                break

            case 'real':
                res = ingreso.value * 5.18;
                break
            
            case 'dolar':
                res = ingreso.value * 1.02;
                break
    
            default:
                break;
        }

        let li = document.createElement('li');
        resultado.appendChild(li);
    
        console.log('Cambiaste ' + ingreso.value + ' ' + moneda.value + ' por ' + res.toFixed(2) + ' ' + cambio.value );
        li.innerHTML = 'Cambiaste ' + ingreso.value + ' ' + moneda.value + ' por ' + res.toFixed(2) + ' ' + cambio.value;

    } else if(moneda.value === 'real' && ingreso.value !=0) {
            switch (cambio.value) {
                
                case 'euro':
                    res = ingreso.value / 5.32;
                    break
                
                case 'dolar':
                    res = ingreso.value * 0.19;
                    break
    
                case 'ARS':
                    res = ingreso.value * 25.35;
                    break
        
                default:
                    break;
            }
        
            let li = document.createElement('li');
            resultado.appendChild(li);
        
            console.log('Cambiaste ' + ingreso.value + ' ' + moneda.value + ' por ' + res.toFixed(2) + ' ' + cambio.value );
            li.innerHTML = 'Cambiaste ' + ingreso.value + ' ' + moneda.value + ' por ' + res.toFixed(2) + ' ' + cambio.value;

    }   
    
    if (ingreso.value == 0) {
        errorMonto.style.display = 'block';
    } else {
        errorMonto.style.display = 'none';
    }

    if (ingreso.value == 0 || moneda.value == 'elegi' || cambio.value == 'elegi2' ) {
        errorSuperior.style.display = 'block';
    } else {
        errorSuperior.style.display = 'none';
    }

    moneda.value = 'elegi';
    ingreso.value = null;
    cambio.value = 'elegi2';
    
})

function volverAdefault() {
    
}