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

palettes.addEventListener("click",(p)=>{
	document.documentElement.style.setProperty('--primary', `${color.value}`);
	document.documentElement.style.setProperty('--secundary', `${color2.value}`);
})

boton.addEventListener("click",(e)=>{
	e.preventDefault();


	mbf = 10 * peso.value + 6.25 * altura.value - 5 * edad.value - 161;
	mbm = 10 * peso.value + 6.25 * altura.value - 5 * edad.value  + 5;
	mbf1 = mbm * actividad.value;
	mbf2 = mbf * actividad.value;
	imcf = peso.value / (Math.pow(altura.value / 100, 2));
	imcm = peso.value / (Math.pow(altura.value / 100, 2));
	agua = 35 * peso.value;
	pesoIdeal = (altura.value / 100) * (altura.value / 100) * (21.745);
	resta = (peso.value - pesoIdeal) * -1;
	grasaCorporalM = (1.2 * imcm) + (0.23 * edad.value) -10.8 -5.4;
	grasaCorporalF = (1.2 * imcf) + (0.23 * edad.value) -5.4;
	mgcm = (peso.value * grasaCorporalM) / (100);
	mgcf = (peso.value * grasaCorporalF) / (100);
	mcmm = (peso.value - mgcm);
	mcmf = (peso.value - mgcf);
	console.log(pesoIdeal);

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
	
/*  <p>Bienvenido <b>${nombre.value},</b> ${txt2}, ${txt}</p><br> */
/* 	<p><b>Peso mínimo de:</b><span> ${(parseFloat(pesoIdeal).toFixed(2) - 9).toFixed(2)} Kilos</span> </p> <br> */
/* <p><b>Su peso ideal es de:</b><span> ${pesoIdeal.toFixed(2)} Kilos</span> </p> <br></br> */
/*  <p><b>Peso máximo de:</b><span> ${(parseFloat(pesoIdeal) + 9).toFixed(2)} Kilos</span> </p> <br> */

	if (sexo.value == "m") {
		resultado.innerHTML = `
		<div class="container">
			<br>
			<p>Bienvenido <b>${nombre.value},</b> ${txt2}, ${txt}</p><br>
			<p><b>Su peso ideal es:</b> <span>${pesoIdeal.toFixed(2)}kg.</span> Sin embargo, su peso también puede considerarse saludable si se mantiene entre
			los <span>${(parseFloat(pesoIdeal) - 9).toFixed(2)}</span> y <span>${(parseFloat(pesoIdeal) + 9).toFixed(2)}</span> kg.</p><br>
			<p><b>Metabolismo basal:</b><span> ${mbm.toFixed(2)}</span></p>
			<p>Es la cantidad de energía necesaria para mantener los procesos vitales estando en reposo.</p><br>
			<p><b>Requerimiento Calórico:</b><span> ${mbf1.toFixed(2)}</span></p>
			<p>Es la ingesta diaria de calorías recomendada de una persona para mantener su peso actual.</p><br>
			<p><b>IMC:</b><span> ${imcm.toFixed(2)}</span> </p>
			<p>El índice de masa corporal (IMC) sirve para medir la relación entre el peso y la talla, lo que  permite identificar el sobrepeso y la obesidad en adultos.</p><br>
			<p><b>Grasa Corporal:</b><span> ${grasaCorporalM.toFixed(2)}%</span> </p>
			<p><b>La masa de grasa corporal es de:</b><span> ${mgcm.toFixed(2)} kg</span> </p>
			<p><b>La masa corporal magra es:</b><span> ${mcmm.toFixed(2)} kg</span> </p><br>
			<p><b>Usted debería tomar:</b><span> ${agua.toFixed(2)}ml </span> de agua al día.</p> <br>
		</div>
		 `;

	} else{
		resultado.innerHTML = `
		<div class="container">
			<br>
			<p>Bienvenida <b>${nombre.value},</b> ${txt2}, ${txt}</p><br>
			<p><b>Su peso ideal es:</b> <span>${pesoIdeal.toFixed(2)}kg.</span> Sin embargo, su peso también puede considerarse saludable si se mantiene entre
			los <span>${(parseFloat(pesoIdeal) - 9).toFixed(2)}</span> y <span>${(parseFloat(pesoIdeal) + 9).toFixed(2)}</span> kg.</p><br>
			<p><b>Metabolismo basal:</b><span> ${mbf.toFixed(2)}</span></p>
			<p>Es la cantidad de energía necesaria para mantener los procesos vitales estando en reposo.</p><br>
			<p><b>Requerimiento Calórico:</b><span> ${mbf2.toFixed(2)}</span></p>
			<p>Es la ingesta diaria de calorías recomendada de una persona para mantener su peso actual.</p><br>
			<p><b>IMC:</b><span> ${imcf.toFixed(2)}</span> </p>
			<p>El índice de masa corporal (IMC) sirve para medir la relación entre el peso y la talla, lo que  permite identificar el sobrepeso y la obesidad en adultos.</p><br>
			<p><b>Grasa Corporal:</b><span> ${grasaCorporalF.toFixed(2)}%</span> </p>
			<p><b>La masa de grasa corporal es de:</b><span> ${mgcf.toFixed(2)} kg</span> </p>
			<p><b>La masa corporal magra es de:</b><span> ${mcmf.toFixed(2)} kg</span></p> <br>
			<p><b>Usted debería tomar:</b><span> ${agua.toFixed(2)} ml </span> de agua al día.</p> <br>
		</div>

		 `;
	}

	window.location.href = "#res_";
})

