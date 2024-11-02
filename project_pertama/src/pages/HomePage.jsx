import HeroImage from "../assets/images/hero.svg"
import AboutImage from "../assets/images/about.svg"

const HomePage = () => {
  return (
    <div className="homepage pb-10">
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

        <div className="about grid md:grid-cols-2 md:pt-20 pt-32 gap-20 items-center">
          <div className="box md:order-1 order-2">
            <img src={AboutImage} alt="About Image" className="lg:w-[500px] w-[400px] mx-auto md:m-0"/>
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">Belajar Membuat Website Dengan <span className="font-bold text-sky-400 underline">Tailwind CSS</span></h1>
            <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ullam doloremque beatae corporis odit pariatur enim nostrum explicabo quas repellat?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
