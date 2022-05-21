const atividades = [
  {
    id: 1,
    atividade: 'dormir',
  },
  {
    id: 2,
    atividade: 'comer',
  },
  {
    id: 3,
    atividade: 'estudar',
  },
];

export const findAllAtividadesService = () => {
  return atividades;
};

export const findByIdAtividadeService = (idParam) => {
  return atividades.find((atividade) => atividade.id === idParam);
};

export const createAtividadeService = (newAtividade) => {
  // const newId = atividades.length + 1;
  // if(newId == atividades.length){
  //   newId = newId+1
  // }

  const newId =
    atividades.length === 0? 1: atividades[atividades.length - 1].id + 1;

  

  newAtividade.id = newId;
  atividades.push(newAtividade);

  return newAtividade;
};

export const updateAtividadeService = (id, atividadeEditada) => {
  atividadeEditada['id'] = id;
  const atividadeIndex = atividades.findIndex(
    (atividade) => atividade.id == id,
  );

  atividades[atividadeIndex] = atividadeEditada;

  return atividadeEditada;
};

export const deleteAtividadeService = (id) => {
  const atividadeIndex = atividades.findIndex(
    (atividade) => atividade.id == id,
  );
  console.log(id)
  return atividades.splice(atividadeIndex, 1);
};
