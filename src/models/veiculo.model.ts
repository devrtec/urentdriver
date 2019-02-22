export class Veiculo {
  constructor(
    public id: number,
    public placa: string,
    public modelo: string,
    public marca: string,
    public ano: string,  
    public cor: string,
    public tipo: string,
    public status_id: number
  ) {}
}
