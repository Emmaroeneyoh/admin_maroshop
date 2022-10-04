import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const url = 'https://emmaroempire.com/server'

const initialState = {
    invoice: {},
    success : false,
    loading:'',
    error: '',
    totalFund: 0,
    invoices:[]

}

//fucntion for signup
export const GetInvoice = createAsyncThunk(
    'getinvoices',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.get(`${url}/invoice`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

//fucntion for signup
export const Singleinvoice = createAsyncThunk(
    'singleinvoice',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.get(`${url}/invoice/:id`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

//fucntion for signup
export const updateInvoice = createAsyncThunk(
    'updateinvoice',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios({
                method: "Put",
                url: `${url}/invoice/${values}`,
                // data: values,
                // headers: { "Content-Type": "multipart/form-data" },
              });
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
            state.invoices =[]
        },
        Getfund: (state, action) => {
            const  totalFund  = state.invoices.reduce((invoiceSum, price) => {
                invoiceSum += price
                return invoiceSum
            }, 0)

         },
        clearadminError: (state) => {
            state.user = ''
        }
    },
    extraReducers: (builder) => {
        builder
            //for signup
        .addCase(GetInvoice.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(GetInvoice.fulfilled, (state,action) => {
            state.loading = 'success'
            state.invoices = action.payload
            state.success = true
            state.error = ''
            
            
        })
        .addCase(GetInvoice.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            alert(action.payload)
            state.success = false
            
        })
         
            //for getting all cat
        .addCase(Singleinvoice.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(Singleinvoice.fulfilled, (state,action) => {
            state.loading = 'success'
            state.invoice = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(Singleinvoice.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
       
            //for getting all admins
        .addCase(updateInvoice.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(updateInvoice.fulfilled, (state,action) => {
            state.loading = 'success'
            state.message = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(updateInvoice.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
    }
})

export default adminslice.reducer
export const {adminSignupReset} = adminslice.actions