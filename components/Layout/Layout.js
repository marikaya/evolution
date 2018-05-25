import React from 'react';
import Header from "../Header/Header";
import NavBar from "../Navbar/NavBar";
import LeftSide from "../LeftSide/LeftSide";
import css from './Layout.scss';


class Layout extends React.Component{
    render(){
       return (
           <div>
               <Header/>
               <NavBar/>
               <section className={css.content}>
                   <div className={'container'}>
                       <div className="row">
                           <div className="col-lg-12">
                               <div className={css.flexContainer}>
                                   <div className={css.leftContent}>
                                       <LeftSide/>
                                   </div>
                                   <div className={css.rightContent}>
                                       {this.props.children}
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </section>
           </div>
       )
    }
}
export default Layout;