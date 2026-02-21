import { UserCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";

interface AuthButtonProps {
  isAuthenticated: boolean;
  className?: string;
}

export default function AuthButton({
  isAuthenticated,
  className,
}: AuthButtonProps) {
  return (
    <Link
      className={clsx(
        "items-center gap-2 text-background justify-center",
        "p-2 px-4 bg-surface/20 rounded-lg",
        className,
      )}
      href={isAuthenticated ? "/client-panel" : "/login"}
    >
      {isAuthenticated ? "پنل کاربری " : " ورود کاربران"}
      <UserCircleIcon className="h-6 w-6" />
    </Link>
  );
}
