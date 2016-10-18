<?php
    function loadModel($model_path, $model_name, $function, $arrArgument = '') {
        $model = $model_path . $model_name . '.class.singleton.php';
        //echo json_encode("common");
        //exit();

        if (file_exists($model)) {
            include_once($model);

            $modelClass = $model_name;

            if (!method_exists($modelClass, $function)){
                die($function . ' function not found in Model ' . $model_name);
            }

            $obj = $modelClass::getInstance();

            if (isset($arrArgument)) {
                return $obj->$function($arrArgument);// funcion create_products en model.class
            }
        } else {
            die($model_name . ' Model Not Found under Model Folder');
        }
    }
