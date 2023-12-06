export default function ShortCut({display}) {
    return (
        <div className={`bg-gray-700 w-full h-full ${display === '' ? 'inline-block' : 'hidden'}`}>
            <span>:p</span>
        </div>
    )
}