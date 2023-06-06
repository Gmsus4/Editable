const peso = document.getElementById("peso");
const edad = document.getElementById("edad");
const altura = document.getElementById("altura");
const boton = document.getElementById("enviar");
const sexo = document.getElementById("genero");
const nombre = document.getElementById("name");
const resultado = document.querySelector(".resultado");
const actividad = document.getElementById("actividad");
const color = document.getElementById("color");
const color2 = document.getElementById("color2");
const palettes = document.getElementById("palettes");
const objetivo = document.getElementById("objetivo");

palettes.addEventListener("click",(p)=>{
	document.documentElement.style.setProperty('--primary', `${color.value}`);
	document.documentElement.style.setProperty('--secundary', `${color2.value}`);
})

boton.addEventListener("click",(e)=>{
	e.preventDefault();
	let mb; //Metabolísmo basal
	let gc; //Grasa corporal
	let rc; //Requerimiento calórico
	let txt; let txt2;
	let title; //Título sobbre Subir o bajar de peso 
	const imc = peso.value / (Math.pow(altura.value / 100, 2)); //índice de masa corporal
	let rcObjetivo; // Requerimiento calórico Objetivo

	if (sexo.value == "m") {
		mb = 10 * peso.value + 6.25 * altura.value - 5 * edad.value  + 5;
		gc = (1.2 * imc) + (0.23 * edad.value) - 10.8 - 5.4;
	  } else {
		mb = 10 * peso.value + 6.25 * altura.value - 5 * edad.value - 161;
		gc = (1.2 * imc) + (0.23 * edad.value) - 5.4;
	  }

	rc = mb * actividad.value; // Requerimiento calórico

	switch (objetivo.value) {
		case '1':
		  rcObjetivo = rc - rc * 0.17;
		  title = 'Calorías para perder grasa';
		  break;
		case '2':
		  rcObjetivo = rc + rc * 0.17;
		  title = 'Calorías para ganar músculo';
		  break;
	}
	
	const mgc = (peso.value * gc) / (100); //Masa de grasa corporal
	const mcm = (peso.value - mgc); //Masa corporal magra
	const agua = 35 * peso.value; //Agua que debe consumir al día
	const pesoIdeal = (altura.value / 100) * (altura.value / 100) * (21.745); //Peso ideal
	const resta = (peso.value - pesoIdeal) * -1;
	const proteinas = Math.floor(peso.value * 1.75); //Proteínas en gramos
	const kcalProteinas = proteinas * 4; //kcal en proteínas
	const grasas = Math.floor(peso.value * 0.8); //Grasas en gramos
	const kcalGrasas = grasas * 9; //kcal en grasas
	const kcalCarbohidratos = rcObjetivo - kcalProteinas - kcalGrasas; //kcal en carbohidratos
	const carbohidratos = kcalCarbohidratos / 4; //Carbohidratos en gramos

	if (resta > 1) {
		txt = `debe subir de peso <span>${resta.toFixed(2)}</span> kilos para estar en su peso ideal.`;
	} else if(resta == 0){
		txt = `felicidades por tener un cuerpo saludable uwu.`;
	} else{
		txt = `debe bajar de peso <span>${resta.toFixed(2)}</span> kilos para estar en su peso ideal.`;
	}

	if (imc < 18.5) {
		txt2 = `usted está en un <b>peso bajo</b>`;
	} else if (imc >= 18.5 && imc <= 24.9){
		txt2 = `usted está entre el rango de un <b>peso normal</b>`;
	} else if (imc > 24.9 && imc <= 29.9){
		txt2 = `usted tiene <b>sobrepeso</b>`;
	} else if (imc > 29.9 && imc <= 34.9){
		txt2 = `usted tiene <b>obesidad</b>`;
	} else{
		txt2 = `usted tiene <b>obesidad morbida</b>`;
	}

	resultado.classList.remove('dis');
	resultado.classList.add('res');
	resultado.innerHTML = `
	<div class="container">
		<br>
		<p>Bienvenid@ <b>${nombre.value},</b> ${txt2}, ${txt}</p><br>
		<p><b>Su peso ideal es:</b> <span>${pesoIdeal.toFixed(2)}kg.</span> Sin embargo, su peso también puede considerarse saludable si se mantiene entre
		los <span>${(parseFloat(pesoIdeal) - 9).toFixed(2)}</span> y <span>${(parseFloat(pesoIdeal) + 9).toFixed(2)}</span> kg.</p><br>
		<p title="Es la cantidad de energía necesaria para mantener los procesos vitales estando en reposo.">
		<b>Metabolismo basal:</b><span> ${mb.toFixed(2)}</span></p><br>
		<p title="Es la ingesta diaria de calorías recomendada de una persona para mantener su peso actual.">
		<b>Requerimiento Calórico:</b><span> ${rc}</span></p><br>
		<p><b>${title}:</b><span> ${rcObjetivo.toFixed(2)}</span></p><br>
		<p title="El índice de masa corporal (IMC) sirve para medir la relación entre el peso y la talla, lo que  permite identificar el sobrepeso y la obesidad en adultos.">
		<b>IMC:</b><span> ${imc.toFixed(2)}</span></p><br>
		<p><b>Grasa Corporal:</b><span> ${gc.toFixed(2)}%</span></p><br>
		<p><b>La masa de grasa corporal es de:</b><span> ${mgc.toFixed(2)} kg</span> </p>
		<p><b>La masa corporal magra es:</b><span> ${mcm.toFixed(2)} kg</span> </p><br>
		<p><b>Proteínas: </b><span>Consumir ${Math.floor(proteinas)}g = ${kcalProteinas.toFixed(2)}kcal</span></p>
		<p><b>Grasas: </b><span>Consumir ${Math.floor(grasas)}g = ${kcalGrasas.toFixed(2)}kcal</span></p>
		<p><b>Carbohidratos: </b><span>Consumir ${Math.floor(carbohidratos)}g = ${kcalCarbohidratos.toFixed(2)}kcal</span></p><br>
		<p><b>Usted debería tomar:</b><span> ${agua.toFixed(2)}ml </span> de agua al día.</p> <br>
	</div>`;
	window.location.href = "#res_";
})