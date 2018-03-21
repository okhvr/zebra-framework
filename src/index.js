import { bootstrap } from './Zebra-framework/core/bootstrap';
import { appModule } from './app/app.module';
import { wfm } from './Zebra-framework/index';

wfm.delay(2000).then(() => {
    bootstrap(appModule);
});

