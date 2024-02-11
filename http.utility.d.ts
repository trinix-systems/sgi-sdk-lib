import { HttpService } from "@nestjs/axios";
export declare class HttpUtility {
    httpService: HttpService;
    constructor(httpService: HttpService);
    _HOST: string;
    _APPKEY: string;
    _APPMAIL: string;
    doPost(url: string, params: any): Promise<any>;
}
