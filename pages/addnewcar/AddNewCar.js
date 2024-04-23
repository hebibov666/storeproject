import axios from "axios";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";
import { useFormik } from "formik";
import { options } from "@/lib/data";
import CustomSelect from "../components/CustomSelect";
import Header from "../components/PageHeader";
import Container from "../components/Container";
import Form from "../components/FormComponent";
import Button from "../components/ButtonComponent";
import { cities } from "@/lib/data";
import { years } from "@/lib/data";
import Input from "../components/InputComponent";
function NewPost({ cars }) {
    const make = cars.map(car => car.brand);
   const [index,setIndex]=useState(null) //Bu state avtomobil markası seçildikdə Model seçimi üçün olan select box-da həmin markanın modellərinin yazdırılması üçün istifadə olunur
   const initialValues={
        make:"",
        model: "",
        fuelType: "",
        bodyType: "",
        gearBox: "",
        city:"",
        year:"",
        engineSize:"",
        engineType:null,
    }

    const onSubmit=(values)=>{
       console.log(values)
    }
    const formik = useFormik({
        initialValues,
        onSubmit
    });
    {/*Custom select elementlərin açılıb bağlanması üçün funksiya, .red  klassı global.css faylında yaradılıb. Elementə klik etdikdə ona red klassı əlavə olunur və select box açılır  */ }


    {/*Buradakı funksiyalar müvafiq olaraq formik-de teyin edilmiş fieldlərin dəyərini dəyişir.Hərbir funksiya  */ }
    const selectOption = (field, option, index) => {
            formik.setFieldValue(field, option)
            setIndex(index)


    }
    const InputValue=(field,value)=>{
formik.setFieldValue(field,value)
    }
const onlyNumber=(e)=>{
    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
}

    return (
        <Container>
            <Header title="Yeni elan" />

            <Form>
                {/*Avtomobil markasının secilməsi üçün select box */}
                <CustomSelect
                    title={formik.values.make.name || "Marka secin"}
                    options={make}
                    selectOption={selectOption}
                    field="make.name"
                    element="input"
                    header="Marka"
                />
                {/*Avtomobil modelinin secilməsi üçün select box */}
                <CustomSelect
                    title={formik.values.model || "Model secin"}
                    options={cars[index]?.models.map(model => model)}
                    selectOption={selectOption}
                    field="model"
                    element="input"
                    header="Model"
                    active={index === null ? false : true}
                />
                {/*Ban növünün secilməsi üçün select box */}
                <CustomSelect
                    title={formik.values.bodyType || "Ban növü"}
                    selectOption={selectOption}
                    options={options.body_type}
                    field="bodyType"
                    element="h1"
                    header="Ban növü"
                />
                {/*Yanacaq növünün secilməsi üçün select box */}
                <CustomSelect
                    title={formik.values.fuelType || "Yanacaq növü"}
                    selectOption={selectOption}
                    options={options.fuel_type}
                    field="fuelType"
                    element="h1"
                    header="Yanacaq növü"
                />
                {/*Sürətlər qutusunun secilməsi üçün select box */}
                <CustomSelect
                    title={formik.values.gearBox || "Sürətlər qutusu"}
                    options={options.transmission}
                    selectOption={selectOption}
                    field="gearBox"
                    element="h1"
                    header="Sürətlər qutusu"
                />
                     <CustomSelect
                    title={formik.values.engineSize || "Mühərrik həcmi"}
                    options={options.engineSize}
                    selectOption={selectOption}
                    field="engineSize"
                    element="h1"
                    header="Mühərrik həcmi"
                />
                <Input 
                type="number" 
                name="engineType"
                value={formik.values.engineType || ""}
                onlyNumber={onlyNumber}
                placeholder="Mühərrik gücü"
             onChange={formik.handleChange}
                />
                    <CustomSelect
                    title={formik.values.seats || "Oturacaqların sayı"}
                    options={options.seats}
                    selectOption={selectOption}
                    field="seats"
                    element="h1"
                    header="Oturacaqların sayı"
                />
                     <CustomSelect
                    title={formik.values.year || "Buraxılış ili"}
                    options={years}
                    selectOption={selectOption}
                    field="year"
                    element="h1"
                    header="Buraxılış ili"
                />
                      <CustomSelect
                    title={formik.values.city || "Şəhər"}
                    options={cities}
                    selectOption={selectOption}
                    field="city"
                    element="h1"
                    header="Şəhər"
                />
               <div className="w-full grid grid-cols-2 gap-[10px]">
               <Button onClick={formik.handleSubmit} background="#1B8A0C " text="Əlavə et"/>
                 <Button onClick={formik.handleReset} background="#AD0D0D" text="Seçimi sıfırla"/>
               </div>
            </Form>
           

        </Container>
    );
}

export async function getServerSideProps() {
    const res = await axios.get(`https://mocki.io/v1/9327f1ff-c651-4ddc-bf8a-b7cee5348b46`);
    const cars = await res.data;
    return {
        props: {
            cars
        },
    };
}

export default NewPost;
