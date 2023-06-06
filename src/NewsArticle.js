const NewsArticle = () => {

    const {articleID} = useParams();
    const [article, setArticle] = useState({})

    useEffect(()=> {
        axios({
            url:`https://newsdata.io/api/1/news/${articleID}`,
            params : {
                api_key: 'pub_22281f35c04b83ae381a0286c0ef904cb104b'
            }

        }).then((response)=>{
            console.log(response.data);
            const soloArticle = response.data;
            setArticle(soloArticle)
        })
    }, [])

    const {original_title, tagline, overview, poster_path} = movie;
    return (
        <>

        </>
    )
}

export default NewsArticle;