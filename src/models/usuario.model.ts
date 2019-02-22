export class Usuario {
  constructor(
    public id: number,
    public nome: string,
    public sobrenome: string,
    public email: string,
    public senha: string,
    public cel: string,
    public cep: string,
    public logradouro: string,
    public bairro: string,
    public estado: string,
    public municipio: string,
    public status_id: number
  ) {}
}
