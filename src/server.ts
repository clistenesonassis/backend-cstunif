import App from './App';

App.listen(process.env.PORT, () => {
  console.log(`Server running on https://localhost:${process.env.PORT}`);
});
