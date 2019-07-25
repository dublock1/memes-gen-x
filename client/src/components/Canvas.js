import React, { Component } from 'react'
import baby from './images/baby.jpg'


class Canvas extends React.Component {
    render() {
        return(
          <div>
            <canvas ref="canvas" width='100%' height='100%' />
            />
          </div>
        )
      }
    }
    export default Canvas