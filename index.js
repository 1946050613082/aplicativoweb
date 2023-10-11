// Arreglos para almacenar pacientes y doctores
var pacientes = [];
var doctores = [];

// Datos de especialidades
var especialidades = [
    "Medicina general",
    "Cardiología",
    "Medicina interna",
    "Dermatología",
    "Rehabilitación física",
    "Psicología",
    "Odontología",
    "Radiología"
];

// Crear opciones para las listas desplegables de especialidades
function crearOpcionesEspecialidades(selectElement) {
    especialidades.forEach(function (especialidad) {
        var option = document.createElement("option");
        option.value = especialidad;  // Asigna el valor de la especialidad
        option.text = especialidad;   // Asigna el texto de la especialidad
        selectElement.appendChild(option);
    });
}

// Evento de envío de formulario para pacientes
document.getElementById("formularioPaciente").addEventListener("submit", function (event) {
    event.preventDefault();
    var nombre = document.getElementById("nombrePaciente").value;
    var apellido = document.getElementById("apellidoPaciente").value;
    var cedula = document.getElementById("cedulaPaciente").value;
    var edad = parseInt(document.getElementById("edadPaciente").value);
    var telefono = document.getElementById("telefonoPaciente").value;
    var especialidad = document.getElementById("especialidadPaciente").value;

    var paciente = {
        nombre: nombre,
        apellido: apellido,
        cedula: cedula,
        edad: edad,
        telefono: telefono,
        especialidad: especialidad
    };

    pacientes.push(paciente);

    // Limpia el formulario
    document.getElementById("formularioPaciente").reset();

    // Actualiza la lista de pacientes en la página
    mostrarPacientes();
});

// Evento de envío de formulario para doctores
document.getElementById("formularioDoctor").addEventListener("submit", function (event) {
    event.preventDefault();
    var nombre = document.getElementById("nombreDoctor").value;
    var apellido = document.getElementById("apellidoDoctor").value;
    var cedula = document.getElementById("cedulaDoctor").value;
    var consultorio = document.getElementById("consultorioDoctor").value;
    var correo = document.getElementById("correoDoctor").value;
    var especialidad = document.getElementById("especialidadDoctor").value;

    var doctor = {
        nombre: nombre,
        apellido: apellido,
        cedula: cedula,
        consultorio: consultorio,
        correo: correo,
        especialidad: especialidad
    };

    doctores.push(doctor);

    // Limpia el formulario
    document.getElementById("formularioDoctor").reset();

    // Actualiza la lista de doctores en la página
    mostrarDoctores();
});

// Función para mostrar la lista de pacientes en la página
function mostrarPacientes() {
    var listaPacientes = document.getElementById("listaPacientes");
    listaPacientes.innerHTML = "";

    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var elementoPaciente = document.createElement("div");
        elementoPaciente.innerHTML = `
            <h4>${paciente.nombre} ${paciente.apellido}</h4>
            <p>Cédula: ${paciente.cedula}</p>
            <p>Edad: ${paciente.edad}</p>
            <p>Teléfono: ${paciente.telefono}</p>
            <p>Especialidad: ${paciente.especialidad}</p>
        `;
        listaPacientes.appendChild(elementoPaciente);
    }
}

// Función para mostrar la lista de doctores en la página
function mostrarDoctores() {
    var listaDoctores = document.getElementById("listaDoctores");
    listaDoctores.innerHTML = "";

    for (var i = 0; i < doctores.length; i++) {
        var doctor = doctores[i];
        var elementoDoctor = document.createElement("div");
        elementoDoctor.innerHTML = `
            <h4>${doctor.nombre} ${doctor.apellido}</h4>
            <p>Cédula: ${doctor.cedula}</p>
            <p>Consultorio: ${doctor.consultorio}</p>
            <p>Correo de contacto: ${doctor.correo}</p>
            <p>Especialidad: ${doctor.especialidad}</p>
        `;
        listaDoctores.appendChild(elementoDoctor);
    }
}

// Llama a las funciones de mostrar al cargar la página
window.addEventListener("load", function () {
    mostrarPacientes();
    mostrarDoctores();
    crearOpcionesEspecialidades(document.getElementById("especialidadPaciente"));
    crearOpcionesEspecialidades(document.getElementById("especialidadDoctor"));
});
