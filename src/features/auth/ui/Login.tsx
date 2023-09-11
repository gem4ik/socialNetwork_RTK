import React from "react"
import { useFormik } from "formik"
import { LoginParams } from "features/auth/api/authAPI"
import { Button, Checkbox, Form, Input } from "antd"
import { useActions } from "common/hooks/useActions"
import { authThunks } from "features/auth/model/authSlice"
import { useSelector } from "react-redux"
import { AppRootState } from "app/store"

export const Login = () => {

  const captcha = useSelector<AppRootState, string|null>(store=>store.auth.captcha)
  const { login } = useActions(authThunks)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
      captcha: ''
    },
    onSubmit: (values: LoginParams) => {
      login(values)
    }
  })

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={formik.handleSubmit}
      autoComplete="off"
    >
      <Form.Item<LoginParams>
        label="Email"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input
          {...formik.getFieldProps("email")}
        />
      </Form.Item>

      <Form.Item<LoginParams>
        label="Password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password {...formik.getFieldProps("password")} />
      </Form.Item>

      <Form.Item<LoginParams>
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox {...formik.getFieldProps("rememberMe")} >Remember me</Checkbox>
      </Form.Item>

      {captcha &&
      <Form.Item<LoginParams>
        label="Captcha"
        rules={[{ required: true, message: "Please input captcha!" }]}
      >
        <img src={captcha} alt="captcha" />
        <Input
          {...formik.getFieldProps("captcha")}
        />
      </Form.Item>}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}