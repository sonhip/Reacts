import React from 'react';
// import all components I created
// import HeaderPage from '../components/partials/header';
// import NavbarPage from '../components/partials/navbar';
// import FooterPage from '../components/partials/footer';

import IndexPage from '../components/index';

class HomePage extends React.Component{
    
    render(){
        return(
        // React.Fragment dùng để phân cách các component được gọi ngang hàng
        // nếu có một componẻnt thì ko cần fragment
        <React.Fragment>
            {/*this is syntax comment in JSX*/}
           <IndexPage>
               <section>
                   <h2>this is home page</h2>
               </section>
           </IndexPage>
        </React.Fragment>
        );
    }
}
export default HomePage;