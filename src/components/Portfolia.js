import React from 'react'
import 'antd/dist/antd.css'
import { Container } from 'reactstrap'
import { Carousel } from 'antd'


export default function Portfolia() {
    return (
        <div className="portfolia py-md-5 py-3">
            <Container>
                <h6 className="text-center mb-4">Portfolia</h6>
                <Carousel autoplay>
                    <div>
                        <a href="target.uz" target="_blank">
                            <img className="w-100" src="images/targetuz.png" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="target.uz" target="_blank">
                            <img className="w-100" src="images/targetuz.png" alt="" />
                        </a>
                    </div>
                </Carousel>
            </Container>
        </div>
    )
}
