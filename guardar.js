function guardar () {
    db.collection("consultants").add({
         nombreservicio : document.getElementById("nombreservicio").value,
         descripcion : document.getElementById("descripcion").value,
         nombrecompleto : document.getElementById("nombrecompleto").value,
         direccion : document.getElementById("direccion").value,
         fechadenacimiento : document.getElementById("fechadenacimiento").value,
         email : document.getElementById("email").value,
         telefono : document.getElementById("telefono").value,
         url : document.getElementById("url").value,
         a_medicina : document.getElementById("a_medicina").value,
         a_negocios : document.getElementById("a_negocios").value,
         a_diseno : document.getElementById("a_diseno").value,
         a_publicidad : document.getElementById("a_publicidad").value,
         a_derecho : document.getElementById("a_derecho").value,
         lunes : document.getElementById("lunes").value,
         martes : document.getElementById("martes").value,
         miercoles : document.getElementById("miercoles").value,
         jueves : document.getElementById("jueves").value,
         viernes : document.getElementById("viernes").value,
         sabado : document.getElementById("sabado").value,
         domingo : document.getElementById("domingo").value,
    })
    .then((docRef) => {
        alert("Registro exitoso");
    })
    .catch((error) => {
        alert("Erroe en el registro")
    });
}