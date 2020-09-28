import * as types from './types';

import { createStore } from 'redux';

let initState = {
    users: [
        {
            "date": "27-9-2020",
            "gender": "Woman",
            "lastname": "Rock",
            "loyalty": "Not available",
            "name": "Olivia",
            "card": "4444 3333 2222 1111"
        },
        {
            "date": "17-7-2018",
            "gender": "Woman",
            "lastname": "Morris",
            "loyalty": "Not available",
            "name": "Mary",
            "card": "4443 5393 2120 1111"
        },
        {
            "date": "20-10-2019",
            "gender": "Man",
            "lastname": "Barley",
            "loyalty": "Not available",
            "name": "Bob",
            "card": "4543 3753 4252 2111"
        },
        {
            "date": "12-6-2018",
            "gender": "Man",
            "lastname": "Calver",
            "loyalty": "Not available",
            "name": "Daniel",
            "card": "4867 9778 6735 8469"
        },
        {
            "date": "29-11-2017",
            "gender": "Woman",
            "lastname": "Mackbayn",
            "loyalty": "Not available",
            "name": "Lora",
            "card": "4563 6358 2287 6483"
        },
        {
            "date": "4-4-2020",
            "gender": "Man",
            "lastname": "Osmond",
            "loyalty": "Not available",
            "name": "Nick",
            "card": "3694 5208 5737 3756"
        },
        {
            "date": "10-10-2019",
            "gender": "Woman",
            "lastname": "Packer",
            "loyalty": "Not available",
            "name": "Amanda",
            "card": "3986 9384 1756 3783"
        },
        {
            "date": "16-8-2017",
            "gender": "Man",
            "lastname": "Randol",
            "loyalty": "Not available",
            "name": "Mickael",
            "card": "6437 2652 2834 5738"
        },
        {
            "date": "2-9-2020",
            "gender": "Man",
            "lastname": "Samuel",
            "loyalty": "Not available",
            "name": "Tomas",
            "card": "4428 4568 3538 2567"
        },
        {
            "date": "19-6-2018",
            "gender": "Woman",
            "lastname": "Treves",
            "loyalty": "Not available",
            "name": "Samanta",
            "card": "4298 2627 3578 8429"
        }
    ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case types.ADD_NEW_USER:
        return {
            ...state,
            users: [...state.users, action.payload]
        };
    case types.DELETE_USER:
        return {
            ...state,
            users: [...state.users.filter(item => item.lastname !== action.payload.lastname && item.date !== action.payload.date)]
        };

    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;