import React from 'react';
import css from './LeftSide.scss';

class LeftSide extends React.Component{

    render(){
        return (
            <div className={css.topicHeader}>
                <div className={css.topicListHeader}>
                    <strong>gündem</strong>
                    <a className={css.refreshTopicList} href="#">
                        <i className="icon-refresh"/>
                    </a>
                    <span className={css.titleCount}>150/514</span>
                </div>
                <ul className={css.topicList}>
                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="" data-original-title="30 kişi okumuş">çay tiryakisi <span className={css.readCount}>25</span> </a></li>
                    <li><a href="#">downtown<span className={css.readCount}>25</span> </a></li>
                </ul>
            </div>
        )
    }
}

export default LeftSide;