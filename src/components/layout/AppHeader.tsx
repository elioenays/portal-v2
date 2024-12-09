import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { SidebarTrigger } from '../ui/sidebar'

export function AppHeader() {
  return (
    <header className="border p-3 flex w-full justify-between h-11 items-center">
      <div className="flex items-center">
        <SidebarTrigger title="Abrir menu" />
        Faculdade
      </div>

      <div className="items-center gap-3 hidden">
        <span>ELIOENAY RODRIGUES DA SILVA</span>

        <Avatar className="size-7">
          <AvatarImage
            src="https://github.com/elioenays.png"
            alt="@elioenays"
          />

          <AvatarFallback>ES</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
