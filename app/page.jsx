//react arrow function export component
import Link from "next/link"

const HomePage = props => {
  return (
    <div>

      <h1>Welcome to Struntz.Net</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/about/team">team</Link></li>
      </ul>

    </div>
  )
}


export default HomePage;

