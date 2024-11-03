const Footer = () => {
  return (
    <div className="footer bg-white shadow mt-2 md:flex block md:mx-auto" id="footer">
      <div className="container flex justify-center md:block px-4">
        <p className="py-4">&copy; Copyright by <span className="font-bold underline text-sky-400">Fanani Abimanyu</span></p>
      </div>
      <div className="social-footer flex items-center gap-7 justify-center px-4 pb-6 md:pb-0">
        <div className="border border-slate-400 w-9 h-9 rounded-full flex items-center hover:border-sky-400 transition-all">
        <i className="ri-facebook-circle-fill text-xl mx-auto hover:text-sky-400 transition-all"></i>
        </div>
        <div className="border border-slate-400 w-9 h-9 rounded-full flex items-center hover:text-sky-400 transition-all">
        <i className="ri-instagram-fill text-xl mx-auto hover:text-sky-400 transition-all"></i>
        </div>
        <div className="border border-slate-400 w-9 h-9 rounded-full flex items-center hover:text-sky-400 transition-all">
        <i className="ri-linkedin-fill text-xl mx-auto hover:text-sky-400 transition-all"></i>
        </div>
        <div className="border border-slate-400 w-9 h-9 rounded-full flex items-center hover:text-sky-400 transition-all">
        <i className="ri-twitter-fill text-xl mx-auto hover:text-sky-400 transition-all"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer