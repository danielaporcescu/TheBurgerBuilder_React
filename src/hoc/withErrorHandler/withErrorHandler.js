import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Auxil from '../Auxi/Auxil';
import useHttpErrorHandler from '../../hooks/http-error-handler';

const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        const [error, clearError] = useHttpErrorHandler(axios);

        return (
            <Auxil>
                <Modal
                    show={error}
                    modalClosed={clearError}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </Auxil>
        );
    }
}

export default withErrorHandler;