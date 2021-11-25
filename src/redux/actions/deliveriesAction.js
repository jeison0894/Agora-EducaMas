import ACTIONS from './index'
import axios from 'axios'

export const fetchAllDeliveries = async (token) => {
    const res = await axios.get('http://localhost:3005/api/agora/get-deliveries', {
        headers: {Authorization: token}
    })
    return res
}


export const dispatchGetAllDeliveries = (res) => {
    return {
        type: ACTIONS.GET_ALL_DELIVERIES,
        payload: res.data
    }
}

