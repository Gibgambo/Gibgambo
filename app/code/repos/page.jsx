//server component

import Link from "next/link";
import {FaStar, FaCodeBranch, FaEye} from "react-icons/fa"

async function fetchRepos() {
    
    const response = await fetch("https://api.github.com/users/gibgambo/repos",{
        headers: {
            Authorization: process.env.GITHUB_TOKEN
        }
    } );

    //wait 1 sec
    //await new Promise((resolve) => setTimeout(resolve, 1000)) //1000 = 1sec
    const repos = await response.json();

    return repos;
}
//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
const ReposPage = async () => {

    const repos = await fetchRepos();
    //console.log(repos)
   

  return (
    <div className="repos-container">
        <h2>Repositories</h2>
        <ul className="repo-list">
            {repos.map((repo) => (
                <li key={repo.id}>
                    <Link href={`/code/repos/${repo.name}`}>
                        <h3>{repo.name}</h3>
                        <p>{repo.description}</p>
                        <div className="repo-details">
                            <span>
                                <FaStar /> {repo.stargazers_count}
                            </span>
                            <span>
                                <FaCodeBranch /> {repo.forks_count}
                            </span>
                            <span>
                                <FaEye /> {repo.watchers_count}
                            </span>
                        </div>
                        
                    </Link>
                </li>
            ))}
        </ul>
    </div>

  )
}

export default ReposPage