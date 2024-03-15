// import toast from 'react-hot-toast';

const ErrorMessage = ({ error, children }) => {
  return (
    <p>
      {children}
      {error}😭
    </p>
  );
};

export default ErrorMessage;
