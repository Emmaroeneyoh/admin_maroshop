import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const url = 'https://emmaroempire.com/server'

const initialState = {
    user : {},
    success : false,
    loading:'',
    error: '',
    users:[]

}

//fucntion for signup
export const AdminSignup = createAsyncThunk(
    'adminsignup',
    async (values, { rejectWithValue }) => {
        console.log('this is values : ', values)
        try {
            const token = await axios({
                method: "post",
                url: `${url}/admin/signup`,
                data: values,
                headers: { "Content-Type": "multipart/form-data" },
              });



            // const token = await axios.post(`${url}/admin/signup`, { 
            //     username:values.username,
            //     email:values.email,
            //     password:values.password,
            //     role:values.role,
            //     phone:values.phone,
            //     address:values.address,
            //     dob: values.dob,
            //     photo:values.photo
            // })
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)
//fucntion for signup
export const AdminSignin = createAsyncThunk(
    'Admnsignin',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.post(`${url}/admin/login`, { 
                email:values.email,
                password:values.password
            })
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

//fucntion for signup
export const GetAdmin = createAsyncThunk(
    'GetAdmins',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.get(`${url}/admins`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)






const adminslice = createSlice({
    name:"adminsignin",
    initialState,
    reducers:{
        adminSignupReset:(state) => {
         state.error =""
         state.loading = ''
            state.success = false
            state.users = []
        },
       
        clearadminError: (state) => {
            state.user = ''
        }
    },
    extraReducers: (builder) => {
        builder
            //for signup
        .addCase(AdminSignup.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(AdminSignup.fulfilled, (state,action) => {
            state.loading = 'success'
            state.user = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(AdminSignup.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            alert(action.payload)
            state.success = false
            
        })
            //for signin
        .addCase(AdminSignin.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(AdminSignin.fulfilled, (state,action) => {
            state.loading = 'success'
            state.user = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(AdminSignin.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            alert(action.payload)
            state.success = false
            
        })
            //for getting all admins
        .addCase(GetAdmin.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(GetAdmin.fulfilled, (state,action) => {
            state.loading = 'success'
            state.users = (action.payload)
            state.success = true
            state.error = ''
            
        })
        .addCase(GetAdmin.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
       
    }
})

export default adminslice.reducer
export const {adminSignupReset} = adminslice.actions