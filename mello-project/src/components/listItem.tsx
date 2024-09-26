export default function ListItem({ item, href = '#', visible='' }: { item: string, href?: string, visible?: string }) {
    return (
    <li className={`list-item my-[-2rem] group ${visible}`}>
        <a className="list-tag group-hover:tracking-normal group-hover:text-[var(--primary-color)] font-sofia font-extrabold -tracking-[.2rem]" href={ href }>{ item }</a>
    </li>
    )
}