import StatisticsCSS from './Statistics.module.css'
import PropTypes from 'prop-types';



 export const Statistics = ({title = null, stats}) => {
    
      
      const dataList = stats.map(data => {
       return(
          <li class = {StatisticsCSS.listElemet} key={data.id}>
            <span class = {StatisticsCSS.listLabel}>{data.label}</span>
            <span>{data.percentage}%</span>
            </li>)
      });
      return(
       
        <section class={StatisticsCSS.statistics}>
         <h2 class={StatisticsCSS.title}>{title}</h2>
         <ul class={StatisticsCSS.statList}>{dataList}</ul>
         </section>
     
        
        )
  
  };
  

  Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
