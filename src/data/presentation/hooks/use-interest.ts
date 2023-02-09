import { GetInterest } from "../../infra/fetchers"

export const useInterest = async () => {
    const interest = await GetInterest();
    return interest;
}