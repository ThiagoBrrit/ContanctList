import * as enums from '../Utils/Enums/contato'

class Contato {
  nome: string
  categoria: enums.Categoria
  status: enums.Status
  tel: string
  mail: string
  id: number

  constructor(
    nome: string,
    categoria: enums.Categoria,
    status: enums.Status,
    tel: string,
    mail: string,
    id: number
  ) {
    this.nome = nome
    this.categoria = categoria
    this.status = status
    this.tel = tel
    this.mail = mail
    this.id = id
  }
}

export default Contato
