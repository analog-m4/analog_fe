function Header() {
  return (
    <div className="header flex h-32 w-screen justify-between">
      <h1 className="text-3xl flex justify-center items-center p-5 w-72">Analog</h1>
      <div className="nav flex gap-2">
        <div className="text-xl flex items-center">Login</div>
        <div className="text-xl flex items-center">Join Now</div>
      </div>
    </div>
  )
}

export default Header;