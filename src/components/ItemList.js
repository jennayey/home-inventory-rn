import React, {useContext, useState} from 'react'


export default ItemList () {

    const [items, addItems] = useState([
        {itemName: 'Oreo Cookies', expiryDate:'December', stock: 3, key: '1' },
        {itemName: 'Cooking Oil', expiryDate:'November', stock: 1, key: '2' },
    ])

return items

}