import React from 'react';
import { Button, Form, Input, InputNumber, Checkbox } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./CollectionForm.css"
import FrameFrom from '../../asset/Form.png';
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
    required: 'Please input your ${label}!',
    types: {
        email: '${label} is not a valid!',
        number: '${label} is not a valid!',
    },
};
/* eslint-enable no-template-curly-in-string */

const CustomerForm = () => {
    const [storedValue, setStoredValue] = useState()
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleTermsChange = (e) => {
        setAcceptedTerms(e.target.checked);
    };

    const onFinish = async (values) => {
        console.log(values);
        // Retrieve 'products' value from localStorage
        const productsFromStorage = localStorage.getItem('products');

        // Parse the retrieved value (assuming it's a JSON string)
        const parsedProducts = productsFromStorage ? JSON.parse(productsFromStorage) : null;

        // Update the state with the parsed value
        setStoredValue(parsedProducts);
        if (!acceptedTerms) {
            // Handle the case where terms are not accepted
            console.log('Please accept the terms before submitting.');
            return;
        }
        // Log the parsed value
        console.log(parsedProducts);

        const pick_up_place = localStorage.getItem('pick_up_place');
        const pick_up_date = localStorage.getItem('pick_up_date');
        const { data } = await axios.post("https://orders-chrismast-ten.vercel.app/api/order/orderForm", {
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
        <div className="bg-backGround flex flex-col w-full h-auto justify-center items-center relative
        mobileSmall:px-4 mobileSmall:gap-5
        ">
            <div className="w-full text-center font-bold text-[#E3D5C8] text-[50px] font-DancingScript gap-10 mt-10 mb-10 relative
                mobileSmall:text-[30px]
            ">CUSTOMER FORM</div>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                    color: '#E3D3C4',
                    // position:"absolute"
                }}
                validateMessages={validateMessages}
            >
                <div className="
                    tablet:flex flex-row
                ">

                </div>
                <Form.Item
                    hasFeedback
                    name={['user', 'first_name']}
                    label="First Name"
                    style={{}}
                    rules={[
                        {
                            required: true,
                            // message: 'Please input your first username!'
                        },
                    ]}
                >
                    <Input className='px-3 py-2' />
                </Form.Item>
                <Form.Item
                    hasFeedback
                    name={['user', 'last_name']}
                    label="Last Name"
                    rules={[
                        {
                            required: true,
                            // message: 'Please input your last username!'
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
                            // message: 'Please input your email!'
                        },
                    ]}
                >
                    <Input style={{
                        // border:"#E3D3C4",
                        background: '#2C2C2C'
                    }} />
                </Form.Item>
                <Form.Item
                    hasFeedback
                    name={['user', 'phone']}
                    label="Phone Number"
                    rules={[
                        {
                            type: 'number',
                            required: true,
                            // message: 'Please input your phone number!'
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
                            // message: 'Please input zip code!'
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
                            // message: 'Please input your city!'
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
                            // message: 'Please input your street!'
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}
                >
                    <Checkbox>
                        Accept all terms and conditions
                    </Checkbox>
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