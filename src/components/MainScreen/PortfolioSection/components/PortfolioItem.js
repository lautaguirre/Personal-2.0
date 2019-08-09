import React, { Component } from 'react';
import { Col, Carousel, Image, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faLink } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

library.add(faChevronRight, faChevronLeft, faLink);

class PortfolioItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      readMore: false,
      noReadMore: false,
    };

    this.descriptionP = React.createRef();
    this.techUl = React.createRef();
    this.techUlList = React.createRef();
  }

  componentDidMount() {
    const descriptionP =  this.descriptionP.current;
    const techUl = this.techUl.current;
    const techUlList = this.techUlList.current;

    if (this.getElementsHeight(descriptionP, techUl, techUlList) < 200) {
      this.setState({ noReadMore: true, readMore: true });
    }
  }

  getElementsHeight = (...elements) => {
    let heigth = 0;
    elements.forEach(element => {
      heigth += element.offsetHeight + this.getElementPropertie(element, 'marginBottom');
    });

    return heigth;
  }

  getElementPropertie = (element, propertie) => {
    const computedStyle = getComputedStyle(element);
    return parseInt(computedStyle[propertie]);
  }

  onCloseRead = () => {
    this.setState({ readMore: false });
  }

  onOpenRead = () => {
    this.setState({ readMore: true });
  }

  renderTech = (tech, idx) => {
    return (
      <li key={idx}>
        <strong>{tech}</strong>
      </li>
    );
  }

  renderCarouselItem = (image, idx) => {
    return (
      <Carousel.Item key={idx}>
        <Image src={image} fluid />
      </Carousel.Item>
    );
  }

  render() {
    const carouselNext = <FontAwesomeIcon icon={faChevronRight} size="3x" color="black"/>;
    const carouselPrevious = <FontAwesomeIcon icon={faChevronLeft} size="3x" color="black"/>;

    const { readMore, noReadMore } = this.state;
    const {
      title,
      titleLink,
      description,
      techStack,
      images,
    } = this.props;

    const animation = keyframes`${fadeIn}`;
    const AnimatedDiv = styled.div`
      animation: 2s ${animation};
    `;

    return (
      <Col lg={6} className="mb-3 portfolio-item">
        <ListGroup className='shadow'>
          <ListGroupItem>
            {titleLink ? (
              <a className="center item-link" target="_blank" rel="noopener noreferrer" href={titleLink} >
                <h4 className="text-center mb-0">
                  <u>{title}</u>
                </h4>
                <FontAwesomeIcon icon={faLink} className="ml-2" />
              </a>
            ) : (
              <h4 className='text-center' >
                <u>{title}</u>
              </h4>
            )}
            <AnimatedDiv className={readMore ? '' : 'project-description-container'}>
              <p ref={this.descriptionP}>
                {description}
              </p>

              <p ref={this.techUl} >To develope this website I used:</p>
              <ul ref={this.techUlList}>
                {techStack.map(this.renderTech)}
              </ul>

              {!noReadMore && (
                <div className={readMore ? 'text-center' : 'read-more'}>
                  <Button variant="dark" onClick={readMore ? this.onCloseRead : this.onOpenRead}>
                    {readMore ? 'Read Less' : 'Read More'}
                  </Button>
                </div>
              )}
            </AnimatedDiv>

            {images && images.length > 0 && (
              <Carousel
              interval={7500}
              className='shadow-sm my-3'
              nextIcon={carouselNext}
              prevIcon={carouselPrevious}
              >
                {images.map(this.renderCarouselItem)}
              </Carousel>
            )}
          </ListGroupItem>
        </ListGroup>
      </Col>
    );
  }
}

export default PortfolioItem;
