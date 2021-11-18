import { Modal } from 'antd';

import ModalFooter from './elements/modal-footer';

const ContactInformationModal = ({ onCancel, visible }) => {
    
    return (
      <Modal
        centered
        width={700}
        height={500}
        title="Contact information"
        onCancel={onCancel}
        visible={visible}
        footer={<ModalFooter />}
      />
    );
};

export default ContactInformationModal;