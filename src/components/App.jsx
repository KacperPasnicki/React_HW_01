import PropTypes from 'prop-types';

export const App = ({children}) => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        opacity: 0.1
      }}
    >
      React homework template
      {children}
    </div>
  );
    }

// App.propTypes = {

//   HW: PropTypes.array.isRequired,


// };