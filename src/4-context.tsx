import React, {useState, useEffect, useContext, createContext } from "react";
import axios from "axios";


export interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    websites: string;
    company: Company;
}

export interface Address{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Geo{
    lat: string;
    lng: string;
}

export interface Company{
    name: string;
    catchPhrase: string;
    bs: string;
}

interface ContextResult{ 
  users: User[]
}

const UserContext = createContext<ContextResult>({ users: [] })

function UserContextProvider({ children }: {children: React.ReactNode}){
       const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        async function fetchdata(){
          const result = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
          ).then((result) => result.data);

          setUsers(result);
        }

        fetchdata();
    }, []);



    return <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
}

const useUserContext = () => useContext(UserContext);


export { UserContextProvider, useUserContext };

function ChildComponent(){
  const { users } = useUserContext();  

   
    return ( 
        <>
         <h1>Network request</h1>

         {users.map((user) => {
            return <li>{user.name}</li>;
         })}

         {/* {JSON.stringify(data)} */}
        </>       
    );

    {/* {JSON.stringify(data)} */}
}


function App() {
    return <UserContextProvider>
        <ChildComponent />
    </UserContextProvider>
}


export default App;