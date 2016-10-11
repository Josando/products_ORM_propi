////////////////////////////////////////////////////////////////
function load_products_ajax() {
    $.ajax({
        type: 'GET',
        url: "modules/products/controller/controller_products.class.php?load=true",
        //dataType: 'json',
        async: false
    }).success(function (data) {
        var json = JSON.parse(data);
        console.log("Hola");

         console.log(json.products.name);
        //alert(json.user.usuario);

        list_products(json);

    }).fail(function (xhr) {
        alert(xhr.responseText);
    });
}

////////////////////////////////////////////////////////////////

function load_users_get_v1() {
    $.get("modules/products/controller/controller_products.class.php?load=true", function (data, status) {
        var json = JSON.parse(data);
        //$( "#content" ).html( json.msje );
        //alert("Data: " + json.user.usuario + "\nStatus: " + status);

        list_products(json);
    });
}

////////////////////////////////////////////////////////////////
function load_users_get_v2() {
    var jqxhr = $.get("modules/products/controller/controller_products.class.php?load=true", function (data) {
        var json = JSON.parse(data);
        console.log(json);
        list_products(json);
        //alert( "success" );
    }).done(function () {
        //alert( "second success" );
    }).fail(function () {
        //alert( "error" );
    }).always(function () {
        //alert( "finished" );
    });

    jqxhr.always(function () {
        //alert( "second finished" );
    });
}

$(document).ready(function () {
    //load_products_ajax();
    //load_users_get_v1();
    load_users_get_v2();
});

function list_products(data) {

    console.log(data);
    //alert(data.user.avatar);
    var content = document.getElementById("content");
    var div_products = document.createElement("div");
    var parrafo = document.createElement("p");

    var msje = document.createElement("div");
    msje.innerHTML = "msje = ";
    msje.innerHTML += data.msje;
    console.log(data.msje);

    var name = document.createElement("div");
   name.innerHTML = "Name = ";
   name.innerHTML += data.products.name;

    var code = document.createElement("div");
    code.innerHTML = "Code = ";
    code.innerHTML += data.products.code;

    origin = document.createElement("div");
    origin.innerHTML = "Origin = ";
    origin.innerHTML += data.products.origin;

    var provider = document.createElement("div");
    provider.innerHTML = "Provider = ";
    provider.innerHTML += data.products.provider;

    var email = document.createElement("div");
    email.innerHTML = "Email = ";
    email.innerHTML += data.products.email;

    var price = document.createElement("div");
    price.innerHTML = "Price = ";
    price.innerHTML += data.products.price;

    var description = document.createElement("div");
    description.innerHTML = "Description = ";
    description.innerHTML += data.products.description;

    var stock = document.createElement("div");
    stock.innerHTML = "Stock = ";
    stock.innerHTML += data.products.stock;

    var material = document.createElement("div");
    material.innerHTML = "Material = ";
    for(var i =0;i < data.products.material.length;i++){
    material.innerHTML += " - "+data.products.material[i];
    }

    var date_reception = document.createElement("div");
    date_reception.innerHTML = "Date_reception = ";
    date_reception.innerHTML += data.products.date_reception;

    var departure_date = document.createElement("div");
    departure_date.innerHTML = "Departure_date = ";
    departure_date.innerHTML += data.products.departure_date;

    var type = document.createElement("div");
    type.innerHTML = "Sholve type = ";
    type.innerHTML += data.products.type;

    var shape = document.createElement("div");
    shape.innerHTML = "Shape Sholve= ";
    shape.innerHTML += data.products.shape;

    var brand = document.createElement("div");
    brand.innerHTML = "Sholve brand = ";
    brand.innerHTML += data.products.brand;

    //arreglar ruta IMATGE!!!!!

    var cad = data.products.avatar;
    console.log(cad);
    //var cad = cad.toLowerCase();
    var img = document.createElement("div");
    var html = '<img src="' + cad + '" height="75" width="75"> ';
    img.innerHTML = html;
    //alert(html);

    div_products.appendChild(parrafo);
    parrafo.appendChild(msje);
    parrafo.appendChild(name);
    parrafo.appendChild(code);
    parrafo.appendChild(origin);
    parrafo.appendChild(provider);
    parrafo.appendChild(price);
    parrafo.appendChild(description);
    parrafo.appendChild(stock);
    parrafo.appendChild(material);
    parrafo.appendChild(date_reception);
    parrafo.appendChild(departure_date);
    parrafo.appendChild(type);
    parrafo.appendChild(shape);
    parrafo.appendChild(brand);
    content.appendChild(div_products);
    content.appendChild(img);
}
