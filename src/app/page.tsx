import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
    return (
        <div>
            <div className="min-h-screen w-full flex items-center justify-center">
                <div className="text-4xl font-bold">
                    Coming soon...
                </div>
            </div>
            <div className="absolute flex gap-3 left-1/2 -translate-x-1/2 bottom-10 font-[family-name:var(--font-geist-sans)]">
                <a
                    href="https://github.com/mshaevitch"
                    className="flex gap-1 items-center hover:underline hover:underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GitHubLogoIcon />
                    GitHub
                </a>
                <a
                    href="https://linkedin.com/in/mshaevitch"
                    className="flex gap-1 items-center hover:underline hover:underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedInLogoIcon />
                    LinkedIn
                </a>
            </div>
        </div>
    )
}
