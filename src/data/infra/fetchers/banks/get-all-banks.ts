import axios from 'axios';
import { PATH_BRASIL } from '../../../constants/brasil-api';

export const GetAllBanks = async () => {

    const ok = axios({
        method: "get",
        url: PATH_BRASIL.url,
        // data: {
        //   firstName: "Fred",
        //   lastName: "Flintstone",
        // },
    }).then(function (response) {
        return response.data
    })

    return ok;
}