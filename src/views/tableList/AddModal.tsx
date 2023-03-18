import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button, Select, Tag,notification, message  } from 'antd';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';
import type { NotificationPlacement } from 'antd/es/notification/interface';

interface addModalType {
    show: boolean;
    changeShow: (value: boolean) => void;
}

const AddModal = (props: addModalType) => {
    const [open, setOpen] = useState(false);
    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        setOpen(props.show)
    }, [props.show])

    const openNotification = (message:string) => {
        console.log('进来了')
        api.open({
          message: `提示`,
          description:<div>{message}</div>,
        });
      };

    const handleCancel = () => {
        handleClose()
    };
    const handleClose = () => {
        setOpen(false);
        props.changeShow(false)
    }

    const onFinish = (values: any) => {
        console.log('Success:', values);
        handleClose()
    };

    const onFinishFailed = (errorInfo: any) => {
        openNotification('提交失败')
        console.log('Failed:', errorInfo);
        // handleClose()
    };

    const tagRender = (props: CustomTagProps) => {
        const { label, value, closable, onClose } = props;
        const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
            event.preventDefault();
            event.stopPropagation();
        };
        return (
            <Tag
                color={value}
                onMouseDown={onPreventMouseDown}
                closable={closable}
                onClose={onClose}
                style={{ marginRight: 3 }}
            >
                {label}
            </Tag>
        );
    };

    const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];

    return (
        <>
            <Modal
                title="Title"
                open={open}
                // onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <>
                    <Form
                        name="basic"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="姓名"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="年龄"
                            name="age"
                            rules={[{ required: true, message: 'Please input your age!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="地址"
                            name="address"
                            rules={[{ required: true, message: 'Please input your address!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="标签"
                            name="tags"
                            rules={[{ required: true, message: 'Please select your tags!' }]}
                        >
                            <Select
                                mode="multiple"
                                showArrow
                                tagRender={tagRender}
                                defaultValue={[]}
                                style={{ width: '100%' }}
                                options={options}
                            />
                        </Form.Item>


                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button onClick={handleCancel}>
                                取消
                            </Button>
                            <Button type="primary" htmlType="submit">
                                确定
                            </Button>
                        </Form.Item>
                    </Form>
                </>
            </Modal>
        </>
    );
};

export default AddModal;