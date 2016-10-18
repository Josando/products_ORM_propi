//Crear un plugin

jQuery.fn.fill_or_clean = function () {
    this.each(function () {

        if ($("#name").attr("value") == "") {
            $("#name").attr("value", "Enter name");
            $("#name").focus(function () {
                if ($("#name").attr("value") == "Enter name") {
                    $("#name").attr("value", "");
                }
            });
        }
        $("#name").blur(function () { //Onblur se activa cuando el usuario retira el foco
            if ($("#name").attr("value") == "") {
                $("#name").attr("value", "Enter name");
            }
        });



        if ($("#code").attr("value") == "") {
            $("#code").attr("value", "Enter code");
            $("#code").focus(function () {
                if ($("#code").attr("value") == "Enter code") {
                    $("#code").attr("value", "");
                }
            });
        }
        $("#code").blur(function () {
            if ($("#code").attr("value") == "") {
                $("#code").attr("value", "Enter code");
            }
        });
        if ($("#origin").attr("value") == "") {
            $("#origin").attr("value", "Enter origin");
            $("#origin").focus(function () {
                if ($("#origin").attr("value") == "Enter origin") {
                    $("#origin").attr("value", "");
                }
            });
        }
        $("#origin").blur(function () {
            if ($("#origin").attr("value") == "") {
                $("#origin").attr("value", "Enter origin");
            }
        });
        if ($("#provider").attr("value") == "") {
            $("#provider").attr("value", "Enter provider");
            $("#provider").focus(function () {
                if ($("#provider").attr("value") == "Enter provider") {
                    $("#provider").attr("value", "");
                }
            });
        }
        $("#provider").blur(function () {
            if ($("#provider").attr("value") == "") {
                $("#provider").attr("value", "Enter provider");
            }
        });
        if ($("#email").attr("value") == "") {
            $("#email").attr("value", "Enter email");
            $("#email").focus(function () {
                if ($("#email").attr("value") == "Enter email") {
                    $("#email").attr("value", "");
                }
            });
        }
        $("#email").blur(function () {
            if ($("#email").attr("value") == "") {
                $("#email").attr("value", "Enter email");
            }
        });
        if ($("#price").attr("value") == "") {
            $("#price").attr("value", "Enter price");
            $("#price").focus(function () {
                if ($("#price").attr("value") == "Enter price") {
                    $("#price").attr("value", "");
                }
            });
        }
        $("#price").blur(function () {
            if ($("#price").attr("value") == "") {
                $("#price").attr("value", "Enter price");
            }
        });
        if ($("#description").val() == "") {
            $("#description").val("Enter description");
            $("#description").focus(function () {
                if ($("#description").val() == "Enter description") {
                    $("#description").val("");
                }
            });
        }
        $("#description").blur(function () {
            if ($("#description").val() == "") {
                $("#description").val("Enter description");
            }
        });
        if ($("#date_reception").attr("value") == "") {
            $("#date_reception").attr("value", "Enter date reception");
            $("#date_reception").focus(function () {
                if ($("#date_reception").attr("value") == "Enter date reception") {
                    $("#date_reception").attr("value", "");
                }
            });
        }
        $("#date_reception").blur(function () {
            if ($("#date_reception").attr("value") == "") {
                $("#date_reception").attr("value", "Enter date reception");
            }
        });
        if ($("#departure_date").attr("value") == "") {
            $("#departure_date").attr("value", "Enter depurate date");
            $("#departure_date").focus(function () {
                if ($("#departure_date").attr("value") == "Enter depurate date") {
                    $("#departure_date").attr("value", "");
                }
            });
        }
        $("#departure_date").blur(function () {
            if ($("#departure_date").attr("value") == "") {
                $("#departure_date").attr("value", "Enter depurate date");
            }
        });


    });//each
    return this;

};//function

Dropzone.autoDiscover = false;
$(document).ready(function () {


  			$(function() {

    		$('#date_reception').datepicker({
			dateFormat: 'dd/mm/yy',
			changeMonth: true,
			changeYear: true,
			yearRange: '1940:2020',

			onSelect: function(selectedDate) {

			}
		});


  		});

  		$(function() {

    		$('#departure_date').datepicker({
			dateFormat: 'dd/mm/yy',
			changeMonth: true,
			changeYear: true,
			yearRange:  '2000:9999',//'1900:' + new Date().getFullYear(),

			onSelect: function(selectedDate) {

			}
		});


  		});

      //Control de seguridad para evitar que al volver atrás de la pantalla results a create, no nos imprima los datos
   $.get("modules/products/controller/controller_products.class.php?load_data=true",
           function (response) {
               //console.log(response.products);
               if (response.products === "") {
                   $("#name").val('');
                   $("#code").val('');
                   $("#origin").val('');
                   $("#provider").val('');
                   $("#email").val('');
                   $("#price").val('');
                   $("#description").val('');
                   $("#date_reception").val('');
                   $("#departure_date").val('');
                   $("#type").val('Select type');
                   $("#shape").val('Select Shape');
                   $("#brand").val('Select brand');
                   var inputElements = document.getElementsByClassName('messageCheckbox');
                   for (var i = 0; i < inputElements.length; i++) {
                       if (inputElements[i].checked) {
                           inputElements[i].checked = false;
                       }
                   }
                   //siempre que creemos un plugin debemos llamarlo, sino no funcionará
   $(this).fill_or_clean();
               } else {
                   $("#name").val( response.products.name);
                   $("#code").val( response.products.code);
                   $("#origin").val( response.products.origin);
                   $("#provider").val( response.products.provider);
                   $("#email").val( response.products.email);
                   $("#price").val( response.products.price);
                   $("#description").val( response.products.description);
                   $("#date_reception").val( response.products.date_reception);
                   $("#departure_date").val( response.products.departure_date);
                   $("#type").val( response.products.type);
                   $("#shape").val( response.products.shape);
                   $("#brand").val( response.products.brand);
                   var material = response.products.material;
                   var inputElements = document.getElementsByClassName('messageCheckbox');
                   for (var i = 0; i < material.length; i++) {
                       for (var j = 0; j < inputElements.length; j++) {
                           if(material[i] ===inputElements[j] )
                               inputElements[j].checked = true;
                       }
                   }
               }
           }, "json");



    //Dropzone function //////////////////////////////////
    $("#dropzone").dropzone({
        url: "modules/products/controller/controller_products.class.php?upload=true",
        addRemoveLinks: true,
        maxFileSize: 1000,
        dictResponseError: "Ha ocurrido un error en el server",
        acceptedFiles: 'image/*,.jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF,.rar,application/pdf,.psd',
        init: function () {
            this.on("success", function (file, response) {
                //alert(response);

                console.log(response);
                console.log(file);
                $("#progress").show();
                $("#bar").width('100%');
                $("#percent").html('100%');
                $('.msg').text('').removeClass('msg_error');
                $('.msg').text('Success Upload image!!').addClass('msg_ok').animate({'right': '300px'}, 300);
            });
        },
        complete: function (file) {
            //if(file.status == "success"){
            //alert("El archivo se ha subido correctamente: " + file.name);
            //}
        },
        error: function (file) {
            //alert("Error subiendo el archivo " + file.name);
        },
        removedfile: function (file, serverFileName) {
            var name = file.name;
            $.ajax({
                type: "POST",
                url: "modules/products/controller/controller_products.class.php?delete=true",
                data: "filename=" + name,
                success: function (data) {
                    $("#progress").hide();
                    $('.msg').text('').removeClass('msg_ok');
                    $('.msg').text('').removeClass('msg_error');
                    $("#e_avatar").html("");
                    console.log(data);
                    console.log(name);
                    var json = JSON.parse(data);
                    console.log(json);
                    if (json.res === true) {
                        var element;
                        if ((element = file.previewElement) != null) {
                            element.parentNode.removeChild(file.previewElement);
                            //alert("Imagen eliminada: " + name);
                        } else {
                            false;
                        }
                    } else { //json.res == false, elimino la imagen también
                        var element;
                        if ((element = file.previewElement) != null) {
                            element.parentNode.removeChild(file.previewElement);
                        } else {
                            false;
                        }
                    }
                }
            });
        }
    });

    //$(this).fill_or_clean(); //siempre que creemos un plugin debemos llamarlo, sino no funcionará

    var email_reg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var date_reg = /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.](19|20)\d\d$/;
    var address_reg = /^[a-z0-9- -.]+$/i;
    var code_reg = /^[0-9a-zA-Z]{6,32}$/;
    var string_reg = /^[A-Za-z]{2,30}$/;
    var description_reg = /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/;
    var usr_reg = /^[0-9a-zA-Z]{2,20}$/;
    var origin_reg = /^[0-9a-zA-Z]{2,20}$/;
    var provider_reg = /^[0-9a-zA-Z]{2,20}$/;
    var price_reg = /^[0-9]{2,10}$/;


//////////////submit_product///////////

    $("#submit_product").click(function () {

        validate_products();

});








    //realizamos funciones para que sea más práctico nuestro formulario
    $("#name").keyup(function () {
        if ($(this).val() != "" && string_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#code").keyup(function () {
        if ($(this).val() != "" && code_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#origin").keyup(function () {
        if ($(this).val() != "" && origin_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#provider").keyup(function () {
        if ($(this).val() != "" &&  provider_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#email").keyup(function () {
        if ($(this).val() != "" && email_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#price").keyup(function () {
        if ($(this).val() != "" && price_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#description").keyup(function () {
        if ($(this).val() != "" && string_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#date_reception").keyup(function () {
        if ($(this).val() != "" && date_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#departure_date").keyup(function () {
        if ($(this).val() != "" && date_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });



});


function validate_products(){

    var result = true;
    //Get form elements by id
    var name = document.getElementById('name').value;
    var code = document.getElementById('code').value;
    var origin = document.getElementById('origin').value;
    var provider = document.getElementById('provider').value;
    var email = document.getElementById('email').value;
    var price = document.getElementById('price').value;
    var description = document.getElementById('description').value;
    var date_reception = document.getElementById('date_reception').value;
    var departure_date = document.getElementById('departure_date').value;
    var stock = "yes";
    if (document.getElementById('stock_yes').checked){
      stock = "yes";
    }else {
      stock = "no";
    }

    var type = document.getElementById('type').value;
    var shape = document.getElementById('shape').value;
    var brand = document.getElementById('brand').value;
    var material = [];
    var inputElements = document.getElementsByClassName('messageCheckbox');
    var j = 0;
    for (var i = 0; i < inputElements.length; i++) {
       if (inputElements[i].checked) {
           material[j] = inputElements[i].value;
           j++;
       }
   }




    var email_reg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var date_reg = /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.](19|20)\d\d$/;
    var address_reg = /^[a-z0-9- -.]+$/i;
    var code_reg = /^[0-9a-zA-Z]{6,32}$/;
    var string_reg = /^[A-Za-z]{2,30}$/;
    var description_reg = /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/;
    var usr_reg = /^[0-9a-zA-Z]{2,20}$/;
    var origin_reg = /^[0-9a-zA-Z]{2,20}$/;
    var provider_reg = /^[0-9a-zA-Z]{2,20}$/;
    var price_reg = /^[0-9]{2,10}$/;



    $(".error").remove();
        if ($("#name").val() == "" || $("#name").val() == "Enter name") {
            $("#name").focus().after("<span class='error'> Enter name</span>");
            result = false;
            return false;
        } else if (!string_reg.test($("#name").val())) {
            $("#name").focus().after("<span class='error'>Name must be 2 to 30 letters</span>");
            result = false;
            return false;
        }


        else if ($("#code").val() == "" || $("#code").val() == "Enter code") {
            $("#code").focus().after("<span class='error'>Enter code</span>");
             result = false;
            return false;
        } else if (!code_reg.test($("#code").val())) {
            $("#code").focus().after("<span class='error'>Code must be 6 to 30 letters</span>");
            result = false;
            return false;
        }

        else if ($("#origin").val() == "" || $("#origin").val() == "") {
            $("#origin").focus().after("<span class='error'>Enter origin</span>");
             result = false;
            return false;
        } else if (!origin_reg.test($("#origin").val())) {
            $("#origin").focus().after("<span class='error'>Origin must be 2 to 30 letters</span>");
             result = false;
            return false;
        }

        else if ($("#provider").val() == "" || $("#provider").val() == "Enter provider") {
            $("#provider").focus().after("<span class='error'>Code must be 6 to 30 letters</span>");
            result = false;
            return false;
        } else if (!provider_reg.test($("#provider").val())) {
            $("#provider").focus().after("<span class='error'>Enter provider</span>");
            result = false;
            return false;
        }

        if ($("#email").val() == "" || $("#email").val() == "Enter email") {
            $("#email").focus().after("<span class='error'>Enter email</span>");
            result = false;
            return false;
        } else if (!email_reg.test($("#email").val())) {
            $("#email").focus().after("<span class='error'>Email is not correct.</span>");
            result = false;
            return false;
        }

        if ($("#price").val() == "" || $("#price").val() == "Enter price") {
            $("#price").focus().after("<span class='error'>Enter price</span>");
            result = false;
            return false;
        } else if (!price_reg.test($("#price").val())) {
            $("#price").focus().after("<span class='error'>price must be 2 to 10 numbers</span>");
            result = false;
            return false;
        }

        if ($("#description").val() == "" || $("#description").val() == "Enter description") {
            $("#description").focus().after("<span class='error'>Enter description</span>");
            result = false;
            return false;
        } else if (!description_reg.test($("#description").val())) {
            $("#description").focus().after("<span class='error'>Description must be 2 to 30 characters.</span>");
            result = false;
            return false;
        }

        if ($("#date_reception").val() == "" || $("#date_reception").val() == "Enter date reception") {
            $("#date_reception").focus().after("<span class='error'>Enter date reception</span>");
            result = false;
            return false;
        } else if (!date_reg.test($("#date_reception").val())) {
            $("#date_reception").focus().after("<span class='error'>The date is not correct</span>");
            result = false;
            return false;
        }

        if ($("#departure_date").val() == "" || $("#departure_date").val() == "Enter departure date") {
            $("#departure_date").focus().after("<span class='error'>Enter departure date</span>");
            result = false;
            return false;
        } else if (!date_reg.test($("#departure_date").val())) {
            $("#departure_date").focus().after("<span class='error'>The date is not correct.</span>");
            result = false;
            return false;
        }



    console.log("Antes de que se envian los datos al servidor");
    //Si ha ido todo bien, se envian los datos al servidor

     if (result) {

        var data = {"name": name, "code": code, "origin": origin, "provider": provider, "email": email, "price": price, "description": description, "date_reception": date_reception,
        "departure_date": departure_date, "stock":stock, "type":type, "shape":shape, "brand":brand, "material":material};

        var data_products_JSON = JSON.stringify(data);

        console.log(data_products_JSON);

        $.post('modules/products/controller/controller_products.class.php',
                {discharge_products_json: data_products_JSON},
        function (response) {
            console.log("hola");
            console.log(response);
            if (response.success) {
                window.location.href = response.redirect;


        }
            //console.log(response.name);
            //console.log(response.redirect3.product_name);

        }, "json").fail(function (xhr) {
          //  console.log(xhr.responseJSON.error.brand);//devuelve si hay error en el nombre

            if (xhr.responseJSON.error.name)
              $("#name").focus().after("<span  class='error1'>" + xhr.responseJSON.error.name + "</span>");

            if (xhr.responseJSON.error.code)
              $("#code").focus().after("<span  class='error1'>" + xhr.responseJSON.error.code + "</span>");

            if (xhr.responseJSON.error.origin)
              $("#origin").focus().after("<span  class='error1'>" + xhr.responseJSON.error.origin + "</span>");

            if (xhr.responseJSON.error.provider)
              $("#provider").focus().after("<span  class='error1'>" + xhr.responseJSON.error.provider + "</span>");

            if (xhr.responseJSON.error.email)
              $("#email").focus().after("<span  class='error1'>" + xhr.responseJSON.error.email + "</span>");

            if (xhr.responseJSON.error.price)
              $("#price").focus().after("<span  class='error1'>" + xhr.responseJSON.error.price + "</span>");

            if (xhr.responseJSON.error.description)
              $("#description").focus().after("<span  class='error1'>" + xhr.responseJSON.error.description + "</span>");

            if (xhr.responseJSON.error.date_reception)
              $("#date_reception").focus().after("<span  class='error1'>" + xhr.responseJSON.error.date_reception + "</span>");

            if (xhr.responseJSON.error.departure_date)
              $("#departure_date").focus().after("<span  class='error1'>" + xhr.responseJSON.error.departure_date + "</span>");

            if (xhr.responseJSON.error.type){
              $("#e_type").html("<span  class='error1'>" + xhr.responseJSON.error.type + "</span>")//focus().after("<span  class='error1'>" + xhr.responseJSON.error.type + "</span>");
            }else {
              $("#e_type").empty();//Ejemplo de como se borraria el error al corregirlo. Se cambia focus().after por html y funciona.
              }

            if (xhr.responseJSON.error.shape){
              $("#shape").focus().after("<span  class='error1'>" + xhr.responseJSON.error.shape + "</span>");
            }else {
            //  $("span").remove(".error1");
            }


            if (xhr.responseJSON.error.brand){
              $("#brand").focus().after("<span  class='error1'>" + xhr.responseJSON.error.brand + "</span>");
            }else {
            //  $("span").remove(".error1");
            }

            if (xhr.responseJSON.error.material){
              $("#material").focus().after("<span  class='error1'>" + xhr.responseJSON.error.material + "</span>");
            }else {
            //  $("span").remove(".error1");
            }
        });
    }


}
