import {useForm, Controller} from 'react-hook-form';
import { Modal, Row, Col, Input, Radio, Checkbox } from 'antd';

// resolver
import {yupResolver} from '@hookform/resolvers/yup';

import ModalFooter from './elements/modal-footer';

import './contact-information-modal.scss';

//schema
import { ContactInformationSchema } from './validation';

const ContactInformationModal = ({ onCancel, visible, onSubmit }) => {

    const { handleSubmit, control, reset, formState: { errors } } = useForm({
        resolver: yupResolver(ContactInformationSchema)
    });

    const handleReset = () => {
        reset({ firstName: '', lastName: '', company: '', jobTitle: '', email: '', agreement: 'Yes', termsConditions: false });
    };
    
    return (
      <Modal
        className="contact-information"
        centered
        width={700}
        height={500}
        title="Contact information"
        onCancel={onCancel}
        visible={visible}
        footer={<ModalFooter handleSubmit={handleSubmit} onSubmit={onSubmit} handleReset={handleReset} />}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row gutter={[16, 24]} className="inputs">
            <Col span={12}>
              <Controller
                control={control}
                name="firstName"
                render={({ field: { value, onChange } }) => (
                  <Input className={`${errors.firstName && 'invalid'}`} value={value} onChange={onChange} placeholder="First Name *" />
                )}
              />
              {errors.firstName && <div className="error_sect">{errors.firstName.message} </div>}
            </Col>
            <Col span={12}>
              <Controller
                control={control}
                name="lastName"
                render={({ field: { value, onChange } }) => (
                  <Input className={`${errors.lastName && 'invalid'}`} value={value} onChange={onChange} placeholder="Last Name *" />
                )}
              />
              {errors.lastName && <div className="error_sect">{errors.lastName.message} </div>}
            </Col>
          </Row>

          <Row gutter={[16, 24]} className="inputs">
            <Col span={12}>
              <Controller
                control={control}
                name="company"
                render={({ field: { value, onChange } }) => (
                  <Input className={`${errors.company && 'invalid'}`} value={value} onChange={onChange} placeholder="Company *" />
                        )}
              />
              {errors.company && <div className="error_sect">{errors.company.message} </div>}
            </Col>
            <Col span={12}>
              <Controller
                control={control}
                name="jobTitle"
                render={({ field: { value, onChange } }) => (
                  <Input className={`${errors.jobTitle && 'invalid'}`} value={value} onChange={onChange} placeholder="Job title *" />
                        )}
              />
              {errors.jobTitle && <div className="error_sect">{errors.jobTitle.message} </div>}
            </Col>
          </Row>
          <Row gutter={[16, 48]} className="inputs">
            <Col span={24}>
              <Controller
                control={control}
                name="email"
                render={({ field: { value, onChange } }) => (
                  <Input className={`${errors.email && 'invalid'}`} value={value} onChange={onChange} placeholder="Email *" />
                    )}
              />
              {errors.email && <div className="error_sect">{errors.email.message} </div>}
            </Col>
          </Row>
          <Row gutter={[16, 48]} className="inputs">
            <Col span={24}>
              <p>
                I agree to receive emailed reports, articles, and event invitations. I understand I may unsubscribe at any time by clicking the link included in emails.
                <span style={{color: '#FF0000'}}>*</span>
              </p>
              <Controller
                control={control}
                name="agreement"
                defaultValue="Yes"
                render={({ field: { value, onChange } }) => (
                  <Radio.Group value={value} onChange={onChange}>
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="No">No</Radio>
                  </Radio.Group>
                )}
              />
              {errors.agreement && <div className="error_sect">{errors.agreement.message} </div>}
            </Col>
          </Row>
          <Row gutter={[16, 48]} className="inputs">
            <Col span={24}>
              <Controller
                control={control}
                name="termsConditions"
                render={({ field: { value, onChange } }) => (
                  <Checkbox
                    checked={value}
                    onChange={(e) => onChange(e.target.checked)}
                  >
                    The submission of personal information through this page is subject to Deloitte's <a>Privacy Statement </a> and <a>Legal Terms </a>
                    <span style={{color: '#FF0000'}}>*</span>
                  </Checkbox>
                )}
              />
              {errors.termsConditions && <div className="error_sect">{errors.termsConditions.message} </div>}
            </Col>
          </Row>
        </form>
      </Modal>
    );
};

export default ContactInformationModal;