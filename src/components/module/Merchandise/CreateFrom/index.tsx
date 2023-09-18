import { Button, Form, Input, Modal } from 'antd';
import { useState } from 'react';
import { usePost } from '../../../../hooks/usePost';

interface Values {
    title: string;
    description: string;
    modifier: string;
}

interface CollectionCreateFormProps {
    open: boolean;
    onCreate: (values: Values) => void;
    onCancel: () => void;
}

function CreateMerchandiseFrom({
    open,
    onCreate,
    onCancel,
}: CollectionCreateFormProps) {
    const [form] = Form.useForm();
    return (
        <Modal
            open={open}
            title="Create a new collection"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{ modifier: 'public' }}
            >
                <Form.Item
                    name="code"
                    label="Code"
                    rules={[{ required: true, message: 'Please input the title of collection!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="name" label="Name">
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
}


export default function CreateMerchandiseButton() {
    const [open, setOpen] = useState(false);
    const [data, error, loading, postData] = usePost("/merchants");

    const onCreate = async (values: any) => {

        const raw = JSON.stringify({
            "code": "MC2308230120",
            "name": "MC for Payment testing 4 PA03"
        });

        await postData(raw);
        setOpen(false);
    };

    return (
        <div>
            <Button
                type="primary"
                onClick={() => {
                    setOpen(true);
                }}
            >
                New Merchandise
            </Button>
            <CreateMerchandiseFrom
                open={open}
                onCreate={onCreate}
                onCancel={() => {
                    setOpen(false);
                }}
            />
        </div>
    )
}