
import { Scene } from './core/scene'
import { Application, Sprite, Container, Assets } from './core/pixi.js';


class Editor {

  constructor() {

    // key = name , v = scene
    this.scenes = new Map;
    this.currentScene = null;
    this.container = null;
    this.app = new Application();

  }
  async init({ container }={}) {


    if(!(container instanceof HTMLElement)||this.container)return;

    this.container = container;
    await this.app.init({
      resolution: Math.max(window.devicePixelRatio, 2),
      backgroundColor: 0xffffff,
    });

    container.appendChild(this.app.canvas);

    this.app.canvas.style.width = `${100}%`;
    this.app.canvas.style.height = `${100}%`;
    this.resize();

  }

  resize(){

    let rect= this.container.getBoundingClientRect();
    this.app.renderer.resize(rect.width, rect.height);

  }

  //通过json重置场景。
  fromJSON(json){

  }


  switchScene( name ){


  }

  newScene( name ) {


  }

  addObject( name, type ) {

  }

  updateObject( name, key, value ) {


  }

  removeObject(){

  }


}


export const editor = new Editor;
