/*var app = {
    
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

var onMapSuccess = function (position) {

    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
    //alert(Latitude + "//" + Longitude);
    crear_mapa(Latitude, Longitude);

}

function crear_mapa(Latitude, Longitude) {

    var latLong = new google.maps.LatLng(Latitude, Longitude);
    var mapOptions = {
        center: latLong,
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    

}

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
//var formData = JSON.stringify($("#myForm").serializeArray());


//var nameValue = document.getElementById("myForm").value;

function submitform(x){
 var user = document.getElementById("user").value;
 var password = document.getElementById("password").value;
var other = document.getElementById("other").value;
var obj = {"user":user, "password":password, "other":other};
alert(user);
//var file = new File(txtFile);

//saveAs(blob, filename);

    //alert(json);
    //var nameValue = document.getElementById("myForm").value;
    //alert(nameValue);
    //alert(formData[0]);
}



