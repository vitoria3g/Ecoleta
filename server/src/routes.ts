import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
const routes = express.Router(); //configuração das rotas dos Express

//instanciando a class
const pointsController = new PointsController(); 
const itemsController = new ItemsController();

//ROTAS DA APLICAÇÃO

//ITENS
routes.get('/items', itemsController.index); //listagem

//PONTOS DE COLETA
routes.get('/points/',pointsController.index); //busca todos os pontos
routes.get('/points/:id',pointsController.show); //busca um ponto apenas
routes.post('/points',pointsController.create); //criação

export default routes;