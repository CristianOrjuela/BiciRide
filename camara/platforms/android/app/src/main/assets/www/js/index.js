var direccion = "http://10.203.141.171:8080";

var app = {
    
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        navigator.geolocation.getCurrentPosition(onMapSuccess, onMapError, { enableHighAccuracy: true });
    }
};

app.initialize();



/*function crear_mapa(Latitude, Longitude) {

    var latLong = new google.maps.LatLng(Latitude, Longitude);
    var mapOptions = {
        center: latLong,
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    

}*/

/*
function onMapError(error) {
    console.log('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}

function myFunction(x) {
   // x.classList.toggle("change");
   alert(x.classList);
   document.getElementById("sidebar").classList.toggle('active');
   alert(x.classList);
}

function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active');
    //alert("hola");
}

function Json(){
    alert(this.x);
}

*/


function submitformSign(x){
    var fname = document.getElementById("fname").value;
    var sname = document.getElementById("sname").value;
    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var noi = document.getElementById("noi").value;
//    var obj = {"user":user, "password":password, "other":other};

    //SEND
    var xhr = new XMLHttpRequest();
    var url = direccion + "/BiciRide/webapi/users";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json.email + ", " + json.password);
        }
    };
    var data = JSON.stringify({"code": "null", "document": noi, "firstName": fname, "firstSurname": sname,
    "password": password, "secondName": "null", "secondSurname": "null", "username": user});
    xhr.send(data);

}

function submitformLogin(x){
    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    //SEND
    var xhr = new XMLHttpRequest();
    var url = direccion + "/BiciRide/webapi/login";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json.email + ", " + json.password);
        }
    };
    var data = JSON.stringify({"username": user, "password": password});
    xhr.send(data);
    alert("Registro exitoso");

}



