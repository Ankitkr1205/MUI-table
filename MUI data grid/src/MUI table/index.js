import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

const TableListing=()=>{

    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            console.log('response',res);
            console.log('response',res.data);
            setData(res.data);
        })
    },[])
    console.log('setData',data)

    const dataStatic=[
        {
            name:"DHONI",role:'CSK'
        },
        {
            name:"Kohli",role:'RCB'
        }
        
    ]

    const columns=[  
        {
            title:"id",field:"id"
        },
        {
            title:"body",field:"body"
        },
        {
            title:"title",field:"title"
        },
        // {
        //     title:"Name",field: ""
        // }

    ]
    return(
        
        <div>
            <h1>Catalog Listing page</h1>
            <MaterialTable 
            title="Catalog Table"
            data={data}
            columns={columns}
            options={{
                search:true,
                paging:true,
                filtering:true,
                exportButton:true
            }}
            //getRowId={(row)=>row.catalog_id}
            />
</div>
        
    )
}

export default TableListing;