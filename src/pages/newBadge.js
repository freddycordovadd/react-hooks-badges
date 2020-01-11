import React from 'react'

import BadgeForm from '../components/badgeForm.js';
import Badge from '../components/badge.js';


function newBadge(props) {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <BadgeForm
                            onChange={props.onChange}
                            handleButtoModal={props.handleButtoModal}
                            formValues={props.formValues}
                        ></BadgeForm>
                    </div>
                    <div className="col-md-6">
                        <Badge
                            firstName={props.formValues.firstName}
                            lastName={props.formValues.lastName}
                            company={props.formValues.company}
                            twitter={props.formValues.twitter}
                        ></Badge>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default newBadge
