function saudacao(nome: string,): string {
    return `Olá ${nome}`;
};
const seuNome = "Luis";
const saudacaoSeuNome = saudacao(seuNome);
console.log(saudacaoSeuNome);



function calcularArea (base: number, altura: number): number {
    const area = base * altura;
    return area;
};
const resultado = calcularArea(178, 2.37);
console.log(resultado);