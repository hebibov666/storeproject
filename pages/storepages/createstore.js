import { storetypes } from "@/lib/constants/storetypes";
import { Formik, useFormik } from "formik";
import { useState } from "react";
import * as Yup from "Yup"
function CreateStore() {

    const initialValues={
        storeName:"",
        storeContactNumber:"",
        storeType:"",
        storeDescription:"",
    }
    const validationSchema=Yup.object({
        storeName: Yup.string().required("Please enter storename"),
        storeContactNumber: Yup.number().required("required"),
        storeDescription: Yup.string().required("required")
    })
    const formik=useFormik({
        initialValues,
        validationSchema,
    })
    return (
      <div className="banner w-full pt-[60px] pb-[50px] flex items-center justify-center h-full">
        <div className=" relative overflow-hidden flex bg-[#F8F8F8] p-[20px] flex-col items-center gap-[30px] w-[40%]">
          <div className="z-[1]">
            <h1 className="text-xl font-bold">Create a store</h1>
          </div>
          <div className="flex flex-col items-center w-full">
            <form className="flex z-[1] flex-col gap-[20px] w-full" onSubmit={formik.handleSubmit}>
              <input
                type="text"
                placeholder="Store name"
                onChange={formik.values.storeName}
                name="storeName"
                className="p-2  border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]"
              ></input>
              {formik.errors.storeName ? <p className="text-red-400 pl-[5px] mt-[-15px]">{formik.errors.storeName}</p> : null}
              <input
                type="number"
                onChange={formik.values.storeContactNumber}
                name="storeContactNumber"
                placeholder="Store contact number"
                className="p-2  border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]"
              ></input>
              <select 
                 onChange={formik.values.storeType}
                 name="storeType"
              className="p-2 text-[#a9a9a9] border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]">
                <option hidden>Select store type</option>
               {storetypes.map(type=>{
                return <option value={type.category}>{type.name}</option>
               })}
              </select>
              <input
                type="text"
                placeholder="Store city address"
                className="p-2  border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]"
              ></input>
              <label
                for="fileInput"
                className="p-2 text-[#a9a9a9] bg-white border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]"
              >
                Select store profile photo:
              </label>
              <input type="file" id="fileInput" class="hidden" />
              <textarea
                placeholder="Store description"
                onChange={formik.values.storeDescription}
                name="storeDescription"
                className="p-2 min-w-full max-w-full min-h-[160px] max-h-[160px] border-2 border-[#F0F0F0] rounded-[7px] outline-none h-[40px]"
              ></textarea>
              <button
                type="submit"
                className="p-2 bg-[#0B5CFF] font-bold border-2 border-white text-white  rounded-[7px] outline-none h-[40px]"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  export default CreateStore;
  