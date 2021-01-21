module.exports = function asyncMiddleware(handler) {
  return async (req, res, next) => {
    try {
      await handler();
    } catch (ex) {
      next(ex);
    }
  };
};

// not using this. it's just here for reference (this job is currently being done by express-async-errors)
