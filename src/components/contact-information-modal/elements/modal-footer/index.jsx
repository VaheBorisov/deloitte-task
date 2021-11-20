import { Button , Row, Col} from 'antd';

const ModalFooter = ({ onSubmit, handleSubmit, handleReset }) => {

    return (
      <Row gutter={[16, 48]}>
        <Col span={24}>
          <Button type="text" danger onClick={handleReset}>Reset</Button>
          <Button type="primary" onClick={handleSubmit(onSubmit)}>Submit</Button>
        </Col>
      </Row>
    );
};

export default ModalFooter;