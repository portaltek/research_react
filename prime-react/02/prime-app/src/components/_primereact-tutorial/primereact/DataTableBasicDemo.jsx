import React, {useState, useEffect, useRef} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {ProductService} from '../service/ProductService';
import {Toast} from 'primereact/toast';

const DataTableBasicDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const toast = useRef(null);
    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onRowSelect = (event) => {
        toast.current.show({
                severity: 'info', summary: 'Product Selected', detail: `Name: ${
                event.data.name
            }`,
            life: 3000
        });
    }
    return (
        <div className="demo-data-table">
            <Toast ref={toast}/>
            <div className="card">
                <DataTable value={products}
                    size="small"
                    showGridlines
                    stripedRows
                    responsiveLayout="scroll"
                    selectionMode="single"
                    selection={selectedProduct1}
                    onRowSelect={onRowSelect}
                    onSelectionChange={
                        e => setSelectedProduct1(e.value)
                }>
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                </DataTable>
            </div>
        </div>
    );
}
export default DataTableBasicDemo;
