
const Footer = () => {
    return (
        <div className="bg-slate-600 h-17 w-[100vw] mx-auto flex justify-center  z-10 absolute bottom-0 right-[50%] transform translate-x-1/2">    
            <div className="flex flex-col gap-1 mt-1">
                <div className="flex items-center gap-0 justify-center">
                <span className='text-2xl font-bold text-green-400'> &lt;</span>
                    <span className="text-xl font-bold text-white">Pass</span>
                    <span className="text-xl font-bold text-green-400">OP/&gt;</span>
                </div>
                <div className='flex gap-1 text-lg font-bold'>
                    <span> Created with </span>
                    <span className='my-auto'><lord-icon
                        src="https://cdn.lordicon.com/aydxrkfl.json"
                        trigger="hover"
                        stroke="bold">
                    </lord-icon></span>
                    <span>by Prakash </span>
                </div>
            </div>
        </div>
    )
}

export default Footer
