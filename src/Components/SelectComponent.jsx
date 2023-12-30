
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import "../SCSS/SelectComponent.SCSS";
import { Context } from './ulits/AppContext';
import axios from 'axios';

function SelectComponent() {

    const { nameGender, product } = useParams();
    const [isDisabled, setIsDisabled] = useState(false);
    const [cpu, setCPU] = useState(false);
    const [ram, setRAM] = useState(false);
    const [ssd, setSSD] = useState(false);
    const [vga, setVGA] = useState(false);
    const [want, setWant] = useState(false);
    const [productionData, setProductionData] = useState([]);
    const [demandData, setDemandData] = useState([]);
    const fetchGender = async () => {
        const result = await axios.get(`https://6561f5c2dcd355c0832466be.mockapi.io/api/Gender`)
        const data = (result.data)
        const flatMap = data.flatMap((value) => (value.Gender).map((val) => { return val }))
        const filtterProduction = flatMap.filter((value) => value.Label.toLowerCase() === "hãng")
        const filtterDemand = flatMap.filter((value) => value.Label.toLowerCase() === "nhu cầu")
        const flatMapTag = filtterProduction.flatMap((value) => value.Tag)
        const flatDemad = filtterDemand.flatMap((value) => value.Tag)
        const filterProduction = flatMapTag.filter((v, i) => flatMapTag.indexOf(v) === i)
        const filterDemand = flatDemad.filter((v, i) => flatDemad.indexOf(v) === i)
        // console.log(filterDemand)
        setProductionData(filterProduction);
        setDemandData(filterDemand)
    }
    useEffect(() => {
        fetchGender()
    }, [])
    useEffect(() => {
        if (nameGender) {
            if (nameGender.toLowerCase() == "laptop") {
                setIsDisabled(false);
            } else if (nameGender.toLowerCase() == "laptopgaming") {
                setIsDisabled(false);
            } else if (nameGender.toLowerCase() == "pcgaming") {
                setIsDisabled(true);
            } else if (nameGender.toLowerCase() == "pcoffice") {
                setRAM(true);
                setSSD(true);
                setVGA(true);
                setIsDisabled(true);
            }
            if (nameGender != undefined) {
                if (nameGender.toLowerCase() == "laptop" || "laptopgaming") {
                    setIsDisabled(false)
                    if (product != undefined) {
                        productionData && productionData.forEach(item => {
                            if (item.toLowerCase() == product.toLowerCase()) {
                                setIsDisabled(true)
                            }
                        })
                        demandData && demandData.forEach(item => {
                            if (item.toLowerCase() == product.toLowerCase()) {
                                setWant(true)
                            }
                        })
                    }
                } else if (nameGender.toLowerCase() == "pcgaming" || "pcoffice") {
                    setIsDisabled(true)
                }
            }
        }
        return () => {

        }
    }, [nameGender, product, productionData, demandData])
    const production = [
        { value: "production", label: 'ASUS' },
        { value: "production", label: 'MSI' },
        { value: "production", label: 'ACER' },
        { value: "production", label: 'DELL' },
    ]
    const CPU = [
        {
            label: "Intel",
            options: [
                { value: "Intel", label: 'Intel Core i3' },
                { value: "Intel", label: 'Intel Core i5' },
                { value: "Intel", label: 'Intel Core i7' },
                { value: "Intel", label: 'Intel Core i9' },
            ],
        },
        {
            label: "AMD",
            options: [
                { value: "AMD", label: 'AMD Ryzen 3' },
                { value: "AMD", label: 'AMD Ryzen 5' },
                { value: "AMD", label: 'AMD Ryzen 7' },
                { value: "AMD", label: 'AMD Ryzen 9' },
            ],
        },
    ]
    const VGA = [
        { value: "VGA", label: 'GTX720' },
        { value: "VGA", label: 'GTX1650' },
        { value: "VGA", label: 'GTX1660' },
        { value: "VGA", label: 'RTX3050' },
        { value: "VGA", label: 'RTX3060' },
        { value: "VGA", label: 'RTX4080' },
        { value: "VGA", label: 'RTX4090Ti' },
    ]
    const RAM = [
        { value: "RAM", label: '8GB' },
        { value: "RAM", label: '16GB' },
        { value: "RAM", label: '32GB' },
        { value: "RAM", label: '64GB' },
        { value: "RAM", label: '128GB' },
    ]
    const SSD = [
        { value: "SSD", label: '256GB' },
        { value: "SSD", label: '512GB' },
        { value: "SSD", label: '1TB' },
        { value: "SSD", label: '2TB' },
        { value: "SSD", label: '4TB' },
    ]
    const Want = [
        { value: "Want", label: 'Học tập' },
        { value: "Want", label: 'Chơi Game' },
        { value: "Want", label: 'Đồ họa' },
    ]
    const Rank = [
        { value: "Rank", label: 'Sản phẩm bán chạy' },
        { value: "Rank", label: 'Giá thấp đến cao' },
        { value: "Rank", label: 'Giá cao đến thấp' },
    ]
    const disable = {
        container: (baseStyles, state) => ({
            ...baseStyles,
            display: "none",
        }),
    }
    const style = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? "grey" : "blue",
            width: "95%",
            fontSize: "15px",
        })

    }
    const [isLoading, setIsLoading] = useState({
        "production": false,
        "cpu": false,
        "vga": false,
        "ram": false,
        "ssd": false,
        "want": false,
        "rank": false,
    });
    const { DataAPI, setDataProducts, wordseach, setSataSelect } = useContext(Context)
    const [dataFilter, setDataFilter] = useState({
        "production": "",
        "cpu": "",
        "vga": "",
        "ram": "",
        "ssd": "",
        "want": "",
        "rank": "",
    })
    useEffect(() => {
        const data = [...DataAPI]
        let newData = []
        if (wordseach != "") {
            const filterdata = data.filter((value) => { return value.name.toLowerCase().includes(wordseach.toLowerCase()) })
            newData = filterdata
        } else {
            newData = [...DataAPI]
        }
        newData = newData.filter((value) => { return value.name.toLowerCase().includes(dataFilter.production.toLowerCase()) })
        newData = newData.filter((value) => { return value.config.cpu.toLowerCase().includes(dataFilter.cpu.toLowerCase()) })
        newData = newData.filter((value) => { return value.config.vga.toLowerCase().includes(dataFilter.vga.toLowerCase()) })
        newData = newData.filter((value) => { return value.config.ram.toLowerCase().includes(dataFilter.ram.toLowerCase()) })
        newData = newData.filter((value) => { return value.config.ssd.toLowerCase().includes(dataFilter.ssd.toLowerCase()) })
        if (dataFilter.want != "") {
            newData = newData.filter((value) => (value.Gender.toString().toLowerCase().includes(dataFilter.want.toLowerCase())))
        }
        if (dataFilter.rank != "") {
            if (dataFilter.rank == "Giá cao đến thấp") {
                newData.sort((a, b) => { return b.pricetoPay - a.pricetoPay })
            }
            else if (dataFilter.rank == "Giá thấp đến cao") {
                newData = newData.sort((a, b) => { return a.pricetoPay - b.pricetoPay })
            } else {
                newData = newData.filter((value) => (value.Gender.toString().toLowerCase().includes("bán chạy")))
                newData = newData.sort((a, b) => { return a.pricetoPay - b.pricetoPay })
            }
        }
        setSataSelect(newData)
        // console.log(newData);
        setDataProducts(newData)
    }, [dataFilter, wordseach])
    const FilterProducion = (e) => {
        if (e == null) {
            setDataFilter({ ...dataFilter, "production": "" })
        } else {
            setDataFilter({ ...dataFilter, "production": e.label })
        }
    }
    const FilterCPU = (e) => {
        if (e == null) {
            setDataFilter({ ...dataFilter, "cpu": "" })
        } else {
            setDataFilter({ ...dataFilter, "cpu": e.label })
        }
    }
    const FilterVGA = (e) => {
        if (e == null) {
            setDataFilter({ ...dataFilter, "vga": "" })
        } else {
            setDataFilter({ ...dataFilter, "vga": e.label })
        }
    }
    const FilterRAM = (e) => {
        if (e == null) {
            setDataFilter({ ...dataFilter, "ram": "" })
        } else {
            setDataFilter({ ...dataFilter, "ram": e.label })
        }
    }
    const FilterSSD = (e) => {
        if (e == null) {
            setDataFilter({ ...dataFilter, "ssd": "" })
        } else {
            setDataFilter({ ...dataFilter, "ssd": e.label })
        }
    }
    const FilterWant = (e) => {
        if (e == null) {
            setDataFilter({ ...dataFilter, "want": "" })
        } else {
            setDataFilter({ ...dataFilter, "want": e.label })
        }
    }
    const FilterRank = (e) => {
        if (e == null) {
            setDataFilter({ ...dataFilter, "rank": "" })
        } else {
            setDataFilter({ ...dataFilter, "rank": e.label })
        }
    }
    return (
        <>
            <div className="select-main">
                <Select isClearable options={production} placeholder="Hãng" styles={isDisabled ? disable : style} isLoading={isLoading.production} onMenuOpen={() => setIsLoading({ ...isLoading, "production": true })} onChange={(e) => FilterProducion(e)} onMenuClose={() => setIsLoading({ ...isLoading, "production": false })} />
                <Select isClearable options={CPU} placeholder="CPU" isDisabled={cpu} styles={cpu ? disable : style} isLoading={isLoading.cpu} onMenuOpen={() => setIsLoading({ ...isLoading, "cpu": true })} onChange={(e) => FilterCPU(e)} onMenuClose={() => setIsLoading({ ...isLoading, "cpu": false })} />
                <Select isClearable options={VGA} isDisabled={vga} placeholder="VGA" styles={vga ? disable : style} isLoading={isLoading.vga} onMenuOpen={() => setIsLoading({ ...isLoading, "vga": true })} onChange={(e) => FilterVGA(e)} onMenuClose={() => setIsLoading({ ...isLoading, "vga": false })} />
                <Select isClearable options={RAM} isDisabled={ram} placeholder="RAM" styles={ram ? disable : style} isLoading={isLoading.ram} onMenuOpen={() => setIsLoading({ ...isLoading, "ram": true })} onChange={(e) => FilterRAM(e)} onMenuClose={() => setIsLoading({ ...isLoading, "ram": false })} />
                <Select isClearable options={SSD} isDisabled={ssd} placeholder="SSD" styles={ssd ? disable : style} isLoading={isLoading.ssd} onMenuOpen={() => setIsLoading({ ...isLoading, "ssd": true })} onChange={(e) => FilterSSD(e)} onMenuClose={() => setIsLoading({ ...isLoading, "ssd": false })} />
                <Select isClearable options={Want} placeholder="Nhu cầu" styles={want ? disable : style} isLoading={isLoading.want} onMenuOpen={() => setIsLoading({ ...isLoading, "want": true })} onChange={(e) => FilterWant(e)} onMenuClose={() => setIsLoading({ ...isLoading, "want": false })} />
                <Select isClearable options={Rank} placeholder="Sắp xếp" styles={style} isLoading={isLoading.rank} onMenuOpen={() => setIsLoading({ ...isLoading, "rank": true })} onChange={(e) => FilterRank(e)} onMenuClose={() => setIsLoading({ ...isLoading, "rank": false })} />
            </div>
        </>

    );
}

export default SelectComponent;