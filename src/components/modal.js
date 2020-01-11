import React from 'react'
import './styles/modal.css'

function modal(props) {

    let { firstName, lastName, company, twitter, modalShow } = props.formValues

    if (!modalShow) {
        return null
    }

    return (
        <React.Fragment>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span onClick={e => props.handleButtoModal()} className="close">&times;</span>
                    <h4>Bienvenido!</h4>
                    <br />
                    <p>Muchas gracias {firstName} {lastName} (@{twitter}) de la empresa {company} por tu registro.</p>
                    <button 
                        onClick={e => props.handleButtoModal()} 
                        type="button" 
                        className="btn btn-secondary my-close-buttom"
                    >Cerrar modal</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default modal
