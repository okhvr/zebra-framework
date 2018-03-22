import { ZebraComponent } from '../../Zebra-framework/index';

class ContactUsComponent extends ZebraComponent{
    constructor(config){
        super(config);
    }
}

export const contactUsComponent = new ContactUsComponent({
    selector: 'app-contact-us',
    template: `
    <h1>Contact us</h1>
    `
})