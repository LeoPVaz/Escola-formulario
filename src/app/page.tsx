import { Escola } from "@/components/Escola"
import { estudantes } from "@/data/estudantes"
const page = () => {

  return (
    <body >
      <div className="w-screen h-screen flex justify-center items-center">
         <Escola estudantes={estudantes} />
      </div>

    </body>

  )
}
export default page