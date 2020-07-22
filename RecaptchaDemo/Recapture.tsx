
import * as React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

export interface IRecaptureProps{
    onChange:()=>void
}
export function Recapture(props:any){
    //let recaptchaEnable = (document.querySelector("input[name='RecaptchaEnable']") as any).value == "true"?true:false;
    let dataSiteKey = (document.querySelector("input[name='RecaptchaSiteKey']") as any).value;

    return <ReCAPTCHA
    sitekey={dataSiteKey}
    onChange={(responseCode)=>{props.onChange(responseCode)}}
    />
}
