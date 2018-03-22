import { ZebraComponent } from '../../Zebra-framework/index';
import { router } from '../../Zebra-framework/tools/router';

class HomePageComponent extends ZebraComponent{
    constructor(config){
        super(config);
    }
    events(){
        return {'click #link': 'navigateToPosts'};
    }

    navigateToPosts(event){
        event.preventDefault();
        router.navigate('posts')
    }

    onInit(){
       console.log('on init');
    }

    afterInit(){
        console.log('after init');
    }
}

export const homePageComponent = new HomePageComponent({
    selector: 'app-home-page',
    template: `
    <h1>Home page</h1>
    <div class="row">
    <div class="col s6 offset-s3">
      <div class="card grey darken-2">
        <div class="card-content white-text">
          <span class="card-title">About framework</span>
          <p>Hello world! I'm a framework. More description will be added later.</p>
        </div>
        <div class="card-action">
          <a href="hsrlghaeilghilwt" class="pink-text" id="link">press here to see posts</a>
        </div>
      </div>
    </div>
  </div>
    `
})