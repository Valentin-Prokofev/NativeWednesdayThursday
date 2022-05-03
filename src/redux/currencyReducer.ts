import {ACTIONS_TYPE, CurrencyReducersTypes} from './actions';
import {IGlobalState} from "./state";


export type CurrencyType = {
    currencyName: string;
    buyRate: number;
    sellRate: number;
};
export type CurrencyState = {
    currencies: Array<CurrencyType>;
    currentCurrency: string;
    isBuying: boolean;
    amountOfBYN: string;
    amountOfCurrency: string;
};

const initialState: CurrencyState = {
    currencies: [
        {
            currencyName: 'USD',
            buyRate: 2.62,
            sellRate: 2.58,
        },
        {
            currencyName: 'EUR',
            buyRate: 3.1,
            sellRate: 3.06,
        },
        {
            currencyName: 'RUR',
            buyRate: 0.0345,
            sellRate: 0.0341,
        },
    ],
    currentCurrency: 'USD',
    isBuying: true,
    amountOfBYN: '',
    amountOfCurrency: '',
};

export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyReducersTypes): CurrencyState => {
    // @ts-ignore
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE:     //смена значений инпутов
            return {
                ...state,
                // @ts-ignore
                ...action.payload
            }
        // свич кейс позволяет делать проваливанеи вариантов
        case ACTIONS_TYPE.CHANGE_CHANGE_ACTION:         //смена кнопочек купить-продать
        case ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY:      //смена кнопочки выбора валюты
            return {
                ...state,

                ...action.payload,
                // зануляем поля ввода инпут чтобы после смены действий купить-продать для пользователя все смотрелось логично
                amountOfBYN: '',
                amountOfCurrency: '',
            }
        // case ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY:         //смена кнопочки выбора валюты
        //     return {
        //         ...state,
        //         ...action.payload,
        //         // зануляем поля ввода инпут чтобы после выбора валюты для пользователя все смотрелось логично
        //         amountOfBYN: '',
        //         amountOfCurrency: '',
        //     }
        default:
            return state;
    }
};
export const selectAll = (store: IGlobalState) => store.currency