import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [user, setUser] = useState(null)
    
   const signIn = async ({ email, password, rememberMe }) => {
        try {
            const response = await fetch("http://localhost:5000/api/account/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password, rememberMe })
            })

            if (!response.ok) {
                const data = await response.json()
                throw new Error(data.errors ? data.errors.join(", ") : "Login failed")
            }

            const data = await response.json()
            setIsAuthenticated(true)
            setToken(data.token)
     
            setUser({ email }) 
         
            return true
        } catch (error) {
            setIsAuthenticated(false)
            setToken(null)
            setUser(null)
            setIsAdmin(false)
            throw error
        }
    }

    const signUp = async ({email}) => {

    }

    return (
        <AuthContext.Provider value={{isAuthenticated, isAdmin, user, signUp, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error("useAuth must be used within an AuthProvider")
    return context
}