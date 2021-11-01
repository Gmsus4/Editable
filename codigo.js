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
	mbf1 = Math.round((mbm * actividad.value)*100) / 100;
	mbf2 = Math.round((mbf * actividad.value)*100) / 100;
	imcf = Math.round((peso.value) / (Math.pow(altura.value / 100, 2)) * 100) / (100);
	imcm = Math.round((peso.value) / (Math.pow(altura.value / 100, 2)) * 100) / (100);
	agua = 35 * peso.value;
	pesoIdeal = Math.floor(Math.round((altura.value / 100)*(altura.value / 100) * (21.745)));
	resta = (peso.value - pesoIdeal) * -1;
	grasaCorporalM = Math.round(((1.2 * imcm) + (0.23 * edad.value) -10.8 -5.4) * (100)) / (100);
	grasaCorporalF = Math.round(((1.2 * imcf) + (0.23 * edad.value) -5.4) * (100)) / (100);
	mgcm = Math.round((peso.value * grasaCorporalM) / (100)*(100)) / (100);
	mgcf = Math.round((peso.value * grasaCorporalF) / (100)*(100)) / (100);
	mcmm = Math.round((peso.value - mgcm)* 100) / 100;
	mcmf = Math.round((peso.value - mgcf)* 100) / 100;

	if (resta > 1) {
		txt = `debe subir de peso <span>${resta}</span> kilos para estar en su peso ideal.`;
	} else if(resta == 0){
		txt = `felicidades por tener un cuerpo saludable uwu.`;
	} else{
		txt = `debe bajar de peso <span>${resta}</span> kilos para estar en su peso ideal.`;
	}

	if (imcm < 18.5) {
		txt2 = `usted está en un <b>peso bajo</b>`;
	} else if (imcm >= 18.5 && imcm <= 24.9){
		txt2 = `usted está entre el rango de un <b>peso ideal</b>`;
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
		resultado.innerHTML = `
		<div class="container">
			<br>
			<p>Bienvenido <b>${nombre.value},</b> ${txt2}, ${txt}</p><br>
			<p><b>Su peso ideal es de:</b><span> ${pesoIdeal} Kilos</span> </p> <br>
			<p><b>Metabolismo basal:</b><span> ${mbm}</span></p>
			<p>Es la cantidad de energía necesaria para mantener los procesos vitales estando en reposo.</p><br>
			<p><b>Requerimiento Calórico:</b><span> ${mbf1}</span></p>
			<p>Es la ingesta diaria de calorías recomendada de una persona para mantener su peso actual.</p><br>
			<p><b>IMC:</b><span> ${imcm}</span> </p>
			<p>El índice de masa corporal (IMC) sirve para medir la relación entre el peso y la talla, lo que  permite identificar el sobrepeso y la obesidad en adultos.</p><br>
			<p><b>Grasa Corporal:</b><span> ${grasaCorporalM}%</span> </p>
			<p><b>La masa de grasa corporal es de:</b><span> ${mgcm} kg</span> </p>
			<p><b>La masa corporal magra es:</b><span> ${mcmm} kg</span> </p><br>
			<p><b>Usted debería tomar:</b><span> ${agua} ml de agua</span> al día.</p> <br>
		</div>
		 `;

	} else{
		resultado.innerHTML = `
		<div class="container">
			<br>
			<p>Bienvenida <b>${nombre.value},</b> ${txt2}, ${txt}</p><br>
			<p><b>Su peso ideal es de:</b><span> ${pesoIdeal} Kilos</span> </p> <br>
			<p><b>Metabolismo basal:</b><span> ${mbf}</span></p>
			<p>Es la cantidad de energía necesaria para mantener los procesos vitales estando en reposo.</p><br>
			<p><b>Requerimiento Calórico:</b><span> ${mbf2}</span></p>
			<p>Es la ingesta diaria de calorías recomendada de una persona para mantener su peso actual.</p><br>
			<p><b>IMC:</b><span> ${imcf}</span> </p>
			<p>El índice de masa corporal (IMC) sirve para medir la relación entre el peso y la talla, lo que  permite identificar el sobrepeso y la obesidad en adultos.</p><br>
			<p><b>Grasa Corporal:</b><span> ${grasaCorporalF}%</span> </p>
			<p><b>La masa de grasa corporal es de:</b><span> ${mgcf} kg</span> </p>
			<p><b>La masa corporal magra es de:</b><span> ${mcmf} kg</span></p> <br>
			<p><b>Usted debería tomar:</b><span> ${agua} ml de agua</span> al día.</p> <br>
		</div>

		 `;
	}

	window.location.href = "#res_";
})

