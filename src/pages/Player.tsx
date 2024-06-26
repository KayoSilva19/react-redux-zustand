import { MessageCircle } from 'lucide-react'

import { Header } from '../components/Header'
import { Video } from '../components/Video'
import { Module } from '../components/Module'
import { ButtonHeader } from '../components/buttonHeader'
import { useAppSelector } from '../store'

export function Player() {
  const module = useAppSelector((state) => state.player.course.modules)

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />

          <ButtonHeader.Root>
            <ButtonHeader.Icon icon={MessageCircle} />
            <ButtonHeader.Text text="Deixar feedback" />
          </ButtonHeader.Root>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>
          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {module.map((item, index) => {
              return (
                <Module
                  key={item.id}
                  moduleIndex={index}
                  title={item.title}
                  amountOfLessons={item.lessons.length}
                />
              )
            })}
          </aside>
        </main>
      </div>
    </div>
  )
}
