import React, { Component, Fragment } from 'react';
import './AppFooter.css';

export default class AppFooter extends Component {

    render() {
        const currnetYear = new Date().getFullYear();
        return(
            <Fragment>
                <hr />
                <p className='footer'>Copyright &copy; { currnetYear } Acme Ltd,</p>
            </Fragment>

        );
    }
}