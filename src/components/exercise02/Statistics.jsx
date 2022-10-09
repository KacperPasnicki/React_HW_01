import StatisticsCSS from './Statistics.module.css'
export const Data = [
    { "id": "id-1", "label": ".docx", "percentage": 22 },
    { "id": "id-2", "label": ".pdf", "percentage": 4 },
    { "id": "id-3", "label": ".mp3", "percentage": 17 },
    { "id": "id-4", "label": ".psd", "percentage": 47 },
    { "id": "id-5", "label": ".pdf", "percentage": 10 }
  ]



 export const Statistics = ({title = null, stats}) => {
    
      
      const dataList = stats.map(data => {
       return(
          <li class = {StatisticsCSS.listElemet} key={data.id}>
            <span class = {StatisticsCSS.listLabel}>{data.label}</span>
            <span>{data.percentage}%</span>
            </li>)
      });return(
       
        <section class={StatisticsCSS.statistics}>
         <h2 class={StatisticsCSS.title}>{title}</h2>
         <ul class={StatisticsCSS.statList}>{dataList}</ul>
         </section>
     
        
        )
  
  };
  

// export const Statistics = () =>
// <section class="statistics">
// <h2 class="title">Upload stats</h2>

// <ul class="stat-list">
//   <li class="item">
//     <span class="label">DataList data={Data.label}</span>
//     <span class="percentage">{DataList.percentage}</span>
//   </li>
//   <li class="item">
//     <span class="label">.{Data.label}</span>
//     <span class="percentage">{Data.percentage}</span>
//   </li>
//   <li class="item">
//     <span class="label">{Data.label}</span>
//     <span class="percentage">{Data.percentage}</span>
//   </li>
//   <li class="item">
//     <span class="label">{Data.label}</span>
//     <span class="percentage">{Data.percentage}</span>
//   </li>
// </ul>
// </section>


