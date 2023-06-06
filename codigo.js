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

	const mbf = 10 * peso.value + 6.25 * altura.value - 5 * edad.value - 161; //Metabolímo basal feminino
	const mbm = 10 * peso.value + 6.25 * altura.value - 5 * edad.value  + 5; //Metabolímo basal masculino
	const rcm = mbm * actividad.value; //Requerimiento calórico femenino
	const rcf = mbf * actividad.value; //Requerimiento calórico masculino
	const imcf = peso.value / (Math.pow(altura.value / 100, 2)); //índice de masa corporal femenino
	const imcm = peso.value / (Math.pow(altura.value / 100, 2)); //índice de masa corporal masculino
	const agua = 35 * peso.value; //Agua que debe consumir al día
	const pesoIdeal = (altura.value / 100) * (altura.value / 100) * (21.745); //Peso ideal
	const resta = (peso.value - pesoIdeal) * -1;
	const grasaCorporalM = (1.2 * imcm) + (0.23 * edad.value) -10.8 -5.4; //Grasa corporal masculino
	const grasaCorporalF = (1.2 * imcf) + (0.23 * edad.value) -5.4; //Grasa corporal femenino
	const mgcm = (peso.value * grasaCorporalM) / (100); //Masa de grasa corporal masculino
	const mgcf = (peso.value * grasaCorporalF) / (100); //Masa de grasa corporal femenino
	const mcmm = (peso.value - mgcm); //Masa corporal magra masculino
	const mcmf = (peso.value - mgcf); //Masa corporal magra femenino
	const bpm = (rcm - rcm * 0.17) //Bajar de peso masculino
	const bpf = (rcf - rcf * 0.17) //Bajar de peso femenino
	const spm = (rcm + rcm * 0.17) //Subir de peso masculino
	const spf = (rcf + rcf * 0.17) //Subir de peso femenino
	const proteinas = Math.floor(peso.value * 1.75); //Proteínas en gramos
	const grasas = Math.floor(peso.value * 0.8); //Grasas en gramos
	const kcalProteinas = proteinas * 4; //kcal en proteínas
	const kcalGrasas = grasas * 9; //kcal en grasas

	let rcObjetivo; // Requerimiento calórico Objetivo
	if (sexo.value == "m") {
	  switch (objetivo.value) {
		case '1':
		  rcObjetivo = bpm;
		  break;
		case '2':
		  rcObjetivo = spm;
		  break;
	  }
	} else {
	  switch (objetivo.value) {
		case '1':
		  rcObjetivo = bpf;
		  break;
		case '2':
		  rcObjetivo = spf;
		  break;
	  }
	}
	
	console.log(rcObjetivo);	
	
	const kcalCarbohidratos = rcObjetivo - kcalProteinas - kcalGrasas;
	const carbohidratos = kcalCarbohidratos / 4;

	let txt;
	let txt2;
	let result;
	let title;

	console.log(`Peso Ideal: ${pesoIdeal}`);
	console.log(`Requerimiento calórico objetivo: ${rcObjetivo}`);
	console.log(`Proteínas en kcal: ${kcalProteinas}`);
	console.log(`Proteínas en gramos: ${proteinas}`);
	console.log(`Grasas en kcal: ${kcalGrasas}`);
	console.log(`Grasas en gramos: ${grasas}`);
	console.log(`Carbohidratos en kcal: ${kcalCarbohidratos}`);
	console.log(`Carbohidratos en gramos: ${carbohidratos}`);

	if (resta > 1) {
		txt = `debe subir de peso <span>${resta.toFixed(2)}</span> kilos para estar en su peso ideal.`;
	} else if(resta == 0){
		txt = `felicidades por tener un cuerpo saludable uwu.`;
	} else{
		txt = `debe bajar de peso <span>${resta.toFixed(2)}</span> kilos para estar en su peso ideal.`;
	}

	if (imcm < 18.5) {
		txt2 = `usted está en un <b>peso bajo</b>`;
	} else if (imcm >= 18.5 && imcm <= 24.9){
		txt2 = `usted está entre el rango de un <b>peso normal</b>`;
	} else if (imcm > 24.9 && imcm <= 29.9){
		txt2 = `usted tiene <b>sobrepeso</b>`;
	} else if (imcm > 29.9 && imcm <= 34.9){
		txt2 = `usted tiene <b>obesidad</b>`;
	} else{
		txt2 = `usted tiene <b>obesidad morbida</b>`;
	}

	resultado.classList.remove('dis');
	resultado.classList.add('res');

	if (sexo.value == "m") {
		if(objetivo.value == 1){
			result = bpm;
			title = 'Calorías para perder grasa';
		} else{
			result = spm;
			title = 'Calorías para ganar músculo';
		}
		resultado.innerHTML = `
		<div class="container">
			<br>
			<p>Bienvenido <b>${nombre.value},</b> ${txt2}, ${txt}</p><br>
			<p><b>Su peso ideal es:</b> <span>${pesoIdeal.toFixed(2)}kg.</span> Sin embargo, su peso también puede considerarse saludable si se mantiene entre
			los <span>${(parseFloat(pesoIdeal) - 9).toFixed(2)}</span> y <span>${(parseFloat(pesoIdeal) + 9).toFixed(2)}</span> kg.</p><br>
			<p><b>Metabolismo basal:</b><span> ${mbm.toFixed(2)}</span></p>
			<p>Es la cantidad de energía necesaria para mantener los procesos vitales estando en reposo.</p><br>
			<p><b>Requerimiento Calórico:</b><span> ${rcm.toFixed(2)}</span></p>
			<p>Es la ingesta diaria de calorías recomendada de una persona para mantener su peso actual.</p><br>
			<p><b>${title}:</b><span> ${result.toFixed(2)}</span></p><br>
			<p><b>IMC:</b><span> ${imcm.toFixed(2)}</span> </p>
			<p>El índice de masa corporal (IMC) sirve para medir la relación entre el peso y la talla, lo que  permite identificar el sobrepeso y la obesidad en adultos.</p><br>
			<p><b>Grasa Corporal:</b><span> ${grasaCorporalM.toFixed(2)}%</span> </p>
			<p><b>La masa de grasa corporal es de:</b><span> ${mgcm.toFixed(2)} kg</span> </p>
			<p><b>La masa corporal magra es:</b><span> ${mcmm.toFixed(2)} kg</span> </p><br>
			<p><b>Usted debería tomar:</b><span> ${agua.toFixed(2)}ml </span> de agua al día.</p> <br>
		</div>
		 `;

	} else{
		if(objetivo.value == 1){
			result = bpf;
			title = 'Calorías para perder grasa';
		} else{
			result = spf;
			title = 'Calorías para ganar músculo';
		}
		resultado.innerHTML = `
		<div class="container">
			<br>
			<p>Bienvenida <b>${nombre.value},</b> ${txt2}, ${txt}</p><br>
			<p><b>Su peso ideal es:</b> <span>${pesoIdeal.toFixed(2)}kg.</span> Sin embargo, su peso también puede considerarse saludable si se mantiene entre
			los <span>${(parseFloat(pesoIdeal) - 9).toFixed(2)}</span> y <span>${(parseFloat(pesoIdeal) + 9).toFixed(2)}</span> kg.</p><br>
			<p><b>Metabolismo basal:</b><span> ${mbf.toFixed(2)}</span></p>
			<p>Es la cantidad de energía necesaria para mantener los procesos vitales estando en reposo.</p><br>
			<p><b>Requerimiento Calórico:</b><span> ${rcf.toFixed(2)}</span></p>
			<p>Es la ingesta diaria de calorías recomendada de una persona para mantener su peso actual.</p><br> 
			<p><b>${title}:</b><span>${result.toFixed(2)}</span></p><br>
			<p><b>IMC:</b><span> ${imcf.toFixed(2)}</span> </p>
			<p>El índice de masa corporal (IMC) sirve para medir la relación entre el peso y la talla, lo que  permite identificar el sobrepeso y la obesidad en adultos.</p><br>
			<p><b>Grasa Corporal:</b><span> ${grasaCorporalF.toFixed(2)}%</span> </p>
			<p><b>La masa de grasa corporal es de:</b><span> ${mgcf.toFixed(2)} kg</span> </p>
			<p><b>La masa corporal magra es de:</b><span> ${mcmf.toFixed(2)} kg</span></p> <br>
			<p><b>Usted debería tomar:</b><span> ${agua.toFixed(2)} ml </span> de agua al día.</p> <br>
		</div>
		 `;
	}

	console.log(objetivo.value)

	window.location.href = "#res_";
})

