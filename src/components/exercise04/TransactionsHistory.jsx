
import ItemsCss from './Items.module.css'

export const TransactionsHistory = ({items}) => {
    
    
    const ItemsRender = items.map(item =>
        {
            return(
                
                    <thead class={ItemsCss.ArrayElement}key={item.id}>
                        <tr  >
                        <th class = {ItemsCss.type} > {item.type} </th>
                        
                        <th class={ItemsCss.avatar}> {item.amount}  </th>
                        <th class={ItemsCss.currency}>{item.currency}</th>
                        </tr>
                    </thead>
                   )
                }
             )
        return(<table class={ItemsCss.ItemsArray}>{ItemsRender}</table>)
       
     }


