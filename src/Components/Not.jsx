import Image from "../assets/illustration.svg"

const Not = () => {
  return (
    <div className="flex items-center justify-center gap-4 h-[80vh]">
        <div>
            <img src={Image} alt="" width="250px"/>
            <h3 className="text-2xl font-semiblod text-dark text-center my-2">Aucun Conctat</h3>
        </div>
      
    </div>
  )
}

export default Not
