import {

   Button,
   Form,
   Upload,
   Input
 } from "antd";
 
 import { useState } from "react";
 
 const formItemLayout = {
   labelCol: {
     xs: {
       span: 24,
     },
     sm: {
       span: 8,
     },
   },
   wrRegistererCol: {
     xs: {
       span: 24,
     },
     sm: {
       span: 16,
     },
   },
 };
 const tailFormItemLayout = {
   wrRegistererCol: {
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
 const Createproductsf = () => {
   const [form] = Form.useForm();
   const [state,setState] =useState({
   name:"",
   image:null,
   description:"", 
   price:1, 
   categoryId:1}) 

   const handleChange = (name, value) => {
    setState((prevState) => ({
        ...prevState,
        [name]: value
    }))
};

   const handleUpload = () => {
    const {
      name,image,description,price,categoryId
    } = state
    addProduct(state)
   }
   async function addProduct({name,image,description,price,categoryId}) {
    const formData = new FormData()
    formData.append("name",name)
    formData.append("image",image)
    formData.append("description",description)
    formData.append("price",price.toString())
    formData.append("categoryId",categoryId.toString())

     try {
       const response = await fetch("http://localhost:5000/createproduct",{
         method: 'POST', 
        body:formData ,
         headers: {
           "Authorization": localStorage.getItem("token"),
            // "Content-Type": "multipart/form-data",
           // "Accept": "application/json",
          //  "type": "formData"
         },
       });
   
       const data = await response.json();
       if (data.message === "Created") {
          const successMessage = document.getElementById("success-message");
       successMessage.textContent = "Product created successfully!";
       }
     } catch (error) {
       console.log("An error occurred while creating the product:", error);
     }
   }
    const handleFileUpload = (fileList) => {
    form.setFieldsValue({ image: fileList });
  };
   
   

   return (
     <div  className="registerCont">
       <div className="registerChild">
     <Form
     id="success-message"
       {...formItemLayout}
       form={form}
       name="register"
       onFinish={handleUpload}
       initialValues={{
         residence: ["zhejiang", "hangzhou", "xihu"],
         prefix: "86",
       }}
       style={{
         maxWidth: 600,
       }}
       scrollToFirstError
     >
       <h1>Add Product</h1>
     <Form.Item
         name="name"
         label="name"
         tooltip="What is your products name?"
         rules={[
           {
             required: true,
             message: "Please input your product name!",
             whitespace: true,
           },
         ]}
       >
         <Input onChange={(e) => handleChange('name', e.target.value)} value={state.name}/>
       </Form.Item>
 
       
       <Form.Item 
         name="image"
         label="image"
         rules={[
          
           {
             required: true,
             message: "Please input your image URL !",
             whitespace: true,
           },
         ]}
       >
  
  <input type="file" accept='image/*' onChange={(e) => handleChange('image', e.target.files[0])}/>
       </Form.Item>   
  
       <Form.Item
         name="description"
         label="descripton"
         rules={[
           {
             required: true,
             message: "Please input product's descripton",
             whitespace: true,
           },
         ]}
       >
         <Input onChange={(e) => handleChange('description', e.target.value)} value={state.description}/>
       </Form.Item>



       <Form.Item
         name="price"
         label="price"
         rules={[
           {
             required: true,
             message: "Please input your product's price!",
             whitespace: true,
           },
         ]}
       >
         <Input onChange={(e) => handleChange('price', e.target.value)} value={state.price}/>
       </Form.Item>
 
       <Form.Item
         name="categoryId"
         label="Category ID"
         rules={[
           {
             required: true,
             message: "Please input your Category ID !",
             whitespace: true,
           },
         ]}
       >
         <Input onChange={(e) => handleChange('categoryId', e.target.value)} value={state.categoryId}/>
       </Form.Item>
 
       
       
       <Form.Item {...tailFormItemLayout}>
         <Button type="primary" htmlType="submit">
           Add Product
         </Button>
       </Form.Item>
     </Form>
     </div>
   </div>
   );
 };
 export default Createproductsf;