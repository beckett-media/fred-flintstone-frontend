import React from 'react';
import { Button, Modal, Input, Form, Select } from 'antd';

const { TextArea } = Input;

const ProblemSubmissionModal = ({ open, setOpen }) => {
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const handleViewDetails = () => {
    setOpen(false);
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <Modal
      title="Submit Problem Reason"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          type="primary"
          form="myForm"
          key="submit"
          htmlType="submit"
          //   loading={loading}
        >
          Submit
        </Button>,
      ]}
    >
      <h3>Order Id # 123456789</h3>
      <Form
        layout="vertical"
        id="myForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name={'reason'}
          label="Select a Reason"
          rules={[
            {
              required: true,
              message: 'Please select a reason',
            },
          ]}
        >
          <Select
            name={'reason'}
            showSearch
            placeholder="Reason"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: '1',
                label: 'Payment Issues',
              },
              {
                value: '2',
                label: 'Damaged Package/Items',
              },
              {
                value: '3',
                label: 'Additional/Missing Items',
              },
              {
                value: '4',
                label: 'Wrong Items',
              },
              {
                value: '5',
                label: 'Other',
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          name={'comment'}
          label="Add Comment"
          required
          rules={[
            {
              required: true,
              message: 'Please add a comment',
            },
          ]}
        >
          <TextArea name={'comment'} rows={4} placeholder="Add A comment" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default ProblemSubmissionModal;
