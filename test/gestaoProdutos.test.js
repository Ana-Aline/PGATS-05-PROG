import { consultarTituloPorId } from "../src/gestaoProdutos.js";
import assert, { AssertionError } from "node:assert";

describe("Testes de gestão de produto", function () {
  describe("Testes de consulta de produto", function () {
    it("Validar consultar título está retornando o título o correto", function () {
      //arrange
      const idProduto = 1;
      const tituloProduto = "livro 1";

      //act
      const tituloRetornado = consultarTituloPorId(idProduto);

      //assert
      assert.equal(tituloProduto, tituloRetornado);
    });
    it("Validar se o ID foi informado e é maior que 0", function () {
      //arrange
      const idProduto = 0;
      const mensagemEsperada = "O id deve ser maior que 0";

      //act - assert
      assert.throws(
        () => {
          consultarTituloPorId(idProduto);
        },
        Error,
        mensagemEsperada,
      );
    });
    it("Validar se o ID existe", function () {
      //arrange
      const idProduto = 100;
      const mensagemEsperada = "Produto inexistente";

      
        const mensagemRecebida = consultarTituloPorId(idProduto);

      assert.equal(mensagemEsperada, mensagemRecebida)
    });
  });
});
