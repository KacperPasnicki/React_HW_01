
import ItemsCss from './Items.module.css'
import PropTypes from 'prop-types';
export const TransactionsHistory = ({items}) => {
    
    
    const ItemsRender = items.map(item =>
        {
            return(
                
                   <tbody className={ItemsCss.elements} key={item.id}>
                        <tr className= {ItemsCss.zebra}>
                            <td className={ItemsCss.element}> {item.type} </td>
                            <td className={ItemsCss.element}> {item.amount}  </td>
                            <td className={ItemsCss.element}>{item.currency}</td>
                        </tr>

                    </tbody>
                   )
                }
             )
        return(<table className={ItemsCss.ItemsArray}> 
                 <thead className={ItemsCss.ArrayElement} >
                    <tr >
                        <th className={ItemsCss.caption}>TYPE</th>
                        <th className={ItemsCss.caption}>AMOUNT</th>
                        <th className={ItemsCss.caption}>CURRENCY</th>
                    </tr>
                 </thead>{ItemsRender}
                </table>)
       
     }


     TransactionsHistory.propTypes = {
       
        items: PropTypes.array.isRequired,
     
    }