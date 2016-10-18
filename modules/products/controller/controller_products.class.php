<?php

//include  with absolute route
include ($_SERVER['DOCUMENT_ROOT'] . "/products_ORM_propi/modules/products/utils/functions_products.inc.php");
include ($_SERVER['DOCUMENT_ROOT'] . "/products_ORM_propi/utils/upload.php");
include ($_SERVER['DOCUMENT_ROOT'] . "/products_ORM_propi/utils/common.inc.php");

session_start();

	if ((isset($_POST['discharge_products_json']))) {

	  	discharge_products();
	}

	function discharge_products() {//Ahora que se que funciona dropzone implemento la funcion completa de cargar los productos
	  	$jsondata = array();
			$productsJSON = json_decode($_POST["discharge_products_json"], true);

	//	$jsondata["name"]=$productsJSON['name'];

	//	$jsondata["success"]=true;

	//  echo json_encode($jsondata);

	  	$result = validate_products($productsJSON);

	//	$result['resultado']=true;

    	if (empty($_SESSION['result_avatar'])) {
        $_SESSION['result_avatar'] = array('resultado' => true, 'error' => "", 'datos' => 'media/default-avatar.png');
    	}

    	$result_avatar = $_SESSION['result_avatar'];

	   if (($result['resultado']) && ($result_avatar['resultado'])) {
        $arrArgument = array(
            'name' => ucfirst($result['datos']['name']),
            'code' => ($result['datos']['code']),
           'origin' => $result['datos']['origin'],
            'provider' => $result['datos']['provider'],
            'email' => $result['datos']['email'],
            'price' => $result['datos']['price'],
            'description' => ucfirst($result['datos']['description']),
            'material' => $result['datos']['material'],
            'type' => ($result['datos']['type']), //strtoupper > para convertir string a mayusculas
            'shape' => ($result['datos']['shape']),
            'brand' => ($result['datos']['brand']),
            'stock' => $result['datos']['stock'],
            'date_reception' => $result['datos']['date_reception'],
            'departure_date' => $result['datos']['departure_date'],
        	  'avatar' => $result_avatar['datos']

        );

				/////////////////insert into BD////////////////////////
        $arrValue = false;
        $path_model = $_SERVER['DOCUMENT_ROOT'] . '/products_ORM_propi/modules/products/model/model/';
        $arrValue = loadModel($path_model, "products_model", "create_products", $arrArgument);
        //echo json_encode($arrValue);
      //  exit();

        if ($arrValue)
            $mensaje = "User has been successfully registered";
        else
            $mensaje = "No se ha podido realizar su alta. Intentelo mas tarde";




        //redirigir a otra p�gina con los datos de $arrArgument y $mensaje
        $_SESSION['products'] = $arrArgument;
        $_SESSION['msje'] = $mensaje;
        $callback = "index.php?module=products&view=results_products";
        $jsondata["redirect1"]= $result_avatar['datos'];
        $jsondata["success"] = true;
        $jsondata["redirect"] = $callback;
         //$jsondata["redirect1"] =  $_SESSION['products']['avatar'];
        //$jsondata["redirect1"] =  $result['datos']['name'];
        echo json_encode($jsondata);
        exit;
        //redirect($callback);
    } else {

    	$jsondata["success"] = false;
        $jsondata["error"] = $result['error'];
        $jsondata["error_avatar"] = $result_avatar['error'];

       $jsondata["success1"] = false;
        if ($result_avatar['resultado']) {
            $jsondata["success1"] = true;
            $jsondata["img_avatar"] = $result_avatar['datos'];
        }
        header('HTTP/1.0 400 Bad error');
        echo json_encode($jsondata);
        //exit;

    }



	}


//////////////////////////
if (isset($_GET["delete"]) && $_GET["delete"] == true) {
    $_SESSION['result_avatar'] = array();
    $result = remove_files();
    if ($result === true) {
        echo json_encode(array("res" => true));
    } else {
       echo json_encode(array("res" => false));
    }
}


////////////////////////////
if ((isset($_GET["upload"])) && ($_GET["upload"] == true)) {
		$result_avatar = upload_files();
		$_SESSION['result_avatar'] = $result_avatar;
		//echo json_encode($result_avatar);
	//	exit();
}
///////////////////////////
if (isset($_GET["load"]) && $_GET["load"] == true) {
    $jsondata = array();
    if (isset($_SESSION['products'])) {
        //echo debug($_SESSION['products']);
        $jsondata["products"] = $_SESSION['products'];
    }
    if (isset($_SESSION['msje'])) {
        //echo $_SESSION['msje'];
        $jsondata["msje"] = $_SESSION['msje'];
    }
    close_session();
    echo json_encode($jsondata);
    //exit;
}

function close_session() {
    unset($_SESSION['products']);
    unset($_SESSION['msje']);
    $_SESSION = array(); // Destruye todas las variables de la sesión
    session_destroy(); // Destruye la sesión
}



/////////////////////////////////////////////////// load_data
if ((isset($_GET["load_data"])) && ($_GET["load_data"] == true)) {
    $jsondata = array();

    if (isset($_SESSION['products'])) {
        $jsondata["products"] = $_SESSION['products'];
        echo json_encode($jsondata);
        exit;
    } else {
        $jsondata["products"] = "";
        echo json_encode($jsondata);
        exit;
    }
}
















/*
//include 'modules/products/utils/functions_products.inc.php';

//console.log("controler");

	if ((isset($_POST['discharge_products_json']))) {


	  	discharge_products();
	}

	function discharge_products() {
	  	$jsondata = array();
	  	$productsJSON = json_decode($_POST["discharge_products_json"], true);

	    $jsondata["success"] = true;
		$jsondata["name"] = $productsJSON['name'];
		$jsondata["redirect2"] = "asignando correctamente!!";
	    echo json_encode($jsondata);
	    exit;

	}


//////////////////////////////////////////////////////////

if ($_POST) {



    $result = validate_products();


    if ($result['resultado']) {
        $arrArgument = array(
            'name' => ucfirst($result['datos']['name']),
            'code' => ($result['datos']['code']),
            'origin' => $result['datos']['origin'],
            'provider' => $result['datos']['provider'],
            'email' => $result['datos']['email'],
            'price' => $result['datos']['price'],
            'description' => ucfirst($result['datos']['description']),
            'material' => $result['datos']['material'],
            'type' => ($result['datos']['type']), //strtoupper > para convertir string a mayusculas
            'shape' => ($result['datos']['shape']),
            'brand' => ($result['datos']['brand']),
            'stock' => $result['datos']['stock'],
            'date_reception' => $result['datos']['date_reception'],
            'departure_date' => $result['datos']['departure_date'],

        );

        $mensaje = "User has been successfully registered";

        //redirigir a otra p�gina con los datos de $arrArgument y $mensaje
        $_SESSION['products'] = $arrArgument;
        $_SESSION['msje'] = $mensaje;

        $callback = "index.php?module=products&view=results_products";
        redirect($callback);
    } else {

        $error = $result['error'];
    }

}
include 'modules/products/view/create_products.php';

*/
