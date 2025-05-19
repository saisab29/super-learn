import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost">
          <Image
            src="/nodejs.svg"
            alt="Croatian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Node
        </Button>
        <Button size="lg" variant="ghost">
          <Image
            src="/rust.svg"
            alt="Spanish"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Rust
        </Button>
        <Button size="lg" variant="ghost">
          <Image
            src="/python.svg"
            alt="French"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Python
        </Button>
        <Button size="lg" variant="ghost">
          <Image
            src="/nodejs.svg"
            alt="Italian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Node
        </Button>
        <Button size="lg" variant="ghost">
          <Image
            src="/rust.svg"
            alt="Japanese"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Rust
        </Button>
      </div>
    </footer>
  );
};
