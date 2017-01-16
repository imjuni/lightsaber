function Logger() {
  if (process.env.NODE_ENV == 'develop') {
    return console.log;
  } else {
    return () => {};
  }
}

export default Logger;
