import { router } from '../tools/router';
import { zebra } from '../index';

export class Module {
  constructor(config) {
    this.components = config.components,
    this.bootstrapComponent = config.bootstrap,
    this.routes = config.routes
  }

  start() {
    this.initComponents();
    if (this.routes) {
      this.initRoutes();
    }
  }

  initComponents() {
    this.bootstrapComponent.render();
    this.components.forEach(this.renderComponent.bind(this));
  }

  initRoutes() {
    window.addEventListener('hashchange', this.renderRoutes.bind(this));
    this.renderRoutes();
  }

  renderRoutes(){
    let url = router.getUrl();
    let route = this.routes.find(route => route.path === url);

    if (zebra.isUndefined(route)){
      route = this.routes.find(route => route.path === '**');
    }

    document.querySelector('router-outlet').innerHTML = `<${route.component.selector}></${route.component.selector}>`;
    this.renderComponent(route.component);
  }

  renderComponent(component){
    if (!zebra.isUndefined(component.onInit)){
      component.onInit();
    }
    component.render();
    
    if (!zebra.isUndefined(component.afterInit)){
      component.afterInit();
    }
  }
}
