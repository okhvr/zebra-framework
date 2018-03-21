import { WFMComponent } from '../Zebra-framework';

class AppComponent extends WFMComponent {
    constructor(config){
        super(config);
  }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `
        <app-header></app-header>
        <div class="row">
        <div class="col s6 offset-s3">
          <div class="card grey darken-2">
            <div class="card-content white-text">
              <span class="card-title">About framework</span>
              <p>Hello world! I'm a framework. More description will be added later.</p>
            </div>
            <div class="card-action">
              <a href="#" class="pink-text">press here</a>
            </div>
          </div>
        </div>
      </div>
    `
})