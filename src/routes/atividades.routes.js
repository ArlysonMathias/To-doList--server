import express from 'express';
export const routes = express.Router();

import * as atividadesController from '../controllers/atividades.controller.js';

routes.get('/todas-atividades', atividadesController.findAllAtividades);
routes.get('/atividade/:id', atividadesController.findByIdAtividade);
routes.post('/create', atividadesController.createAtividadeController);
routes.put('/update/:id', atividadesController.updateAtividadeController);
routes.delete('/delete/:id', atividadesController.deleteAtividadeController);
