// import type { Metadata } from 'next'
// import './globals.css'

// export const metadata: Metadata = {
//   title: 'CleanCodin Training Institute - Frontend, Backend, Full Stack & Mobile Development',
//   description: 'Join the best CleanCodin Training Institute in Nagpur. Learn Frontend, Backend, Full Stack, and Mobile Application Development with hands-on experience on live projects.',
//   // generator: 'v0.dev',
//   keywords: ['CleanCodin', 'Training Institute', 'Nagpur', 'Frontend Development', 'Backend Development', 'Full Stack Development', 'Mobile App Development', 'Live Projects', 'Web Development', 'JavaScript', 'React', 'Node.js', 'Android', 'iOS','java','spring-boot','flutter'],
//   authors: [{ name: 'CleanCodin Training Institute' }],
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Ensure keywords are joined only if they are an array */}
//         {metadata.keywords && (
//           <meta
//             name="keywords"
//             content={Array.isArray(metadata.keywords) ? metadata.keywords.join(', ') : metadata.keywords}
//           />
//         )}
//       </head>
//       <body>{children}</body>
//     </html>
//   )
// }
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CleanCodin',
  description: 'Join the best CleanCodin Training Institute in Nagpur. Learn Frontend, Backend, Full Stack, and Mobile Application Development with hands-on experience on live projects.',
  keywords: ['CleanCodin.app','CleanCodin', 'Training Institute', 'Nagpur', 'Frontend Development', 'Backend Development', 'Full Stack Development', 'Mobile App Development', 'Live Projects', 'Web Development', 'JavaScript', 'React', 'Node.js', 'Android', 'iOS','java','spring-boot','flutter'],
    authors: [{ name: 'CleanCodin Training Institute' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 