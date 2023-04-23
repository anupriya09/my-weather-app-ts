import { createStore, Action } from 'redux';

export interface RootState {
  city : string;
}

interface UpdateInputCityAction extends Action{
    type: 'UPDATE_CITY';
    city : string
}

type CounterActionTypes =  UpdateInputCityAction;

const initialState: RootState = {
  city: '',
};

const reducer = (state = initialState, action: CounterActionTypes) => {
  switch (action.type) {
    case 'UPDATE_CITY':
      return {...state, city : action.city }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
