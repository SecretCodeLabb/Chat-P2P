// === Datos del equipo ===
// Agrega, edita o elimina miembros modificando este arreglo.
// Puedes poner rutas locales en "foto" (ej: "talleres imagenes/equipo/hernan.jpg").
const EQUIPO = [
  { nombre: 'Hernán Rodríguez', rol: 'Lider del semillero', foto: 'talleres imagenes/equipo/hernan.jpg' },
  { nombre: 'Daniel Oquendo', rol: 'Encargado de programacion y construccion de la pagina web', foto: 'talleres imagenes/equipo/daniel.jpg' },
  { nombre: 'Santiago Zapata', rol: 'Encargado de las redes sociales y contenido audiovisual', foto: 'talleres imagenes/equipo/invitado1.jpg' },
  { nombre: 'Maria Jose Valencia', rol: 'Lider de contenido audivisual y redes sociales', foto: 'talleres imagenes/equipo/invitado2.jpg' },
  { nombre: 'Gabriel Rondon', rol: 'Diseñador UI de la pagian web', foto: 'talleres imagenes/equipo/invitado2.jpg' },
  { nombre: 'Agregar miembro', rol: 'descripcion', foto: 'talleres imagenes/equipo/invitado2.jpg' },
];

// === Render ===
const grid = document.getElementById('teamGrid');

function crearCard(m){
  const card = document.createElement('article');
  card.className = 'card';

  const img = document.createElement('img');
  img.className = 'card__img';
  img.loading = 'lazy';
  img.alt = m.nombre;
  img.src = m.foto || 'talleres imagenes/equipo/placeholder.jpg';

  const body = document.createElement('div');
  body.className = 'card__body';
  const name = document.createElement('div');
  name.className = 'card__name';
  name.textContent = m.nombre;
  const role = document.createElement('div');
  role.className = 'card__role';
  role.textContent = m.rol;

  body.append(name, role);
  card.append(img, body);
  return card;
}

function renderEquipo(){
  const frag = document.createDocumentFragment();
  EQUIPO.forEach(m => frag.appendChild(crearCard(m)));
  grid.innerHTML = '';
  grid.appendChild(frag);
}

renderEquipo();
