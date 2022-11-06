
import useBudget from '../hooks/useBudget'
import { Bill } from './Bill'
import { Cargando } from './Cargando'
export interface billsInterface{
    id:number,
    description:string,
    amount:number,
    created_at:Date,
    update_ad:Date
}

export const Bills = () => {
    const{bills,cargando}=useBudget()
  

  return (
    <div>
      <h1>Gastos</h1>

       {!cargando ? bills.map((bill:billsInterface)=>(
        <Bill bill={bill} key={bill.id?? Math.random()}/>
       )): <Cargando/>}
       <p>
       Total de Gastos: $ {bills.reduce((total:number,gasto:billsInterface)=> gasto.amount+ total,0 )}
        </p>
       
    </div>
  )
}
