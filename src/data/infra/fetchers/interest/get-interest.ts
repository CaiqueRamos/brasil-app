import axios from 'axios';
import { PATH_BRASIL } from '../../../constants/brasil-api';

export const GetInterest = async () => {

    const ok = axios({
        method: "get",
        url: `${PATH_BRASIL.url}taxas/v1`,
    }).then(function (response) {
        return response.data
    })

    return ok;
}