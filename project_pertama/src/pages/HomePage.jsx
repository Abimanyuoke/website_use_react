import HeroImage from "../assets/images/hero.svg"
import AboutImage from "../assets/images/about.svg"
import Proyek from "../assets/images/dev-gif.gif"

const HomePage = () => {
  return (
    <div className="homepage pb-10 lg:px-8" id="homepage">
      <div className="container mx-auto px-4">
        <div className="hero pt-32 grid md:grid-cols-2 grid-cols-1 items-center gap-20">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">Belajar Membuat Website Dengan <span className="font-bold text-sky-400 underline">Tailwind CSS</span></h1>
            <p className="text-base/8 mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ullam doloremque beatae corporis odit pariatur enim nostrum explicabo quas repellat?</p>
            <a href="#" className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow-md rounded-full">Tentang Kami<i className="ri-eye-line ms-1"></i></a>
          </div>
          <div className="box">
            <img src={HeroImage} alt="Hero Image" className="md:w-full w-[400px] mx-auto"/>
          </div>
        </div>

        <div className="about grid md:grid-cols-2 md:pt-20 pt-36 md:gap-20 gap-10 items-center lg:px-8" id="about">
          <div className="box md:order-1 order-2">
            <img src={AboutImage} alt="About Image" className="lg:w-[500px] w-[400px] mx-auto md:m-0"/>
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">Belajar Membuat Website Dengan <span className="font-bold text-sky-400 underline">Tailwind CSS</span></h1>
            <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ullam doloremque beatae corporis odit pariatur enim nostrum explicabo quas repellat?</p>
          </div>
        </div>

        <div className="services pt-36 lg:px-8" id="services">
          <h1 className=" text-center lg:text-5xl/tight text-3xl font-medium mb-2">Layanan</h1>
          <p className=" text-center text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-1 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">Services Name 1</h3>
              <p className="text-base/loose text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, facere ipsum! Sapiente, veritatis eum. At!</p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-2 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">Services Name 2</h3>
              <p className="text-base/loose text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, facere ipsum! Sapiente, veritatis eum. At!</p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-3 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">Services Name 3</h3>
              <p className="text-base/loose text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, facere ipsum! Sapiente, veritatis eum. At!</p>
            </div>
          </div>
        </div>

        <div className="project pt-40 lg:px-8" id="project">
        <h1 className=" text-center lg:text-5xl/tight text-3xl font-medium mb-2">Proyek</h1>
        <p className=" text-center text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className="proyek-box pt-12 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          <div className="box p-2 shadow bg-white">
            <img src={Proyek} alt="gif coding" />
            <h3 className="text-xl font-bold text-slate-500 mt-6 mb-2 px-4">Proyek Name 1</h3>
            <p className="text-base/loose text-slate-500 px-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quidem beatae quas fugiat ad error!</p>
          </div>
          <div className="box p-2 shadow bg-white">
            <img src={Proyek} alt="gif coding" />
            <h3 className="text-xl font-bold text-slate-500 mt-6 mb-2 px-4">Proyek Name 2</h3>
            <p className="text-base/loose text-slate-500 px-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quidem beatae quas fugiat ad error!</p>
          </div>
          <div className="box p-2 shadow bg-white">
            <img src={Proyek} alt="gif coding" />
            <h3 className="text-xl font-bold text-slate-500 mt-6 mb-2 px-4">Proyek Name 3</h3>
            <p className="text-base/loose text-slate-500 px-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quidem beatae quas fugiat ad error!</p>
          </div>
          <div className="box p-2 shadow bg-white">
            <img src={Proyek} alt="gif coding" />
            <h3 className="text-xl font-bold text-slate-500 mt-6 mb-2 px-4">Proyek Name 4</h3>
            <p className="text-base/loose text-slate-500 px-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quidem beatae quas fugiat ad error!</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
