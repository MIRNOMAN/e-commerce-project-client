import { useLoaderData } from "react-router-dom";
import CardCatagoris from "./CardCatagoris";
import { useState } from "react";


const MyCard = () => {
    const valuesProduct = useLoaderData();
   
    const [values, setValues] = useState(valuesProduct)
    
    console.log(values)
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {
                values.map(value => <CardCatagoris key={value._id} value={value} values={values} setValues={setValues}></CardCatagoris>)
            }
        </div>
    );
};

export default MyCard;