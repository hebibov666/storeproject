import Link from "next/link"
import {useFormik } from "formik"
import * as Yup from "yup"
import Input from "../components/InputComponent";
import Container from "../components/Container";
import Button from "../components/ButtonComponent";
import Form from "../components/FormComponent";
import ImageSelect from "../components/ImageSelect";
import Header from "../components/PageHeader";
function SignUp() {
    const initialValues = {
        username: "",
        email: "",
        password: "",
        number: "",
        image: null,
    }
    const onSubmit = (values) => {
        console.log(values)
    }
    const validationSchema = new Yup.object({
        username: Yup.string().required("İstifadəçi adını daxil edin"),
        email: Yup.string().email("Düzgün email ünvanı daxil edin").required("Email ünvanı daxil edin"),
        number: Yup.string().required("Telefon nömrəsi daxil edin"),
        password: Yup.mixed().required("Şifrə daxil edin")
    })
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,

    })
    return (
        <Container>
            <Header title="Qeydiyyat" />
            <Form onSubmit={formik.handleSubmit}>
                <ImageSelect />
                <Input
                    type="text"
                    placeholder="İstifadəçi adı"
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    error={formik.errors.username} 
                />

                <Input
                    type="text"
                    placeholder="Email ünvanı"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.errors.email}
                />

                <Input
                    type="text"
                    placeholder="Telefon nömrəsi"
                    name="number"
                    onChange={formik.handleChange}
                    value={formik.values.number}
                    error={formik.errors.number}
                />

                <Input
                    type="password"
                    placeholder="Şifrə"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    error={formik.errors.password}
                />

                <Button text="Hesab yarat" type="submit" />
                <Link href="./signIn" className="w-[90%] text-blue-600 flex justify-end ">
                    Hesabın var? Giriş et
                </Link>
            </Form>

        </Container>
    )
}
export default SignUp