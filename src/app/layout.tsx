import React from 'react'
import type { Metadata } from 'next'
import './global.scss'

export const metadata: Metadata = {
  title: 'Светлана Баутина — UX/UI Дизайнер',
  description: 'Светлана Баутина — опытный UX/UI дизайнер, специализирующийся на стратегическом проектировании, модернизации продукта и его глобализации. Получите комплексные решения в области продуктового дизайна, направленные на удобство и доступность. Оптимизируйте пользовательский опыт и повышайте конверсию с помощью профессиональных подходов и современных методик UX/UI практики.',
  keywords: 'UX/UI дизайнер, стратегическое проектирование, модернизация продукта, глобализация, пользовательский опыт, конверсия, продуктовый дизайн, sapfy, СПб, продуктовый дизайнер, обучение UX/UI, UX/UI практика, ux/ui, design system, prototyping, app design, visual design, icon design, branding, identity, user experience'
}

export default function RootLayout ({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="img/favicon.ico" />
        <link rel="apple-touch-icon" sizes="16x16" href="/img/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="32x32" href="/img/favicon-32x32.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
