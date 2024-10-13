import React from 'react'
import ImageSlider from '../ImageSlider'
import slider_data from '../data/sliderData.json';
import Login from '../Login'

const {slides} = slider_data;

export const Home = () => {
  return (
    <>
      <ImageSlider data={slides}/>
      <Login/>




    </>
  )
}
