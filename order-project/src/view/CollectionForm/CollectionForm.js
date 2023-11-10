import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
};
/* eslint-enable no-template-curly-in-string */

const CustomerForm = () => {
    const [storedValue, setStoredValue] = useState()
    const onFinish = async (values) => {
        console.log(values);
        // Retrieve 'products' value from localStorage
        const productsFromStorage = localStorage.getItem('products');

        // Parse the retrieved value (assuming it's a JSON string)
        const parsedProducts = productsFromStorage ? JSON.parse(productsFromStorage) : null;

        // Update the state with the parsed value
        setStoredValue(parsedProducts);

        // Log the parsed value
        console.log(parsedProducts);

        const pick_up_place  = localStorage.getItem('pick_up_place');
        const pick_up_date = localStorage.getItem('pick_up_date');
        const { data } = await axios.post("http://localhost:8080/api/order/orderForm", {
            pick_up_date: pick_up_date,
            pick_up_place: pick_up_place,
            first_name: values.user.first_name,
            last_name: values.user.last_name,
            email: values.user.email,
            phone_number: values.user.phone,
            zip_code: values.user.zip_code,
            city: values.user.city,
            street: values.user.street,
            products: parsedProducts.map(product => ({
                product_name: product.orderName,
                product_quantity: product.quantity
            }))
        });
    };
    return (
        <div className="bg-backGround flex flex-col w-full h-auto justify-center items-center">
            <div className="w-full text-center font-bold text-[#E3D5C8] text-[50px] font-DancingScript gap-10 mt-10 mb-10">CUSTOMER FORM</div>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                }}
                validateMessages={validateMessages}
            >
                <Form.Item
                    hasFeedback
                    name={['user', 'first_name']}
                    label="First Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    hasFeedback
                    name={['user', 'last_name']}
                    label="Last Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    hasFeedback
                    name={['user', 'email']}
                    label="Email"
                    rules={[
                        {
                            type: 'email',
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    hasFeedback
                    name={['user', 'phone']}
                    label="Phone Number"
                    rules={[
                        {
                            type: 'number',
                            required: true,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    hasFeedback
                    name={['user', 'zip_code']}
                    label="Zip Code"
                    rules={[
                        {
                            type: 'number',
                            required: true,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    hasFeedback
                    name={['user', 'city']}
                    label="City"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    hasFeedback
                    name={['user', 'street']}
                    label="Street"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        ...layout.wrapperCol,
                        offset: 8,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default CustomerForm