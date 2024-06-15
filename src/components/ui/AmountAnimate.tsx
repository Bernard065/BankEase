'use client'

import React from 'react'
import CountUp from 'react-countup'

const AmountAnimate = ({ amount }: { amount: number }) => {
  return <CountUp 
    end={amount}
    duration={2.75}
    separator=''
    decimal='.'
    decimals={2}
    prefix='$'
/>
}

export default AmountAnimate