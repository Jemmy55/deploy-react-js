import { useContext, useEffect, useState } from 'react';
import Slider from 'react-slider'
import "../SCSS/SliderComponent.SCSS"
import NumberVND from './Converter/NumberVND';
import SelectComponent from './SelectComponent';
import { Context } from './ulits/AppContext';
const MIN = 1000;
const MAX = 100000;

function SliderComponent() {
    const [values, setValues] = useState([MIN, MAX])
    const { DataAPI, setDataProducts, dataProducts, wordseach, dataSelect } = useContext(Context)
    useEffect(() => {
        const data = [...DataAPI]
        let newData = []
        if (wordseach != "") {
            const filterdata = data.filter((value) => { return value.name.toLowerCase().includes(wordseach.toLowerCase()) })
            newData = filterdata.filter((value) => values[0] < value.pricetoPay && value.pricetoPay < values[1])
        } else if (dataSelect.length != 0) {
            newData = dataSelect.filter((value) => values[0] < value.pricetoPay && value.pricetoPay < values[1])
        } else {
            newData = data.filter((value) => values[0] < value.pricetoPay && value.pricetoPay < values[1])
        }
        if (newData != dataProducts) {
            setDataProducts(newData)
        }
    }, [values])
    return (
        <>
            <div className='slider-main'>
                <div className="box-money">
                    <div className={"values"}> <NumberVND number={values[0]} />  - <NumberVND number={values[1]} /></div>
                </div>
                <Slider className={"slider"} markClassName="example-mark" value={values} min={MIN} max={MAX} onChange={setValues} ></Slider>
            </div>
            <SelectComponent />
        </>
    );
}

export default SliderComponent;