import { Button } from "./ui/button"
import { Avatar, AvatarFallback } from "./ui/avatar"


export default function Component() {
    return (
        <header className="flex items-center justify-between h-14 px-4 border-b bg-lightBlue md:px-6 dark:bg-gray-950">
            <Button variant="title" className="flex items-center gap-2 mr-4" >
                <span className="font-semibold text-xl">DesiVocal</span>
            </Button>
            <Avatar className="border border-darkPurple">
                <AvatarFallback>R</AvatarFallback>
            </Avatar>
        </header>
    )
}
