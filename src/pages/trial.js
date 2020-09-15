import React from 'react';

class Trial extends React.Component{

    constructor(){
        super()
        this.state = {
            var:""
        }
    }
    
    render(){
        return(
            <div>
              <html>   
                <head>
                     <link rel="stylesheet" href="./trial.css"/>
                </head>
                <body>
                 <p>Trial</p>
                </body>
              </html>
            </div> 

        )
    }


}


export default Trial;