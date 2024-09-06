type props = {
    rate: number;
}

export const Emoji = ({ rate }: props) => {
    if (rate > 5) rate = 5;
    if (rate < 0) rate = 0;

    const rateInt = Math.floor(rate);

    const stars = "".repeat(rateInt) + "";

    const defaultEmoji = "😶".repeat(5 - rateInt)

    let emoji = ""

    if (rate >= 0 && rate <= 1) {
        emoji = "🙁".repeat(rateInt)
    } else if (rate > 1 && rate <= 2) {
        emoji = "😕".repeat(rateInt
        )
    } else if (rate > 2 && rate <= 3) {
        emoji = "😐".repeat(rateInt)
    } else if (rate > 3 && rate <= 4) {
        emoji = "😊".repeat(rateInt)
    } else if (rate > 4 && rate <= 5) {
        emoji = "😍".repeat(rateInt)
    }

    return (
        <div className="flex items-center text-6xl">
            <div className="text-red-700 bg-slate-300 p-3">{rate.toFixed(1)}</div>
            <div className="ml-3">{emoji + defaultEmoji}</div>
        </div>
    )
}