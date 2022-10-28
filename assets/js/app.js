const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('p.name'); //mal lineado se arreglo el linkeamento 
const $b = document.querySelector('p.blog');
const $l = document.querySelector('p.location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json() //Se agrega el awit con la data definida 
  console.log(data);
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`; //mal las comillas 
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` //faltaba la $
}

displayUser('stolinski').catch(handleError);