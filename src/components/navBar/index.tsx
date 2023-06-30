import Link from "next/link";

export function NavBar() {
  return (
    <nav className="flex gap-3 bg-brand-pure">
      <Link href="/">Home</Link>
      <Link href="/signin">Entrar</Link>
      <Link href="/signup">Assine agora</Link>
    </nav>
  );
}
