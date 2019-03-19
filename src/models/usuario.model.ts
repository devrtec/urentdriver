export class Usuario {
  constructor(
    public _id: string,
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
    public status_fo: string,
    public ins_date: Date, 
    public upd_date: Date 
  ) {}
}
