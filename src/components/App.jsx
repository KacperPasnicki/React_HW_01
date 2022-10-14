import PropTypes from 'prop-types';

export const App = ({children}) => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        color: '#010101',
        padding: '50px 10px',
        justifyContent: 'space-around'
       

        
      }}
    >
     
      {children}
    </div>
  );
    }

App.propTypes = {

  HW: PropTypes.array.isRequired,


};

