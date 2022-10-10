
import ItemsCss from './Items.module.css'

export const TransactionsHistory = ({items}) => {
    
    
    const ItemsRender = items.map(item =>
        {
            return(
                
                   <tbody class={ItemsCss.elements} key={item.id}>
                        <tr class= {ItemsCss.zebra}>
                            <td class={ItemsCss.element}> {item.type} </td>
                            <td class={ItemsCss.element}> {item.amount}  </td>
                            <td class={ItemsCss.element}>{item.currency}</td>
                        </tr>

                    </tbody>
                   )
                }
             )
        return(<table class={ItemsCss.ItemsArray}> 
                 <thead class={ItemsCss.ArrayElement} >
                    <tr >
                        <th class={ItemsCss.caption}>TYPE</th>
                        <th class={ItemsCss.caption}>AMOUNT</th>
                        <th class={ItemsCss.caption}>CURRENCY</th>
                    </tr>
                 </thead>{ItemsRender}
                </table>)
       
     }


   