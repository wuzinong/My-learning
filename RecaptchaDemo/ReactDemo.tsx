
UI:


import { Recapture } from 'src/components/common/Recapture/Recapture';

<Recapture
		onChange={(responseCode) => {
		state.recaptchaError = '';
		state.responseCode = responseCode;
				}}
/>

{state.recaptchaError && <ValidationMessage variant="error">{state.recaptchaError}</ValidationMessage>}



SUBMIT:
async submit() {

    const submitParams: ISubmitInformationParams = {
        responseCode:"XXXXX"
    };
    //submit
    const response = await Request(submitParams)
    await this.handleSendInformationRequest(response,submitParams)
}


async handleSendInformationRequest(response: IResponseParams, submitParams: ISubmitInformationParams) {
   

    if (response.isComplete) {

    }else{
        if (response.recaptchaMessage) {
            this.recaptchaError = response.recaptchaMessage;
            typeof grecaptcha !== 'undefined' && (grecaptcha as any).reset();
        }
    }
}
