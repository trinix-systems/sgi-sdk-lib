import { IService } from "@trinix/app-utility";
import { CentreModel } from "./models/centre.model";
export declare class SgiSDK extends IService {
    private static _instance;
    private htpUtility;
    private constructor();
    static instance(): SgiSDK;
    getCentre(code: string, username: string, token: string): Promise<CentreModel | null>;
    getCentres(username: string, token: string): Promise<CentreModel[] | null>;
}
export declare enum URLS {
    CONST_GET_CENTRE = "/sgi/api/configuration/centre/get",
    CONST_GET_LIST_CENTRES = "/sgi/api/configuration/centre/list"
}
