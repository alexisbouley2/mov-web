interface ErrorDisplayProps {
  error: { message: string; type: string };
}

const ErrorDisplay = ({ error }: ErrorDisplayProps) => (
  <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg max-w-sm text-center">
    {error.message}
  </div>
);

export default ErrorDisplay;
