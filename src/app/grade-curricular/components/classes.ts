export type Classe = {
  id: number
  status: number
  periodo_letivo?: string
  codigo?: string
  disciplina: string
  situacao: string
  nota?: string
  faltas?: number
  creditos: number
  cargaHoraria: number
  cargaHorariaIntegralizada?: number
}

export type Classes = {
  id: number
  nome: string
  categoria: string
  classes: Classe[]
}

export const classes: Classes[] = [
  {
    id: 1,
    nome: '1º Período',
    categoria: 'disciplina-obrigatorias',
    classes: [
      {
        id: 1,
        status: 1,
        codigo: '204301',
        disciplina: 'Algoritmos e Linguagens de Programação',
        situacao: '*Equiv.',
        creditos: 4,
        cargaHoraria: 80,
        cargaHorariaIntegralizada: 80,
      },
      {
        id: 2,
        status: 4,
        periodo_letivo: '2021/1',
        codigo: '204201',
        disciplina: 'Codificação de Software',
        situacao: 'Aprovado',
        nota: '9,0000',
        faltas: 0,
        creditos: 8,
        cargaHoraria: 160,
      },
      {
        id: 3,
        status: 1,
        codigo: '204303',
        disciplina: 'Arquitetura e Organização de Computadores',
        situacao: '*Equiv.',
        creditos: 4,
        cargaHoraria: 80,
        cargaHorariaIntegralizada: 80,
      },
      {
        id: 4,
        status: 4,
        periodo_letivo: '2022/1',
        codigo: '204209',
        disciplina: 'Tecnologia da Informação',
        situacao: 'Aprovado',
        nota: 'SATISF',
        faltas: 13,
        creditos: 6,
        cargaHoraria: 120,
      },
      {
        id: 5,
        status: 1,
        codigo: '204305',
        disciplina: 'Lógica',
        situacao: '*Equiv.',
        creditos: 4,
        cargaHoraria: 80,
        cargaHorariaIntegralizada: 80,
      },
      {
        id: 6,
        status: 4,
        periodo_letivo: '2021/2',
        codigo: '204205',
        disciplina: 'Engenharia do Conhecimento',
        situacao: 'Aprovado',
        nota: '9,0000',
        faltas: 0,
        creditos: 6,
        cargaHoraria: 120,
      },
      {
        id: 7,
        status: 1,
        codigo: '204302',
        disciplina: 'Matemática Discreta',
        situacao: '*Equiv.',
        creditos: 4,
        cargaHoraria: 80,
        cargaHorariaIntegralizada: 80,
      },
      {
        id: 8,
        status: 4,
        periodo_letivo: '2021/1',
        codigo: '204201',
        disciplina: 'Codificação de Software',
        situacao: 'Aprovado',
        nota: '9,0000',
        faltas: 0,
        creditos: 8,
        cargaHoraria: 160,
      },
      {
        id: 9,
        status: 1,
        codigo: '204304',
        disciplina:
          'Práticas Profissionais em Ética e Legislação em Engenharia de Software',
        situacao: '*Equiv.',
        creditos: 3,
        cargaHoraria: 60,
        cargaHorariaIntegralizada: 60,
      },
      {
        id: 10,
        status: 4,
        periodo_letivo: '2022/2',
        codigo: '204211',
        disciplina: 'Tecnologias Aplicadas à Gestão de Negócios',
        situacao: 'Aprovado',
        nota: '0,0000/SATISF',
        faltas: 30,
        creditos: 6,
        cargaHoraria: 120,
      },
    ],
  },
  {
    id: 2,
    nome: '2º Período',
    categoria: 'disciplina-obrigatorias',
    classes: [
      {
        id: 11,
        status: 1,
        codigo: '204306',
        disciplina: 'Engenharia de Software I',
        situacao: '*Equiv.',
        creditos: 4,
        cargaHoraria: 80,
        cargaHorariaIntegralizada: 80,
      },
      {
        id: 12,
        status: 4,
        periodo_letivo: '2021/2',
        codigo: '204206',
        disciplina: 'Engenharia de Requisitos',
        situacao: 'Aprovado',
        nota: '8,6700',
        faltas: 0,
        creditos: 6,
        cargaHoraria: 120,
      },
      {
        id: 13,
        status: 1,
        periodo_letivo: '2024/1',
        codigo: '204310',
        disciplina: 'Linguagens, Autômatos e Computação',
        situacao: 'Aprovado',
        nota: '9,5000',
        faltas: 12,
        creditos: 4,
        cargaHoraria: 80,
        cargaHorariaIntegralizada: 80,
      },
      {
        id: 14,
        status: 1,
        codigo: '204308',
        disciplina: 'Relações Princípios e Valores',
        situacao: '*Equiv.',
        creditos: 4,
        cargaHoraria: 80,
        cargaHorariaIntegralizada: 80,
      },
      {
        id: 15,
        status: 4,
        periodo_letivo: '2021/1',
        codigo: '204204',
        disciplina: 'Relação: Princípios e Valores',
        situacao: 'Aprovado',
        nota: '10,0000',
        faltas: 8,
        creditos: 4,
        cargaHoraria: 80,
      },
      {
        id: 16,
        status: 1,
        codigo: '204307',
        disciplina: 'Sistemas de Banco de Dados I',
        situacao: '*Equiv.',
        creditos: 4,
        cargaHoraria: 80,
        cargaHorariaIntegralizada: 80,
      },
      {
        id: 17,
        status: 4,
        periodo_letivo: '2021/1',
        codigo: '204202',
        disciplina: 'Sistema de Gerenciamento de Banco de Dados',
        situacao: 'Aprovado',
        nota: '9,5000',
        faltas: 8,
        creditos: 6,
        cargaHoraria: 120,
      },
      {
        id: 18,
        status: 3,
        periodo_letivo: '2024/2',
        codigo: '204309',
        disciplina: 'Práticas Profissionais em Construção de Software',
        situacao: 'Matriculado',
        nota: '8,8000',
        faltas: 4,
        creditos: 3,
        cargaHoraria: 60,
      },
    ],
  },
  {
    id: 3,
    categoria: 'componentes-curriculares',
    nome: 'Componente Curriculare: Ensino',
    classes: [
      {
        id: 19,
        cargaHoraria: 80,
        disciplina: 'Curso ignite reactjs',
        periodo_letivo: '2023/2',
        situacao: 'Concluída',
        creditos: 0,
        cargaHorariaIntegralizada: 80,
        status: 1,
      },
    ],
  },
]