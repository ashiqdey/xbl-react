<?php

if(rand(0,1) === 0){
    cerror("Error in API",201);
}
else{
    res(array("message" => "ok"));
}


function cerror($mgs,$code=201){
	http_response_code($code);
	die(json_encode(array("error"=>$mgs,"code"=>$code)));
}

function res($r){
	die(json_encode(array("data"=>$r)));
}


?>