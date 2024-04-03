async function fetchRepoContens(name){
    //wait 3 sec
    await new Promise((resolve) => setTimeout(resolve, 3000))
    //suspense boundaries

    const response = await fetch(`https://api.github.com/repos/gibgambo/${name}/contents`,{
        headers: {
            Authorization: process.env.GITHUB_TOKEN
        }
    } );

    const contents = await response.json();

    return contents;
}

const RepoDirs = async ( {name} ) => {

    const contents = await fetchRepoContens(name) 
    const dirs = contents.filter((content) => content.type === "dir");

  return (
    <div>RepoDirs</div>
  )
}

export default RepoDirs