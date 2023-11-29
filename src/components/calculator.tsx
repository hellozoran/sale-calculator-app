import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'

const Calculator = () => {
  const [originalPrice, setOriginalPrice] = useState(0)
  const [salePrice, setSalePrice] = useState(0)
  const [discount, setDiscount] = useState(0)

  return (
    <div className='max-w-[30rem] p-6'>
      <div>
        <label className='uppercase text-sm tracking-wider opacity-75 text-center w-full block'>
          Original price
        </label>
        <div className='text-xl font-bold flex items-center gap-2'>
          $
          <Input
            type="number"
            value={originalPrice}
            className='mt-2 text-center text-2xl font-bold'
            onChange={(e) => setOriginalPrice(Number(e.target.value))} 
          />
        </div>
      </div>

      <div className='mt-6'>
        <label className='uppercase text-sm tracking-wider opacity-75 text-center w-full block'>
          Sale price
        </label>
        <div className='text-xl font-bold flex items-center flex-row gap-2'>
          $
          <Input
            type="number"
            value={salePrice}
            className='mt-2 text-center text-2xl font-bold'
            onChange={(e) => setSalePrice(Number(e.target.value))} 
          />
        </div>
      </div>

      <Button size={'lg'} onClick={() => setDiscount(100 - (salePrice / originalPrice) * 100)} className='w-full mt-6'> Calculate </Button>

      <div className='p-4 rounded-lg bg-slate-100 dark:bg-slate-900 mt-12'>
        <h2 className='text-3xl font-bold text-center'>Discount: {discount.toFixed()}%</h2>
      </div>
      
    </div>
  )
}

export default Calculator;