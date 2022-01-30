import { View, Text } from 'react-native';
import React, { createContext } from 'react';

export const UserContext = createContext({})
type Props = {
    chilldren: React.ReactNode
}
export default function User({children}) 
{
    const [logado, setlogado] = React.useState<boolean>(false);
  return (
    <UserContext.Provider value={{logado, setlogado}}>
            {children}
    </UserContext.Provider>
  );
}
