import { createAsyncThunk } from '@reduxjs/toolkit';
import { RegisterUserResponse, RegisterUserError } from '../../interface/Registration';

export const loginUser = createAsyncThunk<
  RegisterUserResponse,
  { email: string; password: string }, 
  { rejectValue: RegisterUserError } 
>(
  'login/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue({ message: errorData?.text || 'Ошибка логина' });
      }
      const data: RegisterUserResponse = await response.json();
      return data;

    } catch (error) {
        console.error('Ошибка при логине:', error);
      return rejectWithValue({ message: 'Ошибка соединения или сервер недоступен' });
    }
  }
);