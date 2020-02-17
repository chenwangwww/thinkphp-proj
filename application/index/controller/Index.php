<?php
namespace app\index\controller;
use think\Controller;
use think\Request;

class Index extends Controller
{
    public function index()
    {
        return $this->fetch('./application/index/view/index/index.html');
    }

    public function login(Request $request)
    {
        echo $request->param("account");
        echo $request->param("password");
    }
}
