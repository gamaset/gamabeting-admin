import { Manager } from "./Manager";

export class Agent {
    id: number;
    name?: string;
    nickname?: string;
    birthDate?: string;
    taxId?: string;
    manager?: Manager;
}