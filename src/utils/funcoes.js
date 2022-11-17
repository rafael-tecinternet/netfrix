const formataData = (data) => {
  const dataQuebrada = data.split("-");
  const dia = dataQuebrada[2];
  const mes = dataQuebrada[1];
  const ano = dataQuebrada[0];
  return `${dia}/${mes}/${ano}`;
};
export { formataData };
