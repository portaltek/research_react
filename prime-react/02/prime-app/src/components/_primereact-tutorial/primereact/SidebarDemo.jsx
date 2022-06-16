import React, {useState} from 'react';
import {Sidebar} from 'primereact/sidebar';
import {Button} from 'primereact/button';

export const SidebarDemo = () => {
    const [visibleLeft, setVisibleLeft] = useState(true);


    const customIcons = (
        <React.Fragment>
            <button className="p-sidebar-icon p-link mr-1">
                <span className="pi pi-print"/>
            </button>
            <button className="p-sidebar-icon p-link mr-1">
                <span className="pi pi-arrow-right"/>
            </button>
        </React.Fragment>
    );

    return (
        <div>
            <div className="card">
                <Sidebar visible={visibleLeft}
                    onHide={
                        () => setVisibleLeft(false)
                }>
                    <h3>Left Sidebar</h3>
                </Sidebar>


                <Button icon="pi pi-arrow-right"
                    onClick={
                        () => setVisibleLeft(true)
                    }
                    className="mr-2"/>

            </div>
        </div>
    )
}
