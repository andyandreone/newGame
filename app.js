var watchID = navigator.geolocation.watchPosition(function(position) {
    let lat =  position.coords.latitude
    let long = position.coords.longitude
    let precision = position.coords.accuracy

    let latDom = document.getElementById("latitud")
    let longDom = document.getElementById("longitud")
    let presDom = document.getElementById("precision")
    latDom.innerHTML = `<p>Latitud: ${lat}</p>`
    longDom.innerHTML = `<p>Longitud: ${long}</p>`
    presDom.innerHTML = `<p>Precision: ${precision} metros</p>`

    let dif = 0.00045

    let lat1 = -34.68378
    let long1 = -58.61724

    let lat2 = -34.66102
    let long2 = -58.54445
    
    if((lat>lat1-dif&&lat<lat1+dif)&&(long>long1-dif)&&(long<long1+dif)){
        let btn1 = document.getElementById("btn1")
        btn1.disabled = false
        btn1.innerText = "Ver Codigo"
    }

    if((lat>lat2-dif&&lat<lat2+dif)&&(long>long2-dif)&&(long<long2+dif)){
        let btn1 = document.getElementById("btn2")
        btn1.disabled = false
        btn1.innerText = "Ver Codigo"
    }
   

});

function mostrar1(){
    alert("Zebastian Zanchez tambien conocido como QUICO")
  }

  function mostrar2(){
    alert("andy andreone")
  }