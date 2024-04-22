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
    

 {/*Buradakı funksiyalar müvafiq olaraq formik-de teyin edilmiş fieldlərin dəyərini dəyişir.Hərbir funksiya  */}
   const selectOption=(field,option,index)=>{
    if(field==="make.name"){
        formik.setFieldValue(field,option)
        formik.setFieldValue("make.id",index)
    }else{
        formik.setFieldValue(field,option)
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
selectOption={selectOption}
field="make.name"
element="input"
header="Marka"
                  />
                     {/*Avtomobil modelinin secilməsi üçün select box */}
                <CustomSelect
                title={formik.values.model || "Model secin"}
options={models}
selectOption={selectOption}
field="model"
element="input"
header="Model"
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
