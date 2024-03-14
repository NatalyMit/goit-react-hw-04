import toast from 'react-hot-toast';

const ErrorMessage = error => {
  return (
    <div>
      <p>{error}😭</p>
    </div>
  );
};

export default ErrorMessage;
