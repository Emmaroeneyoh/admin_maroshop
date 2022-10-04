import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const url = 'http://localhost:9000'

const initialState = {
    user : {},
    success : false,
    loading:'',
    error: '',
    users:[]

}


//fucntion for signup
export const Getuser = createAsyncThunk(
    'Getuser',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.get(`${url}/user`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

//fucntion for signup
// export const Searchuser = createAsyncThunk(
//     'searchuser',
//     async (values, { rejectWithValue }) => {
//         try {
//             const token = await axios.get(`${url}/user/search?user="${values}"`)
//             console.log(token)
//             return token.data
//         } catch (error) {
//             console.log(error.response.data)
//             return rejectWithValue(error.response.data)
//         }
//     }
// )



//fucntion for signup
export const Singleuser = createAsyncThunk(
    'singleuser',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.get(`${url}/user/${values}`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)



const adminslice = createSlice({
    name:"category",
    initialState,
    reducers:{
        adminSignupReset:(state) => {
         state.error =""
            state.loading = ''
            state.message = ''
            state.success = false
            state.user = {}
        },
    },
    extraReducers: (builder) => {
        builder
           
         
            //for getting all cat
        .addCase(Getuser.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(Getuser.fulfilled, (state,action) => {
            state.loading = 'success'
            state.users = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(Getuser.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
       
        //     //for getting all admins
        // .addCase(Searchuser.pending, (state) => {
        //     state.loading = 'pending'
            
        // })
        // .addCase(Searchuser.fulfilled, (state,action) => {
        //     state.loading = 'success'
        //     state.categories = action.payload
        //     state.success = true
        //     state.error = ''
            
        // })
        // .addCase(Searchuser.rejected, (state, action) => {
        //     state.loading = 'failed'
        //     state.error = action.payload
        //     state.success = false
            
        // })
            
            
        
       
            //for getting one admins
        .addCase(Singleuser.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(Singleuser.fulfilled, (state,action) => {
            state.loading = 'success'
            state.user = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(Singleuser.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
        
            
       
    }
})

export default adminslice.reducer
export const {adminSignupReset} = adminslice.actions