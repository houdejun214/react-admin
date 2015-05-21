import React from 'react';
import {Link} from 'react-router';

class MaEditButton extends React.Component {
    render() {
        let size = this.props.size ? ' btn-' + size : '',
            className = 'btn btn-default' + size,
            params = {
                entity: this.props.entity.name(),
                id: this.props.entry.identifierValue
            };

        return (
            <Link className={className} to="edit" params={params}>
                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>&nbsp;{this.props.label || 'Edit'}
            </Link>
        );
    }
}

MaEditButton.propTypes = {
    entity: React.PropTypes.object.isRequired,
    entry: React.PropTypes.object.isRequired,
    size: React.PropTypes.string,
    label: React.PropTypes.string
};

export default MaEditButton;
