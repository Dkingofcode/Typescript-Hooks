import React, {useState, useEffect} from "react";
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

function App(){
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        async function fetchdata(){
          const result = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
          ).then((result) => result.data);

          setData(result);
        }

        fetchdata();
    }, []);

    return ( 
    <>
    <h1>Network requests</h1>

    {data.map((user) => {
        return <li>{user.name}</li>
    })}

    {/* {JSON.stringify(data)} */}
    </>
    );
}

export default App;