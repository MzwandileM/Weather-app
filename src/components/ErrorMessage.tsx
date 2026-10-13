interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="error-state">
      <span className="error-icon">⚠️</span>

      <div>
        <h3>Something went wrong</h3>

        <p>{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
