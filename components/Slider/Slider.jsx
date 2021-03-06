import Image from 'next/image';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import styled from 'styled-components';
import { Play } from 'react-feather';
import Button from '../elements/Button';

const Item = styled.div`
  display: flex;
  min-height: 64vh;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/banner.jpg');
  & div {
    margin: 12px 0px;
  }
  & div:first-child {
    flex: 1;
  }
  & div:last-child {
    flex: 3;
    display: flex;
    flex-direction: column;
    text-align: left;
    & div {
      width: 140px;
    }
  }
`;

const Slider = () => {
  return (
    <Carousel
      showStatus={false}
      autoPlay={true}
      showArrows={true}
      showIndicators={true}
      infiniteLoop={true}
      useKeyboardArrows={true}
      stopOnHover={true}
      swipeable={true}
      interval={2000}
      transitionTime={500}
      swipeScrollTolerance={5}
    >
      <Item>
        <div>
          <Image
            src={'/assets/3.jpeg'}
            alt={'drive'}
            width={200}
            height={320}
          />
        </div>
        <div>
          <h1>Legends Never Die</h1>
          <p>ZPlay Series</p>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          <div>
            <Button>
              <Play size={20} />
              <p>Watch now</p>
            </Button>
          </div>
        </div>
      </Item>
      <Item>
        <div>
          <Image
            src={'/assets/2.jpeg'}
            alt={'drive'}
            width={200}
            height={320}
          />
        </div>
        <div>
          <h1>Legend never Die</h1>
          <p>ZPlay Series</p>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          <div>
            <Button>
              <Play size={20} />
              <p>Watch now</p>
            </Button>
          </div>
        </div>
      </Item>
    </Carousel>
  );
};

export default Slider;
