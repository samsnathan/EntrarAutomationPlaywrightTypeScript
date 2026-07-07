import cryptoJs from 'crypto-js';

export default class CommonUtils{

    private secret_key: string;

    constructor(){
        //this.secret_key = process.env.SECRET_KEY ?  process.env.SECRET_KEY :  process.env.SECRET_KEY

        if (process.env.SECRET_KEY){
            this.secret_key = process.env.SECRET_KEY;
        }else {
            throw new Error ("Please provide the secret key while starting exection");
        }

    }

    public encryptData(data: string){
        const encryptData = cryptoJs.AES.encrypt(data, this.secret_key).toString();
        return encryptData;

    }

    public decryptData(encData: string){
        const decryptData = cryptoJs.AES.decrypt(encData,this.secret_key).toString(cryptoJs.enc.Utf8);
        return decryptData;
    }

}

//rimraf