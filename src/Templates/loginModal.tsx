import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Form, Input } from "antd";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { ok } from "assert";
interface LoginModalProps {
    Open: boolean;
    onClose?: () => void;
    onLogin?: () => void;
    handleOk?: () => void;
    handleCancel?: () => void;
    okText?: string;
    
}
export const LoginModal = ({Open,onClose,onLogin,handleOk,handleCancel,okText}:LoginModalProps) => {


return (
    <>
        <Modal
            title="Login"
            visible={Open}
            onOk={handleOk}
            onCancel={handleCancel}
            okText={okText}
            
        >
            <Form >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: "Please input your username!" }]}
                >
                    <Input size="large" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Please input your password!" }]}
                >
                    <Input.Password size="large" />
                </Form.Item>
            </Form>
            <div className="flex justify-center gap-2">
            <a href="/forgot-password">Forgot Password?</a>
            <a href="/signup">Sign up with</a>
            <GoogleOutlined style={{ fontSize: "24px" ,cursor:"pointer",backgroundColor:"black", color:"white",}} />
            <FacebookOutlined style={{ fontSize: "25px" ,cursor:"pointer",backgroundColor:"black", color:"white"}} />
            </div>
        </Modal>
    </>
);
};
