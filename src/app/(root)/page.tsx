import Header from '@/components/ui/Header'
import RightSidebar from '@/components/ui/RightSidebar'
import TotalBalance from '@/components/ui/TotalBalance'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Bernard', lastName: 'Omboga', email: 'bernardbebeni@gmail.com' }

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <Header 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || "Guest"}
                    subtext="Access and manage your account and transactions effectively and efficiently."
                />
                <TotalBalance 
                    accounts={[]}
                    totalBankAccounts={1}
                    totalCurrentBalance={1223.49}
                />
            </header>
            RECENT TRANSACTIONS
        </div>

        <RightSidebar 
            user={loggedIn}
            transactions={[]}
            banks={[{}, {}]}
        />
    </section>
  )
}

export default Home