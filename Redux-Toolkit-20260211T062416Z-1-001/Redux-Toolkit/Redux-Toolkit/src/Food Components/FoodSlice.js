import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

var API = "http://localhost:3000/FoodOrder"

export const createFood = createAsyncThunk('/createFood', async (data) => {
    return await axios.post(API, data)
        .then((res) => res.data)
})

export const viewFood = createAsyncThunk('/viewFood', async () => {
    return await axios.get(API)
        .then((res) => res.data)
})

export const deleteFood = createAsyncThunk('/deleteFood', async (id) => {
    return await axios.delete(`${API}/${id}`)
        .then((res) => res.data)
})

export const updateFood = createAsyncThunk('/updateFood', async (data) => {
    var id = data.id
    return await axios.put(`${API}/${id}`, data)
        .then((res) => res.data)
})

const FoodSlice = createSlice({
    name: "food",
    initialState: {
        foodList: [],
    },
    reducers: {},
    extraReducers: (res) => {
        res.addCase(createFood.fulfilled, (state, action) => {
            state.foodList.push(action.payload)
        }).addCase(viewFood.fulfilled, (state, action) => {
            state.foodList = action.payload
        }).addCase(deleteFood.fulfilled, (state, action) => {
            let { id } = action.payload
            let filterData = state.foodList.filter((ele) => ele.id != id)
            state.foodList = filterData
        }).addCase(updateFood.fulfilled, (state, action) => {
            let { id } = action.payload
            let index = state.foodList.findIndex((ele) => ele.id == id)
            if (index != -1) {
                state.foodList[index] = action.payload
            } else {
                alert("Task Not Found")
            }
        })
    }
})


export default FoodSlice.reducer
