import React from 'react';
import TopicHeader from "../TopicHeader/TopicHeader";
import Entry from "../Entry/Entry";



class EntryList extends React.Component{
    render(){
        return(
            <div>
                <TopicHeader/>
                <Entry/>
                <Entry/>
            </div>
        )
    }
}

export default EntryList;
