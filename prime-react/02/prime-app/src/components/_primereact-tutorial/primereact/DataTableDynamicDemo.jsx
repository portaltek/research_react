import React, {useState, useEffect} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {ProductService} from '../service/ProductService';

const DataTableDynamicDemo = () => {
    const [products, setProducts] = useState([]);
    const columns = [
        {
            field: 'code',
            header: 'Code'
        }, {
            field: 'name',
            header: 'Name'
        }, {
            field: 'category',
            header: 'Category'
        }, {
            field: 'quantity',
            header: 'Quantity'
        }
    ];

    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const dynamicColumns = columns.map((col, _i) => {
        return <Column key={
                col.field
            }
            field={
                col.field
            }
            header={
                col.header
            }/>;
    });

    return (
        <div>
            <div className="card">
                <DataTable value={products}
                    responsiveLayout="scroll">
                    {dynamicColumns} </DataTable>
            </div>
        </div>
    );
}
export default DataTableDynamicDemo;
