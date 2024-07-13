import IconEthereum from './components/icons/IconEthereum'
import IconClock from './components/icons/IconClock'


function App() {

  return (
    <>
      <div className="bg-regal-blue flex flex-col gap-4 p-5 rounded-lg shadow-custom w-80">
        <div className='mx-auto rounded-lg'>
          <img className='object-cover rounded-lg h-full w-full' src="../public/images/image-equilibrium.jpg" alt="" />
        </div>
        <h2 className='font-semibold text-white text-2xl'>Equilibrium #3429</h2>
        <p className='text-gray'>Our Equilibrium collection promotes balance and calm.</p >
        <div className='flex justify-between'>
          <span className='items-center flex gap-2 '>
            <IconEthereum />
            <h3 className='font-semibold text-light-green'>0.041 ETH</h3>
          </span>
          <span className='items-center flex gap-2'>
            <IconClock />
            <h3 className='font-semibold text-gray'>3 days left</h3>
          </span>
        </div>
        <div className='bg-gray h-px w-full'></div>
        <span className='flex items-center mb-0.5'>
          <img className='border border-gray rounded-full w-7' src="../public/images/image-avatar.png" alt="" />
          <h5 className='mx-2  text-gray'>Creation of</h5>
          <h4 className='text-white'>Jules Wyvern</h4>
        </span>

      </div>
    </>
  )
}

export default App
