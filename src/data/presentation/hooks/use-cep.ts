import { GetCep } from "../../infra/fetchers/cep"

export const useCep = async (cep: string) => {
    const banks = await GetCep(cep);
    return banks;
}