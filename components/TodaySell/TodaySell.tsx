"use client"
import React from 'react';
import SectionTitle from '../SectionTitle';
import SellSlider from './SellSlider';

const TodaySell = () => {
    return (
        <section className='my-32'>
            <SectionTitle title="Today's"/>
            <div className="">
                <SellSlider/>
            </div>
        </section>
    );
};

export default TodaySell;