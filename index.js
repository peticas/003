const d = document;
const _idClase = d.getElementById("clases");
const _idGrabaciones = d.getElementById("grabaciones");
const _idProyectos = d.getElementById("proyectos");
const _idTareas = d.getElementById("tareas");
const _btnBuscar = d.getElementById("btnBuscar");

_btnBuscar.addEventListener("click",function(){
    console.log(d.getElementById("txtBuscar"));
    alert("Usted esta buscando: " + d.getElementById("txtBuscar").value);
});

_idClase.addEventListener("click",function(){
    console.log(this);
    console.log(this.id);
    mover(this.id);
});

_idGrabaciones.addEventListener("click",function(){
    mover(this.id);
});

_idProyectos.addEventListener("click",function(){
    mover(this.id);
});

_idTareas.addEventListener("click",function(){
    mover(this.id);
});

function mover(ids){
    location.hash = "#" + ids + "1";
}