import React, { Component } from 'react';

class PurchaseDetails extends Component {
    render() {
        const { className } = this.props;

        return (
            <div className={`${className} purchases-details`}>
                purchase details go here
            </div>
        )
    }
}

export default PurchaseDetails;