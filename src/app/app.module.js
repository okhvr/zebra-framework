import { ZebraModule } from '../Zebra-framework';
import { appComponent } from './app.component';
import { appHeader } from './common/app.header';
import { appRoutes } from './app.routes';
import { contactUsComponent } from './pages/contact-us.component';

class AppModule extends ZebraModule {
	constructor(config) {
		super(config)
	}
}

export const appModule = new AppModule({
	components: [
		appHeader,
		contactUsComponent
	],
	bootstrap: appComponent,
	routes: appRoutes 
});
