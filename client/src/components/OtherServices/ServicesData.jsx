import Icon_stamp from '../../assets/images/icons/rubber-stamp.png';
import Icon_seal from '../../assets/images/icons/seal.png';
import Icon_notary from '../../assets/images/icons/notary.png';
import Icon_apostile from '../../assets/images/icons/apostile.png';
import Icon_nominee from '../../assets/images/icons/n_direct.png';
import Icon_share from '../../assets/images/icons/shareholder.png';
import Icon_power from '../../assets/images/icons/power.png';
import Icon_inter from '../../assets/images/icons/inter.png';
import Icon_tin from '../../assets/images/icons/tin.png';
import Icon_branding from '../../assets/images/icons/branding.png';
import Icon_web from '../../assets/images/icons/coding.png';
import Icon_marketing from '../../assets/images/icons/digital.png';

export function getData() {
    return [
        {id: 1, service: "Company Rubber Stamp", desc:"", price: 70, remarks: "active", icon: Icon_stamp},
        {id: 2, service: "Company Seal", desc:"", price: 150, remarks: "active", icon: Icon_seal},
        {id: 3, service: "Notarisation on Documents", desc:"", price: 200, remarks: "active", icon: Icon_notary},
        {id: 4, service: "Apostille on Documents", desc:"", price: 220, remarks: "active", icon: Icon_apostile},
        {id: 5, service: "Nominee Director", desc:"", price: 550, remarks: "active", icon: Icon_nominee},
        {id: 6, service: "Nominee Shareholder", desc:"", price: 550, remarks: "active", icon: Icon_share},
        {id: 7, service: "Power(s) of Attorney", desc:"", price: 200, remarks: "active", icon: Icon_power},
        {id: 8, service: "International Courier", desc:"", price: 80, remarks: "active", icon: Icon_inter},
        {id: 9, service: "TIN number", desc:"", price: 250, remarks: "active", icon: Icon_tin},
        {id: 10, service: "Visual Branding Pack", desc:"(Company Logo + Business Card +  Letter Head)", price: 250, remarks: "active", icon: Icon_branding},
        {id: 11, service: "Website Pack", desc:"(1 Year Website Domain + 1 Year Website Hosting +  One Page Website Building)", price: 500, remarks: "active", icon: Icon_web},
        {id: 12, service: "1mo. Digital Marketing Support", desc:"", price: 150, remarks: "active", icon: Icon_marketing},
        {id: 13, service: "3mo. Digital Marketing Support", desc:"", price: 380, remarks: "active", icon: Icon_marketing},
        {id: 14, service: "6mo. Digital Marketing Support", desc:"", price: 720, remarks: "active", icon: Icon_marketing},
        {id: 15, service: "12mo. Digital Marketing Support", desc:"", price: 1350, remarks: "active", icon: Icon_marketing},
    ];
}