import axios from "axios";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";
import { useFormik } from "formik";
import { options } from "@/lib/data";
import CustomSelect from "../components/CustomSelect";
import Header from "../components/PageHeader";
import Container from "../components/Container";
import Form from "../components/FormComponent";
function NewPost({ cars }) {
    const formik = useFormik({
        initialValues: {
            make: {
                id: null,
                name: ""
            },
            model: "",
            fuelType:"",
            bodyType:"",
            gearBox:"",
        }
    });

     {/*Custom select elementlərin açılıb bağlanması üçün funksiya, .red  klassı global.css faylında yaradılıb. Elementə klik etdikdə ona red klassı əlavə olunur və select box açılır  */}
    const toggleClass = (e) => {
        e.currentTarget.classList.toggle("active-select");
    };

 {/*Buradakı funksiyalar müvafiq olaraq formik-de teyin edilmiş fieldlərin dəyərini dəyişir.Hərbir funksiya  */}
   const selectOption=(field,value,index)=>{
    if(field==="make.name"){
        formik.setFieldValue(field,value)
        formik.setFieldValue("make.id",index)
    }else{
        formik.setFieldValue(field,value)
    }
   }
 
const make = cars.map(car => car.brand);
const models=cars[formik.values.make.id]?.models.map(model=>model)
    return (
       <Container>
              <Header title="Yeni elan"/>

               <Form>
                    {/*Avtomobil markasının secilməsi üçün select box */}
                  <CustomSelect
title={formik.values.make.name || "Marka secin"}
options={make}
onClick={toggleClass}
selectOption={selectOption}
field="make.name"
element="input"
                  />
                     {/*Avtomobil modelinin secilməsi üçün select box */}
                <CustomSelect
                title={formik.values.model || "Model secin"}
options={models}
onClick={toggleClass}
selectOption={selectOption}
field="model"
element="input"
                />
                     {/*Ban növünün secilməsi üçün select box */}
                  <CustomSelect
title={formik.values.bodyType || "Ban novu"}
onClick={toggleClass}
selectOption={selectOption}
options={options.body_type}
field="bodyType"
element="h1"
                  />
                     {/*Yanacaq növünün secilməsi üçün select box */}
                  <CustomSelect
title={formik.values.fuelType || "Yanacaq novu"}
onClick={toggleClass}
selectOption={selectOption}
options={options.fuel_type}
field="fuelType"
element="h1"
                  />
                     {/*Sürətlər qutusunun secilməsi üçün select box */}
        <CustomSelect
title={formik.values.gearBox || "Suretler qutusu"}
onClick={toggleClass}
options={options.transmission}
selectOption={selectOption}
field="gearBox"
element="h1"
        />
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
