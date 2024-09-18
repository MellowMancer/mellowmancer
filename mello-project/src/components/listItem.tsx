export default function ListItem({ item, href = '#', visible='' }: { item: string, href?: string, visible?: string }) {
    return (
    <li className={`list-item my-[-2rem] ${visible}`}>
        <a className="list-tag hover:tracking-normal font-sofia font-extrabold -tracking-[.2rem]" href={ href }>{ item }</a>
    </li>
    )
}