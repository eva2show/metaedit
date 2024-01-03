import { fa } from 'element-plus/es/locale/index.js';
import { Application, Sprite, Container, Assets } from './pixi.js';


class Scene extends Container{

  constructor({ app, json }){

    this.app = app;
    this.sound =  null;
    this.assets = {};
    this.json = json;

    this.isInit = false;
    this.init(json);

  }

  // 初始化一个场景。 准备一些资源。
  async init(json){

    if(this.isInit)return;






    this.isInit = ture;

  }

  addObject( object ){
    this.addChild(object);
  }

  removeObject( id ){

  }

  show(){
    this.emit('show');
    this.visible = true;
  }

  //隐藏是否需要销毁场景，一遍节省资源。
  hide(){
    this.emit('hide');
    this.visible = false;
  }

}

export {Scene}
