<?php
namespace app\commonClasses;

class ResData
{
    public $resData = [];

    function __construct($code, $msg, $data){
        $this->resData = array(
            'code'=>$code,
            'msg'=>$msg,
            'data'=>$data
        );
    }
    
    function setData($code, $msg, $data){
        $this->resData['code'] = $code;
        $this->resData['msg'] = $msg;
        $this->resData['data'] = $data;
    }
}