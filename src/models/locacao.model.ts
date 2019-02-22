export class Locacao {
  constructor(
    public id: number,
    public id_locador: number,
    public id_veiculo: number,
    public id_moto: number,
    public data_ins: string,
    public data_ini: string,
    public data_fin: string,
    public notap_locador: number,
    public notap_moto: number,   
    public status_id: number
  ) {}
}
