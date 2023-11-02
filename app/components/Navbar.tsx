const Navbar = () => {
  return (
    <div className="w-full h-16 bg-slate-100 flex justify-between items-center">
        <h1 className="text-2xl ml-8 font-medium">Kurashikku</h1>
        <ul className="flex mr-8">
            <button>
                <li className="m-4">Create Reservation</li>
            </button>
            <button>
                <li className="m-4">Login</li>
            </button>
        </ul>
    </div>
  )
}

export default Navbar