function setup(item) {
    var chart;
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAojUCJjfDHINPMilVPi_rTkxZcXN4CqZE",
        authDomain: "smartcode-4057a.firebaseapp.com",
        databaseURL: "https://smartcode-4057a.firebaseio.com",
        projectId: "smartcode-4057a",
        storageBucket: "smartcode-4057a.appspot.com",
        messagingSenderId: "406309790746"
    };
    firebase.initializeApp(config);
    var db = firebase.database();


    var ref = db.ref('Usuario');
    ref.push({
        nombre: item[1].value,
        sexo: item[2].value,
        edad: item[3].value,
        curp: item[4].value,
        ine: item[5].value,
        nacionalidad: item[6].value,
        estado: item[7].value,
        municipio: item[8].value,
        calle: item[9].value,
        numero: item[10].value,
        colonia: item[11].value,
        telefono: item[12].value,
        histMed: item[13].value,
        noSegSoc: item[14].value,
        tipoSangre: item[15].value,
        enfermedades: item[16].value,
        alergias: item[17].value,
        tratamiento: item[18].value
    },finished);

    function finished(error){
        if(error){
            document.getElementById("parrafo").innerHTML = "ha ocurrido un error";
        } else {
            window.location.replace("succes.html");

        }
    }
    return true;
}