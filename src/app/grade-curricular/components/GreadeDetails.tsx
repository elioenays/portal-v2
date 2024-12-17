export function GreadeDetails() {
  return (
    <div className="flex justify-between items-end font-light text-xs flex-wrap">
      <div className="flex flex-col gap-1">
        <div>
          <span>Habilitação: </span>
          <span className="font-bold">Bacharelado</span>
        </div>

        <div>
          <span>Matriz curricular: </span>
          <span className="font-bold">
            Engenharia de Software 03 1º/2023 N Bacharel GPCI
          </span>
        </div>

        <div>
          <span>Data de ingresso: </span>
          <span className="font-bold">08/02/2021</span>
        </div>

        <div>
          <span>Tipo de ingresso: </span>
          <span className="font-bold">ENEM</span>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div>
          <span>Situação: </span>
          <span className="font-bold">Matriculado</span>
        </div>

        <div>
          <span>Coeficiente de rendimento: </span>
          <span className="font-bold">7,28</span>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div>
          <span>Turno: </span>
          <span className="font-bold">NOTURNO</span>
        </div>

        <div>
          <span>Média global: </span>
          <span className="font-bold">0,00</span>
        </div>
      </div>
    </div>
  )
}
