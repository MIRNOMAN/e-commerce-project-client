import { useLoaderData } from "react-router-dom";
import CardCatagoris from "./CardCatagoris";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const MyCard = () => {
    const valuesProduct = useLoaderData();
    const {user} = useContext(AuthContext);

    const [values, setValues] = useState([])

    useEffect(() => {
     const validUser = valuesProduct.filter(product => product.email === user.email)
     setValues(validUser)
    },[valuesProduct, user.email])

    console.log(values)
    return (
        values.length > 0 ? <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {
                    values.map(value => <CardCatagoris key={value._id} value={value} values={values} setValues={setValues}></CardCatagoris>)
                }
            </div>
        </div> : <div className="text-4xl font-semibold flex justify-center items-center h-screen">No data found</div>
    );
};

export default MyCard;