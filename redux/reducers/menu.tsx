const menuReducer = (state = false, action) => {
    switch (action.type) {
        case 'CLICKED':
            return !state;
    }
};

export default menuReducer;