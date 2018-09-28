import React, { Component } from 'react';
import CeramicIndex from './ceramic_index';
import CeramicForm from './ceramic_form';

export default class Home extends Component {
    render() {
        return (
            <div>
                <CeramicIndex/>
                <CeramicForm/>
            </div>
        );
    }
}