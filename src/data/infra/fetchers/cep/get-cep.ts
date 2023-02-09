import axios from 'axios';
import { PATH_BRASIL } from '../../../constants/brasil-api';

export const GetCep = async (cep: string) => {

    const ok = axios({
        method: "get",
        url: `${PATH_BRASIL.url}cep/v1/${cep}`,
    }).then(function (response) {
        return response.data
    })
    return ok;
}