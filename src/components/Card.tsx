

type Props = {
    phrase: string;
    author?: string;
}
export const Card = ({ phrase, author }: Props) => {
    return (
        <div className="w-80 bg-red-500 text-white">
            <h3 className="text-2xl">{phrase}</h3>
            {author && <p className="text-lg">{author}</p>}
            {!author && <p>Autor desconhecido</p>}
        </div>
    )
}