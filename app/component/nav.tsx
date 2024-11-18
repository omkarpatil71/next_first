import Link from 'next/link';

export default function Nav() {
    return (
        <nav style={{ padding: '10px', background: '#f0f0f0' }}>
            <ul style={{ listStyleType: 'none', display: 'flex', gap: '15px' }}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/social">Sociaql Media</Link>
                </li>
            </ul>
        </nav>
    );
}
