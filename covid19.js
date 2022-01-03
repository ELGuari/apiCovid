window.onload = iniciar;

function iniciar (){
    let boton = document.getElementById ("btnCargar");
    boton.addEventListener('click', clickBoton);

}

async function cargarUrl (url){
   let response= await fetch(url);
   return response.json();

}

async function clickBoton () {

    let pais = document.getElementById('selectPais').value;
    let fecha = document.getElementById('inputFecha').value;

    let url = `https://api.covid19tracking.narrativa.com/api/${fecha}/country/${pais}`;
        
    let json = await cargarUrl(url);
    console.log(json)

    let estadisticas = json.dates[fecha].countries[pais];
    console.log(estadisticas)

    document.getElementById('today_confirmed').innerHTML = estadisticas.today_confirmed;
    document.getElementById('today_deaths').innerHTML = estadisticas.today_deaths;
    document.getElementById('today_hospitalised_patients_with_symptoms').innerHTML = estadisticas.today_hospitalised_patients_with_symptoms;
    document.getElementById('today_intesive_care').innerHTML = estadisticas.today_intesive_care;
    document.getElementById('today_new_confirmed').innerHTML = estadisticas.today_new_confirmed;
    document.getElementById('today_new_deaths').innerHTML = estadisticas.today_new_deaths;
    document.getElementById('today_new_hospitalised_patients_with_symptoms').innerHTML = estadisticas.today_new_hospitalised_patients_with_symptoms;
    document.getElementById('today_new_intensive_care').innerHTML = estadisticas.today_new_intensive_care;
    document.getElementById('today_new_open_cases').innerHTML = estadisticas.today_new_open_cases;
    document.getElementById('todar_new_recovered').innerHTML = estadisticas.todar_new_recovered;
    document.getElementById('today_new_total_hospitalised_patients').innerHTML = estadisticas.today_new_total_hospitalised_patients;




}