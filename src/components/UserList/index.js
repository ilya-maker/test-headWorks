import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions';

// Styles
import './UserList.scss'

const UserList = () => {
    const dispatch = useDispatch()

    const users = useSelector(state => state.users);
    const [selectedElement, setSelectedElement] = useState(null)

    const deleteUser = (lastname, date) => {
        dispatch(actions.deleteUser(lastname, date));
    };

    return (
        <section className="UserList">
            <div className="container">
                <ul className="UserList__list">
                    {users.map(({name, lastname, date, loyalty, gender}, index) => (
                    <li
                        className={`${index === selectedElement ? "UserList__item UserList__item--showInfo" : "UserList__item"}`}
                        key={`${date}-${lastname}-${name}`}
                        onClick={() => setSelectedElement(index)}
                        onBlur={() => setSelectedElement(null)}
                    >
                        <button className="UserList__delete" onClick={() => deleteUser({lastname, date})}>
                            <span className="UserList__delete--cross"/>
                        </button>
                        <div className="UserList__info">
                            <p className="UserList__text">
                                {name} {lastname}
                            </p>
                            <p className="UserList__text">
                                {date}
                            </p>
                        </div>
                        <div className="UserList__info">
                            <p className="UserList__text">
                                Loyalty: {loyalty}
                            </p>
                            <p className="UserList__text">
                                Gender: {gender}
                            </p>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default UserList;