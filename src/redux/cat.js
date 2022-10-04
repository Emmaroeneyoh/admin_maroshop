import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const url = 'http://localhost:9000'

const initialState = {
    category : {},
    success : false,
    loading:'',
    error: '',
    message:'',
    categories:[]

}

//fucntion for signup
export const CreateCat = createAsyncThunk(
    'createCat',
    async (values, { rejectWithValue }) => {
        console.log('this is values : ', values)
        try {
            const token = await axios.post(`${url}/category`, { 
                category:values.category,
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
export const GetCategories = createAsyncThunk(
    'Getcategories',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.get(`${url}/category`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

//fucntion for signup
export const SearchCategory = createAsyncThunk(
    'searchcat',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.get(`${url}/category/search?category="${values}"`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

//fucntion for signup
export const DeleteCategory = createAsyncThunk(
    'Deletecat',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.delete(`${url}/category/${values}`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)


//fucntion for signup
export const Singlecategory = createAsyncThunk(
    'singlecat',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.get(`${url}/category/${values}`)
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
            state.categories = []
        },
       
        clearadminError: (state) => {
            state.user = ''
        }
    },
    extraReducers: (builder) => {
        builder
            //for signup
        .addCase(CreateCat.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(CreateCat.fulfilled, (state,action) => {
            state.loading = 'success'
            state.categories = state.categories.push(action.payload)
            state.success = true
            state.error = ''
            
        })
        .addCase(CreateCat.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            alert(action.payload)
            state.success = false
            
        })
         
            //for getting all cat
        .addCase(GetCategories.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(GetCategories.fulfilled, (state,action) => {
            state.loading = 'success'
            state.categories = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(GetCategories.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
       
            //for getting all admins
        .addCase(SearchCategory.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(SearchCategory.fulfilled, (state,action) => {
            state.loading = 'success'
            state.categories = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(SearchCategory.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
            
            
        
       
            //for getting one admins
        .addCase(Singlecategory.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(Singlecategory.fulfilled, (state,action) => {
            state.loading = 'success'
            state.category = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(Singlecategory.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
        
            
            //for getting all admins
        .addCase(DeleteCategory.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(DeleteCategory.fulfilled, (state,action) => {
            state.loading = 'success'
            state.categories = state.categories.filter((e) =>  e._id !== action.payload.id)
            state.success = true
            state.error = ''
            
        })
        .addCase(DeleteCategory.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
       
    }
})

export default adminslice.reducer
export const {adminSignupReset} = adminslice.actions