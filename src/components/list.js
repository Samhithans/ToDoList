import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Item from "./item";
import { Button } from "antd";


const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
function ListComp () {
    const [items, setItems] = useState([]);
    const [showAddItem, setShowAddItem] = useState(false);
    return <>
      {items.length===0||showAddItem? <Item items={items} setItems={setItems} setShowAddItem={setShowAddItem}/>:null}
      {items.length!==0&&<div>
        {items.map(item=><h4>{item}</h4>)}
        <Button type="primary" onClick={()=>setShowAddItem(true)}>Add new Item</Button>
        </div>
        }
    </>
}

export default ListComp;