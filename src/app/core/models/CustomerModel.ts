import { UserModel } from "./UserModel";

export class CustomerModel extends UserModel {
    id: number;
    agentId: number;
}