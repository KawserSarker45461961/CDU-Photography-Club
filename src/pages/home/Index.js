
import React from 'react';
import Gallery from 'react-photo-gallery';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { NavbarGeneral } from '../../components/navbar/NavbarGeneral';
import { Banner } from '../../components/banner/Index';
import { Container } from '../../components/container/Index';
import { Footer } from '../../components/footer/Index';
import { CustomButton } from '../../components/button/Index';

import { photos } from '../../utils/Photos'


const Index = () => {
    const history = useHistory()

    const handleImage = ((event, { photo, index }) => {
        history.push(`/photo/${photo.slug}`)
    })

    return (
        <div>
            <NavbarGeneral />
            <Banner />

            <Container.Fluid className="py-4">
                <Container.Row>
                    <Container.Column>
                        <Gallery
                            photos={photos}
                            onClick={handleImage}
                        />
                    </Container.Column>

                    {/* Discover more button */}
                    <Container.Column className="text-center pt-5 pb-4">
                        <Link to="/photos">
                            <CustomButton
                                style={{ borderRadius: 25, padding: "10px 30px", fontSize: 15 }}
                                className="btn-success border-0">
                                Show More
                            </CustomButton>
                        </Link>
                    </Container.Column>

                    <Container.Column className="col-md-10 col-lg-8 col-xxl-5 m-auto text-center pb-4">
                        <h3 className="mb-4">CDU Photography Club offers more... </h3>
                        <p className="mb-0">We offer more opputunities and freedom to pursue your dream or hobby. every year there is a event to showcase your pictures and get reviews. These events might open many doors for your future  .</p>
                        <Link to="/faq" className="text-primary text-decoration-none">Learn more...</Link>
                    </Container.Column>
                </Container.Row>
            </Container.Fluid>

            <Footer />
        </div>
    );
};

export default Index;