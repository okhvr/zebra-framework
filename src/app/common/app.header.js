import { ZebraComponent } from "../../Zebra-framework";

class AppHeader extends ZebraComponent {
  constructor(config) {
    super(config);
  }
}

export const appHeader = new AppHeader({
  selector: "app-header",
  template: `
  <nav class="pink lighten-3">
    <div class="nav-wrapper"  style="margin: 0 50px">
        <a href="#" class="brand-logo"><i class="material-icons">cloud</i>Zebra framework</a>
        <ul class="right hide-on-med-and-down">
            <li><a href="#">Home</a></li>
            <li><a href="#posts">Posts</a></li>
        </ul>
    </div>
    </nav>
    `
});
