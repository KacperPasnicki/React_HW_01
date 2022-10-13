import StatisticsCSS from './Statistics.module.css'
import PropTypes from 'prop-types';



 export const Statistics = ({title = null, stats}) => {
    
      
      const dataList = stats.map(data => {
       return(
          <li className = {StatisticsCSS.listElemet} key={data.id}>
            <span className = {StatisticsCSS.listLabel}>{data.label}</span>
            <span>{data.percentage}%</span>
            </li>)
      });
      return(
       
        <section className={StatisticsCSS.statistics}>
         <h2 className={StatisticsCSS.title}>{title}</h2>
         <ul className={StatisticsCSS.statList}>{dataList}</ul>
         </section>
     
        
        )
  
  };
  

  Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.any.isRequired,
}
