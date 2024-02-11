import { ModelEntity } from "@trinix/app-utility";
import { EntrepriseModel } from "./entreprise.model";
export declare class CentreModel extends ModelEntity {
    code: string;
    fkEntreprise: string;
    description: string;
    email: string;
    adresse: string;
    phone: string;
    status: boolean;
    entreprise: EntrepriseModel;
    static fromEntity(snapshot: any): CentreModel;
    copy(): CentreModel;
}
