import { GetAllBanks } from "../../infra/fetchers/banks"

export const useBanks = async () => {
    const banks = await GetAllBanks();
    return banks;
}