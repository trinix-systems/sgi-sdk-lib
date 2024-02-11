import { ModelEntity } from "@trinix/app-utility/models/model";
export declare class EntrepriseModel extends ModelEntity {
    code: string;
    description: string;
    sigle: string;
    adresse: string;
    rccm: string;
    idNat: string;
    numeroImpot: string;
    logoPath: string;
    status: boolean;
    static fromEntity(snapshot: any): EntrepriseModel;
    copy(): EntrepriseModel;
}
