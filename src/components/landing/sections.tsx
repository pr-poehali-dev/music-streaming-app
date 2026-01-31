import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">🎮 Набор открыт</Badge>,
    title: "Добро пожаловать в MagicKingdom",
    showButton: true,
    buttonText: 'Вступить в клан'
  },
  {
    id: 'about',
    title: 'О нашем клане',
    content: 'MagicKingdom — это сплочённая команда игроков, которые вместе побеждают, развиваются и создают легендарные моменты в игре.'
  },
  {
    id: 'features',
    title: 'Что мы предлагаем',
    content: 'Совместные рейды, тренировки, турниры внутри клана, голосовая связь и дружеская атмосфера. Мы помогаем каждому участнику прокачаться и достичь новых высот.'
  },
  {
    id: 'stats',
    title: 'Наши достижения',
    content: 'Топ-50 кланов региона, 150+ активных участников, 200+ совместных побед. Мы растём каждый день и ждём тебя в наших рядах!'
  },
  {
    id: 'join',
    title: 'Присоединяйся к нам',
    content: 'Готов стать частью MagicKingdom? Заполни заявку и начни своё приключение вместе с нами уже сегодня!',
    showButton: true,
    buttonText: 'Подать заявку'
  },
]