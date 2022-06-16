import React, {useState, useEffect} from "react";
import {Menubar} from "primereact/menubar";
import {InputText} from "primereact/inputtext";
import {ProductService} from "../service/ProductService";
import './DataTableDemo.css';

export const MenubarDemo = () => {
    const [data, setData] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getMenubar().then((d) => {
            setData(d);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const start = (
        <img alt="logo" src="showcase/images/logo.png"
            onError={
                (e) => (e.target.src = "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
            }
            height="40"
            className="mr-2"></img>
    );
    const end = <InputText placeholder="Search" type="text"/>;

    return (
        <div>
            <div className="card">
                <Menubar model={data}
                    start={start}
                    end={end}/> {/* <Menubar model={items} start={start} end={end} /> */} </div>
        </div>
    );
};
