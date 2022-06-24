import React, { Component } from 'react'
import { contextMode } from '../App';

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <contextMode.Consumer>
                {
                    (mode) => {
                        return (
                            <div className='my-3'>
                                <div className={`card bg-${mode === 'light' ? 'light' : 'dark'} text-${mode === 'light' ? 'dark' : 'light'}`}>
                                    <div style={{ position: 'absolute', display: 'flex', right: 0, justifyContent: 'flex-end' }}>
                                        <span className="badge rounded-pill bg-danger" style={{ left: '85%', zIndex: '1' }}>{source}</span>
                                    </div>
                                    <img src={imageUrl} alt='' />
                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        <p className="card-text">{description}</p>
                                        <p className="card-text"><small className={`text-${mode === 'light' ? 'dark' : 'light'}`}>By <b><u>{author ? author : "Unknown"}</u></b> on <b><u>{new Date(date).toUTCString()}</u></b>  </small></p>
                                        <a href={newsUrl} target="_blank" className={`btn btn-sm btn-${mode === 'light' ? 'dark' : 'light'}`}>Read more</a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </contextMode.Consumer>
        )
    }
}

export default NewsItem

