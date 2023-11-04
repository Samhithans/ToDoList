import React from "react";
import { Button, Form, Input, InputNumber, Typography } from 'antd';
function Item(props){
    const [form] = Form.useForm();
    const newItem = Form.useWatch('name', form);
    const {items,setItems, setShowAddItem}=props;
    function AddItem(newItem){
        setItems([...items,newItem])
        setShowAddItem(false);
    }
    return <>
        <Form form={form} layout="vertical" autoComplete="off">
            <Form.Item name="name" label="">
                <Input />
            </Form.Item>
        </Form>
        <Button type="primary" onClick={()=>AddItem(newItem)}> Add </Button>
    </>
}

export default Item;