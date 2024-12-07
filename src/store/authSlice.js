//ye slice hum basically authetication ko trace krne ke liye ban rahe   hai ki user authenticate dhai ya nhhi hai ye mai har baar store se puchunga 
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;


//ye himne aiuth ka slice banay ahai apost k aslice bhi bana sakte hai 