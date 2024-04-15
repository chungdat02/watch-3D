const EmtyInput = () => {
  return res.status(200).json({
    status: "error",
    message: "The input is required",
  });
};

// check code 
module.exports = {
  EmtyInput,
};
