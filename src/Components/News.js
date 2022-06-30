import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

export default class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1 ,
            totalResults: 0
        }
    }

    async updateNews() {
        // always get called after render() method.
        this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.props.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(30)
        let parseData = await data.json();
        this.props.setProgress(70)
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        });
        this.props.setProgress(100)
    }

    async componentDidMount() {
        // always get called after render() method.
    /*
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f74f08c496ec4751bdb9e6c7807c4658&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        });
    */
        this.updateNews();
    }

    handleNextClick = () => {
        /*  
          if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)))
          {
              let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f74f08c496ec4751bdb9e6c7807c4658&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
              this.setState({loading:true})
              let data = await fetch(url);
              let parseData = await data.json();
              this.setState({
                  articles: parseData.articles,
                  page: this.state.page + 1 ,
                  loading:false
              });
          }
        */
        this.setState({
            page: this.state.page + 1
        })
        this.updateNews();
    }

    handlePrevClick = () => {
        /*  
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f74f08c496ec4751bdb9e6c7807c4658&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
          this.setState({loading:true})
          let data = await fetch(url);
          let parseData = await data.json();
          this.setState({
              articles: parseData.articles,
              page: this.state.page - 1 ,
              loading:false
          });
      */
        this.setState({
            page: this.state.page - 1
        })
        this.updateNews();
    }

    captalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    fetchMoreData = async()=>{
        this.setState({
            page: this.state.page + 1
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults,
            loading: false
        });
    }

    render() {
        return (
            <>
                <h2 className='text-center my-2'>NewsToday - Top {this.props.category === 'general' ? '' : this.captalizeFirstLetter(this.props.category)} Headlines</h2>
                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className='container my-3'>
                        <div className="row" >
                            { // !this.state.loading && 
                            this.state.articles.map((element) => {
                                return <div className="col-md-3" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""}
                                        imageUrl={element.urlToImage ? element.urlToImage : "https://bitsofco.de/content/images/2018/12/broken-1.png"}
                                        newsUrl={element.url ? element.url : ""}
                                        author={element.author}
                                        date={element.publishedAt}
                                        source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/*                 
                <div className="container my-5 d-flex justify-content-evenly">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark mx-2" onClick={this.handlePrevClick}> &larr; Previous</button>
                    // html code for left arrow &larr and for right &rarr
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
                </div>
             */}
            </>
        )
    }
}
