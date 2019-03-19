export class Locacao {
  constructor(
    public _id: string,
    public id_locador: string,
    public id_veiculo: string,
    public id_moto: string,
    public data_ins: string,
    public data_ini: string,
    public data_fin: string,
    public notap_locador: number,
    public notap_moto: number,   
    public status_fo: string
  ) {}
}
