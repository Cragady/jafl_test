import axios from "axios";

const PyUrl = process.env.REACT_APP_PY_API;

export const PyAPI = {
    getTransactions() {
        return axios.get(`${PyUrl}/transaction/`)
    },

    createTransaction(transaction) {
        return axios.post(`${PyUrl}/transaction/`, transaction)
    }
}