import app from './app';

const PORT = 5000;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});