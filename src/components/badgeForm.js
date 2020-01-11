import React from 'react'


function badgeForm(props) {

    const handleClick = () => {
        console.log(props.formValues)
        props.handleButtoModal()
    }

    return (
        <React.Fragment>
            <h2 className="pt-3">Nuevo badge.</h2>

            <form>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input
                        onChange={props.onChange}
                        className="form-control"
                        type="text"
                        name="firstName"
                        value={props.formValues.firstName}
                    />
                </div>
                <div className="form-group">
                    <label>Apellidos:</label>
                    <input
                        onChange={props.onChange}
                        className="form-control"
                        type="text"
                        name="lastName"
                        value={props.formValues.lastName}
                    />
                </div>
                <div className="form-group">
                    <label>Nombre de empresa:</label>
                    <input
                        onChange={props.onChange}
                        className="form-control"
                        type="text"
                        name="company"
                        value={props.formValues.company}
                    />
                </div>
                <div className="form-group">
                    <label> Usuario de Twitter:</label>
                    <input
                        onChange={props.onChange}
                        className="form-control"
                        type="text"
                        name="twitter"
                        value={props.formValues.twitter}
                    />
                </div>
                <button
                    onClick={handleClick}
                    className="btn btn-success btn-block"
                    type="button"
                >Enviar datos!
                    </button>
            </form>
        </React.Fragment>
    )
}

export default badgeForm
