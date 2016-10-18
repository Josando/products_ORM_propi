<?php

$path = $_SERVER['DOCUMENT_ROOT'] . '/products_ORM_propi/';
define('SITE_ROOT', $path);
require(SITE_ROOT . "modules/products/model/BLL/products_bll.class.singleton.php");

class products_model {

    private $bll;
    static $_instance;

    private function __construct() {

      
        $this->bll = products_bll::getInstance();


    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self))
            self::$_instance = new self();
        return self::$_instance;
    }

    public function create_products($arrArgument) {
        return $this->bll->create_products_BLL($arrArgument);
    }

}
