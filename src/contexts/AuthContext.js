import { createContext, useReducer, useEffect, useState } from 'react';

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    user: null,
    users: null
  })
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      dispatch({ type: 'LOGIN', payload: user }) 
    }

    setLoading(false);
  }, [])

  console.log('AuthContext state:', state)
  
  return loading ? (
    <div className='loading'>
      Loading.....
    </div>
    ) : (
      <AuthContext.Provider value={{ ...state, dispatch }}>
        { children }
      </AuthContext.Provider>
  )

}