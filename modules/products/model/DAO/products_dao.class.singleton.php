<?php


//echo json_encode("12dd");
//  exit();
class productsDAO {

    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if (!(self::$_instance instanceof self))
            self::$_instance = new self();
        return self::$_instance;
    }

    public function create_products_DAO($db, $arrArgument) {
        $name = $arrArgument['name'];
        $code = $arrArgument['code'];
        $origin = $arrArgument['origin'];
        $provider = $arrArgument['provider'];
        $email = $arrArgument['email'];
        $price = $arrArgument['price'];
        $description = $arrArgument['description'];
        $material = $arrArgument['material'];
        $type = $arrArgument['type'];
        $shape = $arrArgument['shape'];
        $brand = $arrArgument['brand'];
        $stock = $arrArgument['stock'];
        $date_reception = $arrArgument['date_reception'];
        $depurate_date = $arrArgument['departure_date'];
        $avatar = $arrArgument['avatar'];

        $carbon = 0;
        $fiberglass = 0;
        $graphinte= 0;
        $grafeno = 0;

        foreach ($material as $indice) {
            if ($indice === 'Carbon')
                $carbon = 1;
            if ($indice === 'Fiberglass')
                $fiberglass = 1;
            if ($indice === 'Graphite')
                $graphinte = 1;
            if ($indice === 'Grafeno')
                $grafeno = 1;
        }

        $sql = "INSERT INTO products (Products_name, Code, Origin, Provider,"
                . " Email, Price, Description, Carbon, Fiberglass, Graphinte, Grafeno, Stock, Date_reception, Depurate_date, Type, Shovel, Brand, Avatar"
                . " ) VALUES ('$name', '$code', '$origin',"
                . " '$provider', '$email', '$price', '$description', '$carbon', '$fiberglass', '$graphinte', '$grafeno', '$stock', '$date_reception', '$depurate_date', '$type', '$shape', '$brand', '$avatar')";

        return $db->ejecutar($sql);
        
    }

}
