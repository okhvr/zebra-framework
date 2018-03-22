import { ZebraComponent } from '../../Zebra-framework/index';

class NotFoundComponent extends ZebraComponent{
    constructor(config){
        super(config);
    }
}

export const notFoundComponent = new NotFoundComponent({
    selector: 'app-not-found',
    template: `
    <h1>Not found :( 404 error</h1>
    `
})