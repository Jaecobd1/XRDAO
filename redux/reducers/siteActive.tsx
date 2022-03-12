const siteActiveReducer = (state = "", action) => {
    switch(action.type){
        case 'Home':
            return state = "Home";
        case 'XDT':
            return state = "XDT";
        case 'RoadMap':
            return state = "RoadMap";
        default:
            return state = "Home";
    }
};

export default siteActiveReducer;