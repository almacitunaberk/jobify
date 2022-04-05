const notFoundMiddleware = async (req, res, next) => {
  res.status(401).send('Cannot GET / request');
  next();
};

export { notFoundMiddleware };
