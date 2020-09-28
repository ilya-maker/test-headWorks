import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions';
import { useHistory } from 'react-router-dom';

// Components
import ValidateError from '../ValidateError';

// Styles
import './RegistrationForm.scss'

//Api
import { getData, postData } from '../../helpers/api'

const RegistrationForm = () => {
    let history = useHistory()

    const dispatch = useDispatch()

    const [userName, setUserName] = useState('')
    const [userLastname, setUserLastname] = useState('')
    const [userGender, setUserGender] = useState('')
    const [userLoyalty, setUserLoyalty] = useState('Not available')
    const [userCard, setUserCard] = useState('');
    const [numberOfRequiredField, setNumberOfRequiredField] = useState(0)

    const [randomData, setRandomData] = useState('');

    useEffect(() => {
        getData().then((data) => setRandomData(data))
    }, [])

    const handleSaveUser = (e) => {
        e.preventDefault();

        if(!userName.trim()) {
            setNumberOfRequiredField(1)
            return;
        }
        if(!userLastname.trim()) {
            setNumberOfRequiredField(2)
            return;
        }
        if(!userGender.trim()) {
            setNumberOfRequiredField(3)
            return;
        }
        if(userLoyalty === "Plastic card" && !userCard.trim()) {
            setNumberOfRequiredField(4)
            return;
        }

        setNumberOfRequiredField(0);
        const today = new Date();
        const dateRegistration = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        const user = {
            name: userName,
            lastname: userLastname,
            gender: userGender,
            loyalty: userLoyalty,
            date: dateRegistration,
            card: userCard
        };
        dispatch(actions.addUser(user));
        postData(user);

        history.push('/userList');
    }

    return (
        <section className="RegistrationForm">
            <div className="container">
                <form className="RegistrationForm__form">
                    <label className="RegistrationForm__label">
                        Name
                    <input 
                        placeholder="Your name"
                        className="RegistrationForm__input"
                        type="text" 
                        value={userName}
                        onChange={event => setUserName(event.target.value)}
                    />
                    {numberOfRequiredField === 1 ? <ValidateError message="enter name"/> : ''}
                    </label>

                    <label className="RegistrationForm__label">
                        Lastname
                    <input 
                        placeholder="Your lastname"
                        className="RegistrationForm__input"
                        type="text" 
                        value={userLastname}
                        onChange={event => setUserLastname(event.target.value)}
                    />
                    {numberOfRequiredField === 2 ? <ValidateError message="enter lastname"/> : ''}
                    </label>

                    <label className="RegistrationForm__label--nopointer">
                        Gender
                    </label>
                    <div className="RegistrationForm__gender">
                        <label className="RegistrationForm__label--small">
                            Man
                            <input
                                className="RegistrationForm__input--radio"
                                name="Gender"
                                type="radio" 
                                value="Man"
                                onChange={event => setUserGender(event.target.value)}
                            />
                        </label>
                        <label className="RegistrationForm__label--small">
                            Woman
                            <input 
                                className="RegistrationForm__input--radio"
                                name="Gender"
                                type="radio" 
                                value="Woman"
                                onChange={event => setUserGender(event.target.value)}
                            />
                        </label>
                    {numberOfRequiredField === 3 ? <ValidateError message="select gender"/> : ''}
                    </div>

                    <label className="RegistrationForm__label">
                        Loyalty program
                        <select
                            className="RegistrationForm__select"
                            value={userLoyalty}
                            onChange={(event) => setUserLoyalty(event.target.value)}
                        >                    
                            <option value="Not available">Not available</option>
                            <option value="Plastic card">Plastic card</option>
                            <option value="Mobile app">Mobile app</option>
                        </select>
                    </label>
                    {
                        userLoyalty === "Plastic card"
                        ? <label className="RegistrationForm__label">
                            Card number
                            <input 
                                placeholder="Your card"
                                className="RegistrationForm__input"
                                type="text" 
                                value={userCard}
                                onChange={event => setUserCard(event.target.value)}
                            />
                        {
                            numberOfRequiredField === 4
                            ? <ValidateError message="enter card number"/>
                            : ''
                        }
                        </label>                        
                        : ''
                    }
                    <button
                        onClick={e => handleSaveUser(e)}
                        className="RegistrationForm__button"
                    >
                        Save
                    </button>
                </form>
                <div className="RegistrationForm__randomData">
                    <p>Random Data</p>
                    <p>{randomData}</p>
                </div>
            </div>
        </section>
    );
}

export default RegistrationForm;