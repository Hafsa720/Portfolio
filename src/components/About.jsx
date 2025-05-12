import React from 'react'
import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
const About = () => {
  return (
    <section className='bg-white py-20 w-full' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center p-20 gap-16 max-w-screen-2xl mx-auto'>
        <img src={aboutSvg} alt='not found' className='w-full    h-64 mx-20' />
        <article>
          <SectionTitle text='code and prayer' />
          <p className='text-slate-600 mt-8 leading-loose mr-50'>
            I am a software engineer with a passion for building web
            applications. I have experience in various technologies and
            frameworks, and I am always eager to learn new skills. I believe in
            the power of code to solve problems and make a positive impact on
            the world.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
