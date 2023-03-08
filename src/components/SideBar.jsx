import React from 'react'
import {Stack} from '@mui/material'
import {categories} from '../utils/constans'


const SideBar = ({selectedCategory, setSelectedCategory}) => (

   

   <Stack direction='column' sx={{overflow: 'auto', flexDirection:{md: 'column'}, width: '200px'}}>
    {categories.map((category)=>(
        <button className='category-btn' 
        onClick={()=> setSelectedCategory(category.name)}
        key={category.name}
        style={{background : category.name === selectedCategory && '#e3acca', color: 'whitesmoke'}}>
            <span 
            style={{ paddingRight: '1em', color: category.name === selectedCategory ? 'whitesmoke' : 'grey'}}>
                {category.icon}</span>
            <span>{category.name}</span>
        </button>
    ))}

   </Stack>
  )


export default SideBar