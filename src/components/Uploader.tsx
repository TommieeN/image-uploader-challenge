import logo from "../assets/image.svg";

const Uploader = () => {
  return (
    <section className="w-[25rem] h-[29rem] text-center">
        <div>
            <h1 className="font-medium text-[18px]">Upload your image</h1>
            <p>File should be Jpeg, Png,...</p>
        </div>
        <div className="flex flex-col items-center border-dashed border-[1px] border-[#97BEF4] py-[1rem]">
            <img className="w-[7.1rem]" src={logo} alt="mountains-with-clouds-and-nature-logo"/>
            <p>Drag & Drop your image here</p>
        </div>
        <p>Or</p>
        <button>Choose a file</button>
    </section>
  )
}

export default Uploader