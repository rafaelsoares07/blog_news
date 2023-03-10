import React from "react"
import '../styles/global.scss'

import MainFooter from "@/shared/components/main-footer"
import MainHeader from "@/shared/components/main-header"

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap" rel="stylesheet" />
      </head>

      <body>
        <MainHeader />
        <div>
          <main className="container-main">
            <div className="content">
              {children}
            </div>
          </main>
          <MainFooter />
        </div>
      </body>

    </html>
  )
}
