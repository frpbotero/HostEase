export default function Login() {
    return (
        <div className="grid grid-cols-2">
            <form className="flex justify-center items-center pb-60 bg-cyan-800 h-screen">
                <div className="flex flex-col justify-center items-center space-y-4 w-96 h-96 bg-cyan-200 rounded-xl">
                <h1 className="text-4xl pb-4 text-stone-600">HostEase</h1>
                    <div><label className="text-stone-600 font-semibold">Login: </label>
                    <input className='font-mono w-60 h-8 pl-2 rounded-md bg-cyan-400'></input></div>
                    <div><label className="text-stone-600 font-semibold">Senha: </label>
                    <input className='font-mono w-60 h-8 pl-2 rounded-md bg-cyan-400'></input></div>
                    <button className="bg-cyan-400 p-2 rounded-md text-stone-600 font-semibold hover:bg-cyan-300 hover:text-stone-900 hover:shadow duration-200">Entrar</button>
                    <p className="font-bold">Não possui login? <span className="text-stone-600 font-semibold cursor-pointer">Cadastre-se</span></p>
                </div>
            </form>
            <section className="flex justify-center items-center bg-stone-700 text-stone-300 text-8xl pb-80">Picture</section>
        </div>
    )
}