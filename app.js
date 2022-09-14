// https://www.omnicalculator.com/conversion/px-to-em

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const emRadio = document.getElementById('emRadio');
const objectssizeRadio = document.getElementById('objectssizeRadio');
const basesizeRadio = document.getElementById('basesizeRadio');

let em;
let objectssize = v1;
let basesize = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

emRadio.addEventListener('click', function() {
  variable1.textContent = 'Object\'s size';
  variable2.textContent = 'Base size';
  objectssize = v1;
  basesize = v2;
  result.textContent = '';
});

objectssizeRadio.addEventListener('click', function() {
  variable1.textContent = 'Em';
  variable2.textContent = 'Base size';
  em = v1;
  basesize = v2;
  result.textContent = '';
});

basesizeRadio.addEventListener('click', function() {
  variable1.textContent = 'Em';
  variable2.textContent = 'Object\'s size';
  em = v1;
  objectssize = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(emRadio.checked)
    result.textContent = `Em = ${computeem().toFixed(2)}`;

  else if(objectssizeRadio.checked)
    result.textContent = `Object's size = ${computeobjectssize().toFixed(2)}`;

  else if(basesizeRadio.checked)
    result.textContent = `Base size = ${computebasesize().toFixed(2)}`;
})

// calculation

function computeem() {
  return Number(objectssize.value) / Number(basesize.value);
}

function computeobjectssize() {
  return Number(em.value) * Number(basesize.value);
}

function computebasesize() {
  return Number(objectssize.value) / Number(em.value);
}