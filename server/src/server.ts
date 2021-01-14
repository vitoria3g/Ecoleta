  import express from 'express';
  import routes from './routes'; 
  import path from 'path';
  import cors from 'cors';
  
  const app = express();

  app.use(cors());
  app.use(express.json()); //plugin que faz com que o express consiga ler arquivos em formato JSON.
  app.use(routes);
  
  //rota - usando função statica (ele verifica se tem na pasta o que está sendo solicitado, serve para pdf, imagens e etc) -
  //caminho para a pasta que será usada 
  app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); 


  app.listen(3333);