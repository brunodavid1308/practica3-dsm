var express = require('express');
var port = process.env.PORT || 3000;
var app=express();
var path = require('path');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended:false});

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static('public'));


app.get('/',function(request,response){
	response.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.get('/about',function(request,response){
	response.sendFile(path.join(__dirname, '/public', 'about.html'));
});

app.get('/productos',function(request,response){
	response.sendFile(path.join(__dirname, '/public', 'productos.html'));
});
app.get('/contacto',function(request,response){
	response.sendFile(path.join(__dirname, '/public', 'contacto.html'));
});
app.get('/mando',function(request,response){
	response.render('index',{
		modelo: 'Mando inalámbrico-Sony PS4',
		dir: '/1_large.png',
		precio: '59.99€',
		descripcion: 'El mando oficial de la nueva generación de consolas de Sony ya esta aquí: Dual Shock 4. Además de joysticks más precisos y sensores de movimiento incorporados, DUALSHOCK®4 cuenta también con controles táctiles y el botón SHARE, una inspiración para experimentar nuevas formas de jugar.'
	});
});

app.get('/portatil',function(request,response){
	response.render('index',{
		modelo: 'ASUS Transformer Book T101HA',
		dir: '/3_large.png',
		precio: '659.99€',
		descripcion: 'Cuando diseñamos la tableta del Transformer Book T101HA, utilizamos aluminio para lograr que fuera robusta, ligera y fina. Su tacto es espectacular y es capaz de resistir los rigores del día a día. Está disponible en tres alegres colores, oro glacial, oro rosa y verde menta, para que elijas el T101HA que mejor se ajusta a tu estilo. El patrón de panal de abeja del teclado le da un toque especial, se han cuidado hasta los detalles más nimios.'
	});
});

app.get('/imac',function(request,response){
	response.render('index',{
		modelo: 'Apple iMac',
		dir: '/2_large.png',
		precio: '1250.99€',
		descripcion: 'Ser un ordenador de mesa deslumbrante en todos los sentidos. Ese ha sido siempre el objetivo del iMac. Y ahora, con procesadores nuevos, lo último en gráficos y en almacenamiento y conexiones ultrarrápidas cumple la misión con creces. El iMac ha vuelto y su estrella brilla cada vez más.'
	});
});

app.post('/contacto2',parseUrlencoded,function(request,response){
	var nombre = request.body.nombre;
    var apellido = request.body.apellido;
    var genero = request.body.genero;
    var edad = request.body.edad;
	var ciudad = request.body.ciudad;
	var provincia = request.body.provincia;
	var codigo = request.body.codigo;
    var email = request.body.email;
    var direccion = request.body.direccion;

    response.render('contacto',{
		nombre: nombre,
		apellido: apellido,
		genero: genero,
		edad: edad,
		ciudad: ciudad,
		provincia: provincia,
		codigo: codigo,
		email: email,
		direccion: direccion
	});
});
app.get('/webserve/1',function(request,response){
	var articulo = {'Modelo':'Mando inalámbrico-Sony PS4','dir': '/1_large.png','Precio':'59.99€','Stock':'Disponible'};
	response.json(articulo);
});

app.get('/webserve/2',function(request,response){
	var articulo = {'Modelo':'ASUS Transformer Book T101HA','dir': '/3_large.png','Precio':'659.99€','Stock':'No Disponible'};
	response.json(articulo);
});

app.get('/webserve/3',function(request,response){
	var articulo = {'Modelo':'Apple iMac','dir': '/2_large.png','Precio':'1250.99€','Stock':'Disponible'};
	response.json(articulo);
});

app.listen(port);