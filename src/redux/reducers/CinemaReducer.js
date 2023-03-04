import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    heThongRapChieu:[],
}

const CinemaReducer = createSlice ({
    name: "CinemaReducer",
    initialState,
    reducers: {
        layHeThongRapChieu: (state, {type, payload}) => {
            state.heThongRapChieu = payload
        }
    }
})

export const {layHeThongRapChieu} = CinemaReducer.actions

export default CinemaReducer.reducer
