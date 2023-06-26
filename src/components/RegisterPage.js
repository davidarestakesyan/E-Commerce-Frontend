import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 },
  },
};

const RegisterPagef = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  async function submitRegister(value) {
    console.log(value);
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });

    const data = await response.json();
    console.log(data);
    if (data.message === "Created") {
      navigate("/LoginPage");
    }
  }

  return (
    <div
      className="registerCont"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <div
        className="registerChild"
        style={{
          backgroundColor: "#fff",
          padding: "24px",
          borderRadius: "4px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "600px",
        }}
      >
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={submitRegister}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
        >
          <h1 style={{ textAlign: "center", marginBottom: "24px", color: "#1890ff" }}>
            Create Account
          </h1>
          <Form.Item
            name="username"
            label="Username"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <strong>agreement</strong>
            </Checkbox>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Register
            </Button>
            <p style={{ textAlign: "center", margin: "12px 0", color: "#777" }}>
              Have an Account?
              <br /> <Link to={"/LoginPage"} style={{ color: "#1890ff" }}>Login</Link>
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPagef;


