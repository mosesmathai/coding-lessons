import './globals.css'

export const metadata = {
  title: 'Bootcamp',
  description: 'We are offering coding lessons: html, css, tailwind,javascript, reactjs, nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black mb-40 font-serif'>{children}</body>
    </html>
  )
}
