import { useEffect, useState } from "react"
import { getMe } from "./services/auth.api"
import { AuthContext } from "./auth.context"

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getMe().then((data) => setUser(data.user)).catch(() => setUser(null)).finally(() => setLoading(false))
    }, [])

    return <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>{children}</AuthContext.Provider>
}
