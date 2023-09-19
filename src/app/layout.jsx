import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
	title: 'Timetable',
	description: 'Timetable project',
}

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body className={`${montserrat.className}`}>
				{/* <Header /> */}

				<main className='min-h-screen'>{children}</main>
			</body>
		</html>
	)
}
