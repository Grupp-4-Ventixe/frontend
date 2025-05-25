import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [error, setError] = useState(null)
  const [userLoading, setUserLoading] = useState(true);

  const signIn = async ({ email, password }) => {
    try {
        const response = await fetch("https://authservice-ventixe-fagve2emhbdnfpcn.swedencentral-01.azurewebsites.net/api/auth/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Login failed"); 
        }

        const data = await response.json();
        console.log("Backend Response Data:", data); // Log the backend response

        // Save token and user details in localStorage
        localStorage.setItem("token", data.token);
        const userObject = {
            email: data.email,
            name: data.name,
            role: data.role,
        };
        localStorage.setItem("user", JSON.stringify(userObject));

        console.log("User being stored in localStorage:", userObject); // Log the stored user object

        // Update state
        setToken(data.token);
        setIsAuthenticated(true);
        setUser(userObject);
        setIsAdmin(data.role.toLowerCase() === "admin");
        setError(null); 

        return true; // Indicate success
    } catch (error) {
        console.error("Error during sign-in:", error);
        setError(error.message); 
        throw error; 
    }
};

    useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    console.log("Stored User:", storedUser)

    if (storedToken && storedUser) {
       const parsedUser = JSON.parse(storedUser);

        console.log("Restoring User from LocalStorage:", parsedUser);

        setIsAuthenticated(true);
        setUser(JSON.parse(storedUser));
        setIsAdmin(JSON.parse(storedUser).role === "admin");
        setToken(storedToken);
    } else {
        setIsAuthenticated(false);
        setUser(null);
        setIsAdmin(false);
        setToken(null);
    }
}, []);


    const signUp = async ({email}) => {

    }

    return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isAdmin,
        user,
        userLoading,
        token,
        error,
        signUp,
        signIn,
        signOut
      }}

      
    >
      {children}  
    </AuthContext.Provider>
  
  )

  const signOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  setToken(null);
  setUser(null);
  setIsAuthenticated(false);
  setIsAdmin(false);
};
 
}


export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error("useAuth must be used within an AuthProvider")
    return context
}