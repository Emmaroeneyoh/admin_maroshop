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
            const token = await axios.post(`${url}/admin/signin`, { 
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
export const GetAdmins = createAsyncThunk(
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

//fucntion for signup
export const GetAdminsEmail = createAsyncThunk(
    'GetAdminsEmail',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.get(`${url}/admins/search?admin="${values}"`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

//fucntion for signup
export const DeleteAdmins = createAsyncThunk(
    'DeleteAdmins',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.delete(`${url}/admins/${values}`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)


//fucntion for signup
export const SingleAdmins = createAsyncThunk(
    'singleAdmins',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.get(`${url}/admins/${values}`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

//fucntion for signup
export const UpdateAdmins = createAsyncThunk(
    'adminupdate',
    async (values, { rejectWithValue }) => {
        console.log('this is values : ', values)
        try {
            const {id} = values
            const token = await axios({
                method: "put",
                url: `${url}/admin/${id}`,
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






const adminslice = createSlice({
    name:"adminsignin",
    initialState,
    reducers:{
        adminSignupReset:(state) => {
         state.error =""
         state.loading = ''
         state.success = false
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
            state.users = state.users.push(action.payload)
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
            state.success = false
            
        })
            //for getting all admins
        .addCase(GetAdmins.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(GetAdmins.fulfilled, (state,action) => {
            state.loading = 'success'
            state.users = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(GetAdmins.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
       
            //for getting all admins
        .addCase(GetAdminsEmail.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(GetAdminsEmail.fulfilled, (state,action) => {
            state.loading = 'success'
            state.users = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(GetAdminsEmail.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
            
            
        
       
            //for getting one admins
        .addCase(SingleAdmins.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(SingleAdmins.fulfilled, (state,action) => {
            state.loading = 'success'
            state.user = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(SingleAdmins.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
       
            //for getting one admins
        .addCase(UpdateAdmins.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(UpdateAdmins.fulfilled, (state,action) => {
            state.loading = 'success'
           
            state.success = true
            state.error = ''
            
        })
        .addCase(UpdateAdmins.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
            
            
            //for getting all admins
        .addCase(DeleteAdmins.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(DeleteAdmins.fulfilled, (state,action) => {
            state.loading = 'success'
            state.users = state.users.filter((e) =>  e._id !== action.payload.id)
            state.success = true
            state.error = ''
            
        })
        .addCase(DeleteAdmins.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
       
    }
})

export default adminslice.reducer
export const {adminSignupReset} = adminslice.actions