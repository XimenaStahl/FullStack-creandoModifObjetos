// Funcion constructora de Consultorio
function Consultorio(nombre, paciente) {
    let _nombre = nombre;
    // let _paciente = paciente;
    let _paciente = paciente || [];

    // Definiendo obtención por medio de getter y setter
    Object.defineProperty(this, '_getNombre', {
        get: function() {
            return _nombre;
        }
    });
    Object.defineProperty(this, '_setNombre', {
        set: function(nombre) {
            this._nombre = nombre;
        }
    });

    Object.defineProperty(this, '_getPaciente', {
        get: function() {
            return _paciente;
        }
    });

    Object.defineProperty(this, '_setPaciente', {
        set: function(paciente) {
            this._paciente = paciente;
        }
    });

    Object.defineProperty(this, '_addPaciente', {
        set: function(paciente) {
            _paciente.push(paciente)
        }
    });
};

// Funcion constructora de Paciente
function Paciente(nombre, edad, rut, diagnostico) {
    let _nombre = nombre;
    let _edad = edad;
    let _rut = rut;
    let _diagnostico = diagnostico;

    // Definiendo obtención por medio de getter / setter
    Object.defineProperty(this, '_getNombre', {
        get: function() {
            return _nombre;
        }
    });
    Object.defineProperty(this, '_setNombre', {
        set: function(nombre) {
            _nombre = nombre;
        }
    });

    Object.defineProperty(this, '_getEdad', {
        get: function() {
            return _edad;
        }
    });
    Object.defineProperty(this, '_setEdad', {
        set: function(edad) {
            _edad = edad;
        }
    });

    Object.defineProperty(this, '_getRut', {
        get: function() {
            return _rut;
        }
    });
    Object.defineProperty(this, '_setRut', {
        set: function(rut) {
            _rut = rut;
        }
    });

    Object.defineProperty(this, '_getDiagnostico', {
        get: function() {
            return _diagnostico;
        }
    });

    Object.defineProperty(this, '_setDiagnostico', {
        set: function(diagnostico) {
            _diagnostico = diagnostico;
        }
    });
}

// Creamos el método get y set 
Consultorio.prototype.getNombre = function() {
    return this._getNombre;
}
Consultorio.prototype.setNombre = function(nombre) {
    this._setNombre = nombre;
}
Consultorio.prototype.getPaciente = function() {
    return this._getPaciente;
}
Consultorio.prototype.setPaciente = function(paciente) {
    this._setPaciente = paciente;
}
Paciente.prototype.getNombre = function() {
    return this._getNombre;
}
Paciente.prototype.setNombre = function(nombre) {
    this._setNombre = nombre;
}
Paciente.prototype.getEdad = function() {
    return this._getEdad;
}
Paciente.prototype.setEdad = function(edad) {
    this._setEdad = edad;
}
Paciente.prototype.getRut = function() {
    return this._getRut;
}
Paciente.prototype.setRut = function(rut) {
    this._setRut = rut;
}
Paciente.prototype.getDiagnostico = function() {
    return this._getDiagnostico;
}
Paciente.prototype.setDiagnostico = function(diagnostico) {
    this._setDiagnostico = diagnostico;
}


// Instanciar Pacientes

let pacientes = [
    new Paciente('Xime', 34, '12345678-9', 'Estress'),
    new Paciente('Javi', 22, '32145678-9', 'Tendinitis'),
    new Paciente('Pato', 50, '66668888-3', 'Flojeritis'),
    new Paciente('Lore', 32, '18877877-2', 'Mamitis')
];

// instanciando Consultorio
let consultorio = new Consultorio('Salvador Bustos Ñuñoa', pacientes);
console.log(consultorio.getNombre());

// instanciando Pacientes en el consultorio
Consultorio.prototype.setAgregarPaciente = function(paciente_nvo) {
    this._addPaciente = paciente_nvo;
}

// instanciando Paciente 1
paciente1 = new Paciente();
paciente1.setNombre('Santi');
paciente1.setEdad(3);
paciente1.setRut('22345678-9');
paciente1.setDiagnostico('bebe');
consultorio.setAgregarPaciente(paciente1);
// console.log(consultorio)


let botonBuscar = document.getElementById('botonBuscar');


botonBuscar.addEventListener('click', function() {
    let nombreBuscado = document.getElementById('nombreBuscado').value;

    consultorio.getPaciente().forEach(paciente => {
        if (paciente.getNombre() == nombreBuscado) {
            console.log(paciente.getNombre() + " - " + paciente.getRut() + " - " + paciente.getEdad() + " - " + paciente.getDiagnostico());
        }
    });
})

let botonPacientes = document.getElementById('botonPacientes');
botonPacientes.addEventListener('click', function() {
    consultorio.getPaciente().forEach(paciente => {
        console.log(paciente.getNombre() + " - " + paciente.getRut() + " - " + paciente.getEdad() + " - " + paciente.getDiagnostico());
    });
})