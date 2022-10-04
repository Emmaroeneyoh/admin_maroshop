import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const url = 'http://localhost:9000'

const initialState = {
    product : {},
    success : false,
    loading:'',
    error: '',
    products:[]

}


//fucntion for signup
export const createproduct = createAsyncThunk(
    'createproduct',
    async (values, { rejectWithValue }) => {
        console.log('this is values : ', values)
        try {
            const token = await axios({
                method: "post",
                url: `${url}/product`,
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
export const GetProducts = createAsyncThunk(
    'Getproduct',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.get(`${url}/product`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

//fucntion for signup
export const Searchproduct = createAsyncThunk(
    'searchproduct',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.get(`${url}/product/search?product="${values}"`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

//fucntion for signup
export const Deleteproduct = createAsyncThunk(
    'Deleteproduct',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.delete(`${url}/product/${values}`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)


//fucntion for signup
export const Singleproduct = createAsyncThunk(
    'singleproduct',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.get(`${url}/product/${values}`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)



const adminslice = createSlice({
    name:"product",
    initialState,
    reducers:{
        adminSignupReset:(state) => {
         state.error =""
            state.loading = ''
            state.message = ''
            state.success = false
            state.products = []
        },
       
        clearadminError: (state) => {
            state.user = ''
        }
    },
    extraReducers: (builder) => {
        builder
            //for signup
        .addCase(createproduct.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(createproduct.fulfilled, (state,action) => {
            state.loading = 'success'
            state.products = state.products.push(action.payload)
            state.success = true
            state.error = ''
            
        })
        .addCase(createproduct.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            alert(action.payload)
            state.success = false
            
        })
         
            //for getting all cat
        .addCase(GetProducts.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(GetProducts.fulfilled, (state,action) => {
            state.loading = 'success'
            state.products = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(GetProducts.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
       
            //for getting all admins
        .addCase(Searchproduct.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(Searchproduct.fulfilled, (state,action) => {
            state.loading = 'success'
            state.products = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(Searchproduct.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
            
            
        
       
            //for getting one admins
        .addCase(Singleproduct.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(Singleproduct.fulfilled, (state,action) => {
            state.loading = 'success'
            state.product = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(Singleproduct.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
        
            
            //for getting all admins
        .addCase(Deleteproduct.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(Deleteproduct.fulfilled, (state,action) => {
            state.loading = 'success'
            state.products = state.products.filter((e) =>  e._id !== action.payload.id)
            state.success = true
            state.error = ''
            
        })
        .addCase(Deleteproduct.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
       
    }
})

export default adminslice.reducer
export const {adminSignupReset} = adminslice.actions