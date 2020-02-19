<?php
namespace app\index\controller;
use think\Controller;
use think\Request;
use think\Db;
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
        $data = Db::name('users')
            ->where('name', $account)
            ->where('password', $password)
            ->select();

        if(count($data) == 1){
            $pictures = Db::name('pictures')->select();

            $resData->setData(1, "成功登录！", array(
                'imgBase' => '/pictures',
                'imgs' => $pictures
            ));
        }

        return json_encode($resData->resData);
    }

    public function getDetail(Request $request){
        $code = $request->param('code');
        $data = Db::name('mapping')->where('code', $code)->select();
        $resData = new ResData(0, "没有更多图片了！", array());
        if($data[0]['count'] != 0){
            $resData->setData(1, "可以看到更多图片了！", array(
                'prefix' => $data[0]['prefix_name'],
                'count' => $data[0]['count']
            ));
        }

        return json_encode($resData->resData);
    }
}
