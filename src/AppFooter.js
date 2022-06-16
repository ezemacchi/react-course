import React, { Component, Fragment } from 'react';

export default class AppFooter extends Component {

    render() {
        const currnetYear = new Date().getFullYear();
        return(
            <Fragment>
                <hr />
                <p>Copyright &copy; { currnetYear } Acme Ltd,</p>
            </Fragment>

        );
    }
}