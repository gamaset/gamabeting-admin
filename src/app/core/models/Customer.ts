import { Agent } from "./Agent";

export class Customer {
    id: number;
    nickname: string;
    name: string;
    email: string;
    taxId: string;
    password: string;
    agent: Agent;
}