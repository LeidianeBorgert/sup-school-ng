export interface AutorResponse {
    id: number;
    nome: string;
    nacionalidade: string;
    dataNascimento: string;
}

export interface AutorCadastroRequest {
    nome: string;
    nacionalidade: string;
    dataNascimento: string;
}