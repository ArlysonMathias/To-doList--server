import * as atividadesService from '../services/atividades.service.js';

//getAll
export const findAllAtividades = (req, res) => {
  const atividades = atividadesService.findAllAtividadesService();
  res.send(atividades);
};

export const findByIdAtividade = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam) {
    return res.status(400).send({ message: 'Id inválido' });
  }

  const ativEscolhida = atividadesService.findByIdAtividadeService(idParam);

  if(!ativEscolhida){
    return res.status(404).send({message: "Tarefa não encontrada."})
  }

  res.send(ativEscolhida);
};

export const createAtividadeController = (req, res) => {
  const formulario = req.body;

  if (!formulario || !formulario.atividade) {
    return res.status(400).send({ message: 'Você deve digitar uma tarefa.' });
  }

  const newAtividade = atividadesService.createAtividadeService(formulario);

  res.status(201).send(newAtividade);
};

export const updateAtividadeController = (req, res) => {
  const idParam = Number(req.params.id);
  const atividadeEditada = req.body;
  const updateAtividade = atividadesService.updateAtividadeService(
    idParam,
    atividadeEditada,
  );

  res.send(updateAtividade);
};

export const deleteAtividadeController = (req, res) => {
  const idParam = Number(req.params.id);
  atividadesService.deleteAtividadeService(idParam);

  res.send('Atividade apagada.');
};
