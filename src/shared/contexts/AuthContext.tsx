import { createContext, useCallback, useContext, useState } from "react"

interface IAuthContextProps {
    email: string | undefined;
    accessToken: string | undefined;
    login(email: string, password: string): void;
    logout(): void;
}
const AuthContext = createContext({} as IAuthContextProps)

export const AuthProvider = ({ children }: React.PropsWithChildren) => {

    const [email, setEmail] = useState<string>();
    const [accessToken, setAccessToken] = useState<string>();

    const logout = useCallback(() => {
        setEmail(undefined);
        setAccessToken(undefined);
    }, []);

    const login = useCallback((email: string, password: string) => {

        //CHAMAR O BACK PARA CONSEGUIR UM TOKEN DE AUTENTICAÇÃO

        setEmail(email);
        setAccessToken(crypto.randomUUID()); //TOKEN MOCKADO
    }, []);

    return (
        <AuthContext.Provider value={{ login, logout, email, accessToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const useIsAuthenticated = () => {
    const { accessToken } = useAuthContext();
    return !!accessToken;
}