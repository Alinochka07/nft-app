import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import axios from "axios";


const initalState = {
    nftData: [],
    isLoading: false,
    isError: false,
    errorMsg: ""
};

function reducer(state = initalState, action) {
    switch (action.type) {
        case "REQUEST_NFT_DATA":
            return {
                ...state,
                isLoading: true,
                isError: false,
                errorMsg: ""
           };
        case "RECEIVE_NFT_DATA":
            return {
                ...state,
                nftData: action.nftData,
                isLoading: false,
                isError: action.isError,
                errorMsg: action.errorMsg
            };
        default:
            return state;
     }
}



export const requestNFT = (baseUrl) => async dispatch => {
    dispatch({
      type: "REQUEST_NFT_DATA"
    });
    try {
        const json = await axios.get(baseUrl);
        // const options = {
        //     method: 'GET',
        //     url: 'https://api.opensea.io/api/v1/assets',
        //     params: {order_direction: 'desc', limit: '20', include_orders: 'false'},
        //     headers: {accept: 'application/json'}
        // };
        // axios
        // .request(options)
        // .then(function (response) {
        //     console.log(response.data.assets);
        // })
        // .catch(function (error) {
        //     console.error(error);
        // });

        dispatch({
            type: "RECEIVE_NFT_DATA",
            nftData: json.data.assets,
            isError: false,
            errorMsg: ""
        });
    } catch (e) {
        dispatch({
            type: "RECEIVE_NFT_DATA",
            nftData: [],
            isError: true,
            errorMsg: e
        });
    }
};

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));