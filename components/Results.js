import Thumbnail from './Thumbnail'

function Results({results}) {
  return (
  <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
  3xl:flex flex-wrap justify-center">   {/* for 3xl custom breakpoint ie; 4k screens we will update in our tailwind.config file as screens 3xl*/}

    {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
    ))}
 
  </div>
  );
}

export default Results;

