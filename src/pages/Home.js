import React, { useState } from 'react'

import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import Modal from '../components/modal.js';

import NewBadge from './newBadge.js';


function Home() {

    const [form, setform] = useState({
        firstName: '',
        lastName: '',
        company: '',
        twitter: '',
        modalShow: false,
    })

    const handleChange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleButtoModalTrue = () => {
        setform({
            ...form,
            modalShow: true
        })
    }

    const handleButtoModalFalse = () => {
        setform({
            ...form,
            modalShow: false
        })
    }

    return (
        <React.Fragment>
            <Navbar></Navbar>
            <div className="container">
                <NewBadge
                    onChange={handleChange}
                    handleButtoModal={handleButtoModalTrue}
                    formValues={form}
                ></NewBadge>
            </div>
            <Footer></Footer>
            <Modal
                handleButtoModal={handleButtoModalFalse}
                formValues={form}
            />
        </React.Fragment>
    )
}

export default Home
