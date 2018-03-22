import { ZebraComponent } from '../../Zebra-framework/index';
import { dataService } from '../data.service';

class PostsComponent extends ZebraComponent{
    constructor(config){
        super(config);
    }

    events(){
        return {'click .collapsible': 'showPostDescription'};
    }

    showPostDescription({target}){
        this.element.querySelectorAll('.active').forEach(element => element.classList.remove('active'));
        target.parentElement.classList.add('active');
    }

    onInit(){
      dataService.getData().then(data => {
        this.data = data.posts;
        this.people = data.people;
        this.onePost  =thi.data[0];
    })
    }
}

export const postsComponent = new PostsComponent({
    selector: 'app-posts',
    template: `
    <ul class="collapsible">
    <li>
      <div class="collapsible-header">
        <i class="material-icons">filter</i>
        First
        <span class="badge">4</span></div>
      <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
    </li>
    <li class="active">
      <div class="collapsible-header">
        <i class="material-icons">filter</i>
        {{onePost}}
        <span class="badge">1</span></div>
      <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
    </li>
  </ul>
    `
})