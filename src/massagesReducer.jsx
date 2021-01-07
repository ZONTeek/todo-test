let stateInit = {
    msgData: [
        { id: 1, msg: 'Text 1' },
        { id: 2, msg: 'Text 2' },
        { id: 3, msg: 'Text 3' }
    ],
    newMsgContent: '',
};

const massagesReducer = (state = stateInit, action) => {
    switch (action.type) {
        case "ADD_MSG": {
            let text = state.newMsgContent;
            return {
                ...state,
                newMsgContent: '',
                msgData: [...state.msgData, { msg: text, id: state.msgData.length + 1 }]
            }
        };
        case "UPD_NEW_MSG": {
            return {
                ...state,
                newMsgContent: action.newText,
            }
        };
        default:
            return state;
    }
};


export default massagesReducer;