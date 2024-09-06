import { Estudante } from "@/types/Estudante"

type Props = {
    estudantes: Estudante[]
}

export const Escola = ({ estudantes }: Props) => {

    return (
        <div className="w-[600px] h-auto bg-slate-600 p-2 pt-0 pl-0 pr-0 rounded-md">

            <div >
                <table className="w-full rounded-t-md overflow-hidden">
                    <thead >
                        <tr className="bg-slate-800 w-[600px] ">
                            <th className=" p-3 text-left rounded-t-md">Nome</th>
                            <th>Status</th>
                            <th>Grade 1</th>
                            <th>Grade 2</th>
                            <th>Final Grade</th>
                        </tr>
                    </thead>
                    {estudantes.map((estudante) => (
                        <tbody key={estudante.id}>
                            <tr className="text-center m-3">
                                <td className="flex">
                                    <img src={estudante.avatar} alt={estudante.nome} className="w-16 h-16 rounded-full m-3 object-cover object-center" />
                                    <div className="ml-3 text-left items-start">
                                        <p className="mt-5 font-bold">{estudante.nome}</p>
                                        <p>{estudante.email}</p>
                                    </div>
                                </td>
                                <td>
                                    <p className={`text-center p-1 rounded-md font-bold text-xs ${estudante.active ? "bg-green-500" : "bg-red-500"}`}>{estudante.active ? "Ativo" : "Inativo"}</p>
                                </td>
                                <td>
                                    {estudante.grade1.toFixed(1)}
                                </td>
                                <td>
                                    {estudante.grade2.toFixed(1)}
                                </td>
                                <td className="font-bold">
                                    {estudante.active ? ((estudante.grade1 + estudante.grade2) / 2).toFixed(1) : "-"}
                                </td>
                            </tr>

                        </tbody>
                    ))}
                </table>

            </div>

        </div>
    )
}