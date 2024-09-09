class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {

// This ensures that even if no specific error message is provided, a default message ("Internal Server Error") will be used, preventing the error response from being empty or unclear.
  err.message = err.message || "Internal server error" ;
  err.statusCode = err.statusCode || 500;

  return res.status(err.statusCode).json({
    success: false,
    message: err.message
    })
}

export default ErrorHandler;