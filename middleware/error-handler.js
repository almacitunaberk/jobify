const errorHandler = async (error, req, res, next) => {
  console.log(error);
  res.status(500).json({ msg: 'There was an error' });
  next();
};

export { errorHandler };
