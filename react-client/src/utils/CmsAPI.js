import axios from "axios";

export const CmsAPI = {
    getProducts() {
        return axios.get(`${process.env.REACT_APP_CMS_API}/products`)
    }
}