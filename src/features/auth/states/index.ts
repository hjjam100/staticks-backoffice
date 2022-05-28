import create from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  input: {
    email: string
    password: string
  }
  setInput: (key: string, value: string) => void
}

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      input: {
        email: '',
        password: '',
      },
      setInput: (key, value) =>
        set(state => ({
          ...state,
          input: {
            ...state.input,
            [key]: value,
          },
        })),
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage,
    },
  ),
)

export default useAuthStore
