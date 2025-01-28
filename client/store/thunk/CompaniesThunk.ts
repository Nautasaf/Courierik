import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCompanies = createAsyncThunk(
  'companies/fetchCompanies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/companies')
      console.log('Response data:', response.data)
      return response.data // Убедитесь, что это массив
    } catch (error) {
      console.error('Error fetching companies:', error)
      return rejectWithValue('Ошибка при загрузке компаний')
    }
  },
)
