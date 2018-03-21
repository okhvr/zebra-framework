import { WFMComponent } from "../../Zebra-framework";

class AppHeader extends WFMComponent {
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
            <li><a href="#">Sass</a></li>
            <li><a href="#">Components</a></li>
        </ul>
    </div>
    </nav>
    `
});
