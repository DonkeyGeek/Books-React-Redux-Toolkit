import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    isLoading: false,
    fetchedBooks: [],
    error: ''
}

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async arg => {
       const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${arg}&maxResults=20`)
       return data.items
    }
)

/*

// Pending
{
    type: 'books/fetchBooks/pending',
    meta: {
        arg: 'php'
        requestId: 'ghvhgvhgv'
        requestStatus: 'pending'
    }
}

// Fulfilled
{
    type: 'books/fetchBooks/fulfilled',
    meta: {
        arg: 'php'
        requestId: 'ghvhgvhgv'
        requestStatus: 'fulfilled'
    }
}

// rejected
{
    type: 'books/fetchBooks/rejected',
    meta: {
        arg: 'php'
        requestId: 'ghvhgvhgv'
        requestStatus: 'rejected'
    },
    error: {
        name: '',
        message: 'PPPPPPPP'
        code: 
    }
}
*/

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchBooks.pending, state => {
            state.isLoading = true
        })

        builder.addCase(fetchBooks.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.fetchedBooks = payload;
            state.error = '';
        })

        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.isLoading = false;
            state.fetchedBooks = [];
            state.error = action.error.message;
        })
    }
})

export default bookSlice.reducer;