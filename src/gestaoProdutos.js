const livros = [
  {
    id: 1,
    titulo: 'livro 1',
    tema: 'romance',
    preco: 50.0,
  },
  {
    id: 2,
    titulo: 'livro 2',
    tema: 'terror',
    preco: 60.0,
  },
  {
    id: 3,
    titulo: 'livro 3',
    tema: 'romance',
    preco: 70.0,
  },
  {
    id: 4,
    titulo: 'livro 4',
    tema: 'fantasia',
    preco: 80.0,
  },
  {
    id: 5,
    titulo: 'livro 5',
    tema: 'romance',
    preco: 90.0,
  },
];

export function consultarTituloPorId(Id) {
  if (Id < 1) {
    throw new Error('O id deve ser maior que 0');
  }
  for (let i = 0; i < livros.length; i++) {
    if (livros[i].id === Id) {
      return livros[i].titulo;
    }
  }
  throw new Error('Produto inexistente');
}
