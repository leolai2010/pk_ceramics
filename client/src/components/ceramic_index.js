import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCeramics } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class CeramicsIndex extends Component {
    componentDidMount() {
        this.props.fetchCeramics();
    }
    renderCeramics() {
        return _.map(this.props.ceramics, ceramic=>{
            return(
                <li className="list-group-item" key={ceramic._id}>
                    {ceramic.name}
                </li>
            );
        });
    }
    render() {            
        return(

            <div>
                <ul className="list-group">
                    {this.renderCeramics()}
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state){
    return { ceramics: state.ceramics };
}
export default connect(mapStateToProps, {fetchCeramics})(CeramicsIndex);