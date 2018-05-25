import React from "react";
import Layout from "../../components/Layout/Layout";
import EntryList from "../../components/EntryList/EntryList";

class Home extends React.Component{

    render(){
        return(
            <Layout>
                <EntryList/>
            </Layout>
        )
    }
}

export default Home