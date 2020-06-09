function sendEmail()
{
	name = document.getElementById('name').value;
	Email.send({
    	Host : "smtp.gmail.com",
    	Username : "mangulomx@gmail.com",
    	Password : "Ma26237830",
    	To : 'mangulomx@gmail.com',
    	From : "mangulomx@gmail.com",
    	Subject : "Formulario de contacto",
    	Body : "nombre "+name
	}).then(
  		message => alert("Formulario enviado correctamente!")
	);
}