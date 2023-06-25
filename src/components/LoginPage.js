import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const LoginPagef = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  async function submitLogin(value) {
    console.log(value);
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();
    console.log(data, "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");
    localStorage.setItem("token", data.jwt);
    if (data.status === "Logged in" && data.user.role === 1) {
      console.log(123);
      navigate("/AdminPage");
    } else if (data.status === "Logged in" && data.user.role === 0) {
      navigate("/userpage");
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
          onFinish={submitLogin}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
        >
          <h1 style={{ textAlign: "center", marginBottom: "24px", color: "#1890ff" }}>
            Username
          </h1>
          <Form.Item
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
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

          <Form.Item>
            <Form.Item valuePropName="checked" noStyle>
              <Checkbox style={{ color: "#1890ff" }}>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" style={{ width: "100%", backgroundColor: "#1890ff", borderColor: "#1890ff" }}>
              Login
            </Button>
            <p style={{ textAlign: "center", margin: "12px 0", color: "#777" }}>
              Don't have an account?
              <br />
              <Link to={"/Register"} style={{ color: "#1890ff" }}>Register now!</Link>
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPagef;





// import { Button, Checkbox, Form, Input } from "antd";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const formItemLayout = {
//   labelCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 8,
//     },
//   },
//   wrregisterercol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 16,
//     },
//   },
// };
// const tailFormItemLayout = {
//   wrregisterercol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 16,
//       offset: 8,
//     },
//   },
// };
// const LoginPagef = () => {
//   const [form] = Form.useForm();
//   const navigate = useNavigate();

//   async function submitLogin(value) {
//     console.log(value);
//     const response = await fetch("http://localhost:5000/login", {
//       method: "POST",
//       body: JSON.stringify(value),
//       headers: {
//         "Content-Type": "application/json ; charset=UTF-8",
//       },
//     });

//     const data = await response.json();
//     console.log(data,"BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB")
//     localStorage.setItem("token", data.jwt)
//     if (data.status === "Logged in" && data.user.role === 1) {
 
//       console.log(123)
//       navigate('/AdminPage');
//     } else if (
//       data.status === "Logged in" &&
//       data.user.role === 0 
//     ) {
//       navigate("/userpage");
//     }
//   }

//   return (
//     <div className="registerCont">
//       <div className="registerChild">
//         <Form
//           {...formItemLayout}
//           form={form}
//           name="register"
//           onFinish={submitLogin}
//           initialValues={{
//             residence: ["zhejiang", "hangzhou", "xihu"],
//             prefix: "86",
//           }}
//           style={{
//             maxWidth: 600,
//           }}
//           scrollToFirstError
//         >
//           <h1>Username</h1>
//           <Form.Item
//             name="username"
//             label="username"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your username!",
//                 whitespace: true,
//               },
//             ]}
//           >
//             <Input />
//           </Form.Item>

//           <Form.Item
//             name="password"
//             label="Password"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your password!",
//               },
//             ]}
//           >
//             <Input.Password />
//           </Form.Item>

//           <Form.Item>
//             <Form.Item valuePropName="checked" noStyle>
//               <Checkbox>Remember me</Checkbox>
//             </Form.Item>
//           </Form.Item>
//           <Form.Item {...tailFormItemLayout}>
//             <Button type="primary" htmlType="submit">
//               Login
//             </Button>
//             <p>Don't have an account?</p>
//             <br /> <Link to={"/Register"}>register now!</Link>
//           </Form.Item>
//         </Form>
//       </div>
//     </div>
//   );
// };
// export default LoginPagef;