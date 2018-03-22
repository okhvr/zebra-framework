import { ZebraComponent } from '../Zebra-framework';

class AppComponent extends ZebraComponent {
    constructor(config){
        super(config);
  }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `
        <app-header></app-header>
        <router-outlet></router-outlet>
    `
})