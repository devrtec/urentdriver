import { Injectable } from "@angular/core";

@Injectable()
export class CapitalService {
  constructor() {}

  public GetCapital(uf: number): any {
    var capital = [
      {
        estado: 11,
        sigla: "RO",
        nome: "Porto Velho"
      },
      {
        estado: 12,
        sigla: "AC",
        nome: "Rio Branco"
      },
      {
        estado: 13,
        sigla: "AM",
        nome: "Manaus"
      },
      {
        estado: 14,
        sigla: "RR",
        nome: "Boa Vista"
      },
      {
        estado: 15,
        sigla: "PA",
        nome: "Belém"
      },
      {
        estado: 16,
        sigla: "AP",
        nome: "Macapá"
      },
      {
        estado: 17,
        sigla: "TO",
        nome: "Palmas"
      },
      {
        estado: 21,
        sigla: "MA",
        nome: "São Luís"
      },
      {
        estado: 22,
        sigla: "PI",
        nome: "Teresina"
      },
      {
        estado: 23,
        sigla: "CE",
        nome: "Fortaleza"
      },
      {
        estado: 24,
        sigla: "RN",
        nome: "Natal"
      },
      {
        estado: 25,
        sigla: "PB",
        nome: "João Pessoa"
      },
      {
        estado: 26,
        sigla: "PE",
        nome: "Recife"
      },
      {
        estado: 27,
        sigla: "AL",
        nome: "Maceió"
      },
      {
        estado: 28,
        sigla: "SE",
        nome: "Aracaju"
      },
      {
        estado: 29,
        sigla: "BA",
        nome: "Salvador"
      },
      {
        estado: 31,
        sigla: "MG",
        nome: "Belo Horizonte"
      },
      {
        estado: 32,
        sigla: "ES",
        nome: "Vitória"
      },
      {
        estado: 33,
        sigla: "RJ",
        nome: "Rio de Janeiro"
      },
      {
        estado: 35,
        sigla: "SP",
        nome: "São Paulo"
      },
      {
        estado: 41,
        sigla: "PR",
        nome: "Curitiba"
      },
      {
        estado: 42,
        sigla: "SC",
        nome: "Florianópolis"
      },
      {
        estado: 43,
        sigla: "RS",
        nome: "Porto Alegre"
      },
      {
        estado: 50,
        sigla: "MS",
        nome: "Campo Grande"
      },
      {
        estado: 51,
        sigla: "MT",
        nome: "Cuiabá"
      },
      {
        estado: 52,
        sigla: "GO",
        nome: "Goiânia"
      },
      {
        estado: 53,
        sigla: "DF",
        nome: "Brasília"
      }
    ];

    return capital.filter(x => x.estado == uf)[0].nome;
  }
}
