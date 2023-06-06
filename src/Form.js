import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Form = () => {

    const [country, setCountry] = useState('ca');
    const [category, setCategory] = useState('business');
    const [input, setInput] = useState('')
    const [error, setError] = useState(false);
    const [news, setNews] = useState([]);


useEffect (() => {
    const apiKey = "pub_22281f35c04b83ae381a0286c0ef904cb104b";
    const url = new URL ("https://newsdata.io/api/1/news");
    url.search = new URLSearchParams({
    apiKey: apiKey,
    country: country,
    category: category, 
    q: input
    });

    fetch(url)
    .then(results => {
    return results.json();  
     }).then(newsData => {
    
        if (newsData.results.length === 0){
            setError(true);

        } else {
            const newsArticle = newsData.results;

            setNews(newsArticle); 
        }    
    }) 
    }, [category, country])

    console.log(news)

    const handleChange = (e) => {
        console.log('change has been made')
        setNews(news)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("searching")
        setInput(e.target.value);
    }

    return (
        <>
            <label>News from:</label>
            <div
            className="countries"
            onClick={handleChange}>
                <button onClick={() => setCountry('ca')}>Canada</button>
                <button onClick={() => setCountry('us')}>United States</button>
                <button onClick={() => setCountry('ru')}>Russia</button>
                <button onClick={() => setCountry('in')}>India</button>
                <button onClick={() => setCountry('de')}>Germany</button>
                <button onClick={() => setCountry('br')}>Brazil</button>
                <button onClick={() => setCountry('cn')}>China</button>
                <button onClick={() => setCountry('gb')}>United Kingdom</button>
                <button onClick={() => setCountry('au')}>Australia</button>
            </div>
            <label>Categories:</label>
            <div 
            className="categories"
            onClick={handleChange}>
                <button onClick={() => setCategory('business')}>Business</button>
                <button onClick={() => setCategory('entertainment')}>Entertainment</button>
                <button onClick={() => setCategory('environment')}>Environment</button>
                <button onClick={() => setCategory('food')}>Food</button>
                <button onClick={() => setCategory('health')}>Health</button>
                <button onClick={() => setCategory('politics')}>Politics</button>
                <button onClick={() => setCategory('science')}>Science</button>
                <button onClick={() => setCategory('sports')}>Sports</button>
                <button onClick={() => setCategory('technology')}>Technology</button>
            </div>  
            <div>
                <form>
                    <label>Search: </label>
                    <input type="text" id="input"/>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div> 
            <ul>
                {news.map((article, key)=>(
                     <li key={key} className="news-items">
                        <Link to={article.link}>
                            <h3>{article.title}</h3>
                        </Link>
                        
                        <img src={article.image_url}/>
                        <p>{article.description}</p>                        
                        <p>{`Published on: ${article.pubDate}`}</p>
                    </li>
                ))}
            </ul>         
        </>
    )
}

export default Form;