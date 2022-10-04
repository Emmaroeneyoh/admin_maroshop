const initialState = {
    user : {},
    success : false,
    loading:'',
    error: '',
    users:[]

}

this is the slice builder for the particualr action 
    
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


this is what i get from my console when i logged the errors 

user.js:180 Uncaught (in promise) TypeError: state.users.push is not a function
    at user.js:180:1
    at createReducer.ts:281:1
    at produce (immerClass.ts:94:1)
    at createReducer.ts:280:1
    at Array.reduce (<anonymous>)
    at reducer (createReducer.ts:247:1)
    at reducer (createSlice.ts:335:1)
    at combination (redux.js:560:1)
    at persistReducer.js:134:1
    at k (<anonymous>:2235:16)