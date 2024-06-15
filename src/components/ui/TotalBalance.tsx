// import { formatAmount } from '@/lib/utils'
import React from 'react'
import DoughnutChart from './DoughnutChart'
import AmountAnimate from './AmountAnimate'

const TotalBalance = ({ 
    accounts = [], totalBankAccounts, totalCurrentBalance 
}: TotalBalanceProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            {/* Chart */}
            <DoughnutChart accounts={accounts} />
        </div>

        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
                Bank Accounts: {totalBankAccounts}
            </h2>
            <div className='flex flex-col gap-2'>
                <p className='total-balance-label'>
                    Total Current Balance
                </p>
                
                <p className='total-balance-amount flex-center gap-2'>
                    {/* {formatAmount(totalCurrentBalance)} */}
                    <AmountAnimate amount={totalCurrentBalance} />
                </p>
            </div>
        </div>
    </section>
  )
}

export default TotalBalance