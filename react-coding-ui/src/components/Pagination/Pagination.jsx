import React, { useEffect, useState } from 'react';
import './Pagination.css';
import axios from 'axios';

function Pagination() {

    const [users, setUsers] = useState([]);

    const [page, setPage] = useState(1);

    const URL = 'https://dummyjson.com/users';

    const fetchUsers = () => {

        axios.get(URL).then((res) => {
            const persons = res.data;
            setUsers(persons.users);
            // console.log(users)
        })

    };
    useEffect(() => {
        fetchUsers();
    }, [])

    function selectPageHandle(selectedPage) {
        //pagination logic

        if (
            selectedPage >= 1 &&
            selectedPage <= users.length / 5 &&
            selectedPage !== page
        ) {
            setPage(selectedPage)
        }

    }

    return (
        <div className='userTable'>
            <h1 className='heading'>Users</h1>

            <table>
                <tr>
                    <th className='userHeading'>User</th>
                    <th className='userBirth'>DOB</th>
                    <th className='userPhone'>Phone Number</th>
                    <th className='userAddress'>Location</th>
                    <th className='contact'>Contact</th>
                    <th className='userAction'>Action</th>
                </tr>

                {users.slice(page * 5 - 5, page * 5).map((user, index) => {
                    return (
                        <tr>
                            <td>
                                <div className='userDetails'>
                                    <div className='userPic'>
                                        <img src={user.image} alt={user.firstName} />
                                    </div>
                                    <div className='userHandles'>
                                        <p className='userName'>{user.firstName} </p>
                                        <p className='userEmail'>{user.email} </p>


                                    </div>
                                </div>
                            </td>
                            <td className='userBirth f-weight'>{user.birthDate}</td>
                            <td className='userPhone f-weight'>{user.phone}</td>
                            <td className='userAddress f-weight'>{user.address.city}</td>
                            <td className='contact'>
                                <button className='contactCTA'>Contact</button>
                            </td>
                            <th className='userAction'>Action</th>
                        </tr>

                    )
                })}
            </table>

            {
                users.length > 0 && (
                    <div className='pagination'>
                        <div className='arrows' onClick={() => selectPageHandle(page - 1)}>
                            {"<"}
                        </div>
                        <div className='pageNumbers'>
                            {
                                Array.from({ length: users.length / 5 }, (_, i) => {
                                    console.log(i);
                                    return (
                                        <div key={i} onClick={() => selectPageHandle(i + 1)} >
                                            {i + 1}
                                        </div>
                                    );
                                })
                            }
                        </div>

                        <div className='arrows' onClick={() => selectPageHandle(page + 1)} >
                            {">"}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Pagination