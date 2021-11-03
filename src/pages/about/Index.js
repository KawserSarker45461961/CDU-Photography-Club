
import React from 'react';
import { NavbarGeneral } from '../../components/navbar/NavbarGeneral';
import { Container } from '../../components/container/Index';
import { CircleImage } from '../../components/image/Image'
import { Footer } from '../../components/footer/Index';
import { Images } from '../../utils/Images';

const Index = () => {
    const members = [
        { image: Images.CTO, name: "abul", position: "CTO" },
        { image: Images.VP, name: "John", position: "VP of Engineering" },
        { image: Images.TL, name: "Bjorn", position: "Engineering Manager" },
        { image: Images.VP, name: "Ivar", position: "Staff Software Engineer" },
        { image: Images.TL, name: "Ragnar Lothbrok", position: "Tech Lead" },
        { image: Images.VP, name: "Ubba", position: "Senior Software Engineer" },
        { image: Images.TL, name: "Siguard", position: "Software Engineer" },
        { image: Images.VP, name: "lagertha", position: "DevOps Engineer" },
        { image: Images.TL, name: "Torvi", position: "Site Reliability Engineer" },
    ]

    return (
        <div>
            <NavbarGeneral />

            <Container.Basic className="py-30">
                <Container.Row>
                    <Container.Column className="col-lg-9 m-auto">
                        <h3 className="fw-light">About Us</h3>
                        <hr />
                        <p className="fw-bold font-17 mb-3">Company</p>
                        <p className="fw-bolder font-15 mb-0">Address:</p>
                        <p className="font-15 mb-0">CDU Photography club</p>
                        <p className="font-15 mb-0">Darwin</p>
                        <p className="font-15 mb-3">Australia</p>

                        <p className="fw-bolder font-15 mb-0">Contact</p>
                        <p className="font-15 mb-0">Phone: +61 xxx xxx xxx</p>
                        <p className="font-15 mb-3">Email address: <a className="text-decoration-none text-primary" href="mailto:info@piratepixel.com">info@cdu.edu.au</a></p>
                        <p className="font-15 mb-0"><span className="text-primary">CDU Photography Club</span> </p>
                        <br />
                        <hr className="mb-4" />

                        {/* Profile card */}
                        {members && members.map((item, i) =>
                            <div className="d-md-flex text-center text-md-start py-30" key={i}>
                                <div>
                                    <div className="m-auto" style={{ width: 130, height: 130 }}>
                                        <CircleImage src={item.image} width={130} height={130} />
                                    </div>
                                </div>
                                <div className="flex-grow-1 ps-md-5 pt-4 pt-md-2 py-2">
                                    <h6 className="text-capitalize fw-bolder font-15 mb-3">{item.name}, {item.position}</h6>
                                    <p className="font-15  mb-0">
                                        This is empty now
                                    </p>
                                </div>
                            </div>
                        )}

                    </Container.Column>
                </Container.Row>
            </Container.Basic>

            <Footer />
        </div>
    );
}

export default Index;