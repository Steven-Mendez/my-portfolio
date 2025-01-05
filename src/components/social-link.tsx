import { Mail } from "lucide-react";
import Link from "next/link";

export default function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Mail;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors"
      aria-label={label}
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
}
