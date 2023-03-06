import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

const TableListing=()=>{

    const [data,setData]=useState([]);
    const [statusData,setStatusData]=useState({});
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
            console.log('responseAPI',res);
            console.log('response',res.data);
            setData(res.data);
        })
    },[])
    console.log('setData',data)

    const oldStatus=[
        {id:0,title:"Not Avilable"},
        {id:1,title:"Avilable"},
    ]

    useEffect(()=>{
        const newStatus={};
        oldStatus.map(statusData=>newStatus[statusData.id]=statusData.title)  
        setStatusData(newStatus)
        console.log('status',newStatus);
    },[])

    const dataStatic=[
        {name:"DHONI",role:'CSK',country:"India",status:0,catagory:7,venue:3},
        { name:"Kohli",role:'RCB',country:"India",status:1,catagory:3,venue:2},
        { name:"Smith",role:'RR',country:"Austrlia",status:1,catagory:5,venue:2},
        { name:"Archer",role:'MI',country:"England",status:0,catagory:4,venue:3},
        
    ]

    const columnsStatic=[  
        {title:"name",field:"name"},
        {title:"role",field:"role" },
        {title:"country",field:"country"},
        {title:"Venue",field:"venue",lookup:{3:"Gujrat",2:"Delhi"}},
        {title:"catagorycatagory",field:"venue",lookup:{7:"Allrounder",3:"Batsman",5:"Bowler",4:"keeper"}},
        {title:"status",field:"status",lookup:statusData},
        ]

    const columns=[  
        { title:"id",field:"id"},
        { title:"body",field:"body"},
        {title:"title",field:"title"},
        // {
        //     title:"Name",field: ""
        // }

    ]
    return(
        
        <div>
            <h1>Catalog Listing page</h1>
            <MaterialTable 
            title="Catalog Table"
            data={dataStatic}
            columns={columnsStatic}
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