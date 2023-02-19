import { gql, useQuery } from '@apollo/client'

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;
function Clients() {
    
    const { loading, error, data } = useQuery(GET_CLIENTS);

    if(loading){
        return <p>Loading.....</p>
    }
    if(error){
        return <p>Something went Wrong !!</p>
    }
    
    console.log('data', data)
    const {clients = []} = data;
    return (
        <div>
            {clients.map(data=>{
                return(
                    <p>{data.name}</p>
                )
            })}
        </div>
    )
}

export default Clients