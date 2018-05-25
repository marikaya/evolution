import React from 'react';
import css from './TopicHeader.scss';

class TopicHeader extends React.Component{
    render(){
        return (
            <div className={css.topicHeader}>
                <h1 className={css.topicTitle}>lorem ipsum dot sit amet</h1>
                <div className={css.topicToolboxTop}>
                    <div className="btn-group btn-group-sm">
                        <div className="dropdown">
                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="shareDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                paylaş
                            </button>
                            <div className="dropdown-menu" aria-labelledby="shareDropdown">
                                <a className="dropdown-item" href="#"><i className="social-twitter"/> twitter</a>
                                <a className="dropdown-item" href="#"><i className="social-facebook"/> facebook</a>
                                <a className="dropdown-item" href="#"><i className="social-google"/> google+</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="exploreDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                araştır
                            </button>
                            <div className="dropdown-menu" aria-labelledby="exploreDropdown">
                                <a className="dropdown-item" href="#">twitter</a>
                                <a className="dropdown-item" href="#">facebook</a>
                                <a className="dropdown-item" href="#">google+</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="filterDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                filtrele
                            </button>
                            <div className="dropdown-menu" aria-labelledby="filterDropdown">
                                <a className="dropdown-item" href="#">twitter</a>
                                <a className="dropdown-item" href="#">facebook</a>
                                <a className="dropdown-item" href="#">google+</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="searchDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                kategori
                            </button>
                            <div className="dropdown-menu" aria-labelledby="searchDropdown">
                                <a className="dropdown-item" href="#">twitter</a>
                                <a className="dropdown-item" href="#">facebook</a>
                                <a className="dropdown-item" href="#">google+</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="bkzDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                bkzlar
                            </button>
                            <div className="dropdown-menu" aria-labelledby="bkzDropdown">
                                <a className="dropdown-item" href="#"><i className="social-twitter"/> twitter</a>
                                <a className="dropdown-item" href="#"><i className="social-facebook"/> facebook</a>
                                <a className="dropdown-item" href="#"><i className="social-google"/> google+</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="settingsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                başlık ayarları
                            </button>
                            <div className="dropdown-menu" aria-labelledby="settingsDropdown">
                                <a className="dropdown-item" href="#">ayarlar</a>
                                <a className="dropdown-item" href="#">foto ekle</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export  default  TopicHeader;