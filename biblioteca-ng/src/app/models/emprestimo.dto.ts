export interface EmprestimoResponse {
    id: number;
    livroId: number | null;
    usuarioId: number | null;
    dataEmprestimo: Date | null;
    dataDevolucao: Date | null;
    status: string;
    livro: EmprestimoLivroResponse;
    autor: EmprestimoAutorResponse;
    categoria: EmprestimoCategoriaResponse;
    usuario: EmprestimoUsuarioResponse;
}

export interface EmprestimoLivroResponse {
    id: number;
    titulo: string;
    autorId: number | null;
    categoriaId: number | null;
    anoPublicacao: Date | null;
    isbn: string;
    quantidade: number | null;
    descricao: string;
    resumo: string;
}
export interface EmprestimoAutorResponse {
    id: number;
    nome: string;
    nacionalidade: string;
    dataNascimento: string;
}
export interface EmprestimoCategoriaResponse {
    id: number;
    nome: string;
}
export interface EmprestimoUsuarioResponse {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    endereco: string;
}


