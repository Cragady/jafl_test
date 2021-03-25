import axios from "axios";

export default {
    getTransactions() {
        return axios.get(`${process.env.REACT_APP_PY_API}/transactions`)
    }
}