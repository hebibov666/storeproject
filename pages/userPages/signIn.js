import Link from "next/link"
import { useFormik } from "formik"
import * as Yup from "yup"
import Input from "../components/InputComponent";
import Container from "../components/Container";
import Button from "../components/ButtonComponent";
import Header from "../components/PageHeader";
import Form from "../components/FormComponent";
function SignIn(){
    const initialValues = {
        email: "",
        password: "",
    }
    const onSubmit = (values) => {
        console.log(values)
    }
    const validationSchema = new Yup.object({
        email: Yup.string().email("Düzgün email ünvanı daxil edin").required("Email ünvanı daxil edin"),
        password: Yup.mixed().required("Şifrə daxil edin")
    })
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,

    })
    return(
      <Container>
      <Header title="Giriş et"/>
<Form onSubmit={formik.handleSubmit}>
<Input
type="text" 
placeholder="Email ünvanı" 
name="email"
onChange={formik.handleChange}
value={formik.values.email}
error={formik.errors.email} 
/>
<Input 
type="password" 
placeholder="Şifrə" 
name="password"
onChange={formik.handleChange}
value={formik.values.password}
error={formik.errors.password} 
/>
<Button text="Giriş et" type="submit" />
<Link href="./signUp" className="w-[90%] text-blue-600 flex justify-end ">
Hesabın yoxdur? Qeydiyyat
</Link>
</Form>
</Container>
    )
}
export default SignIn