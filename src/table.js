import React from 'react'


const Table = (props) =>{
    return(
        <table>
         <thead>
             <tr>
              <th
              onClick={props.onSort.bind(null, 'id')}
              >#</th>
              <th
              onClick={props.onSort.bind(null, 'firstName')}>First Name</th>
              <th
              onClick={props.onSort.bind(null, 'lastName')}
              >
              Last Name</th>
              <th>Email</th>
              <th>Phone</th>
             </tr>
         </thead>
         <tbody>
         {
            props.data.map(row =>(
                <tr key={row.id + row.phone}>
                    <td>{row.id}</td>
                    <td>{row.firstName}</td>
                    <td>{row.lastName}</td>
                    <td>{row.email}</td>
                    <td>{row.phone}</td>
                </tr>
            )) 
         }
         </tbody>
        </table>
    )
}




export default Table;





