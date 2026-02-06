export default function Heading({ title }: { title: string }) {
    return (
        <div className="w-full flex flex-nowrap items-center justify-start gap-6">
            <h2 className="text-4xl font-medium text-grey-900 whitespace-nowrap">{title}</h2>
            <div className="w-full h-[3px] bg-grey-900 rounded-full"></div>
        </div>
    )
}