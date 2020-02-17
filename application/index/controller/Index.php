<?php
namespace app\index\controller;
use think\Controller;
use think\Request;
use app\commonClasses\ResData;

class Index extends Controller
{
    public function index()
    {
        return $this->fetch('./application/index/view/index/index.html');
    }

    public function login(Request $request)
    {
        $account = $request->param('account');
        $password = $request->param('password');
        $resData = new ResData(0, "账号或密码错误", array());
        if($account == "chenwang" && $password == "cccccc"){
            $resData->setData(1, "成功登录！", array(
                'imgBase' => '/pictures',
                'imgs' => array(
                    '/beauty01.png', 
                    '/beauty02.png',
                    '/beauty03.png', 
                    '/beauty04.png',
                    '/beauty05.png', 
                    '/beauty06.png'
                )
            ));
        }

        return json_encode($resData->resData);
    }
}
