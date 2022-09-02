import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link } from 'react-router-dom';

const UserRow = ({user,refetch,index}) => {
    const deleteUser = (id)=> {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            width:"400",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://ancient-sierra-21215.herokuapp.com/user/${id}`,{
                    method:"DELETE",
                    headers:{
                        "content-type": "application/json"
                    }
                })
                .then(res =>res.json())
                .then(()=>{
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success',
                      
                      )
                      
  
                })
          
            }
          })
    }
    refetch()
    return (
        <tr>
        <th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>
            <button onClick={()=> deleteUser(user._id)} className='btn btn-error mr-4'>Delete</button>
            <Link to={`/edituser/${user._id}`} className='btn btn-info'>Edit</Link>
            </td>
      </tr>
    );
};

export default UserRow;