import React, { useState } from 'react'
import ChartOne from './ChartOne'
import ChartTwo from './ChartTwo';
import ChartThree from './ChartThree';
import ChartFour from './ChartFour';


const BodyElement = () => {
    const [isActive, setIsActive] = useState('0');

    const clickedButtonHandler = (e) => {
        console.log(e.target);
        const { name } = e.target;
        setIsActive(name);
        console.log(isActive);
    };
    return (
        <>
            <nav className='sticky top-0 z-50'>
                <div className='bg-gray-800 h-18'>
                <div className="flex justify-center pt-6 text-white text-xl font-mono font-bold">Multiple charts.</div>
                    <div className='flex justify-center py-2'>
                        <button name='1' key={1} onClick={clickedButtonHandler} className={isActive === '1' ? 'border bg-white rounded-lg p-2 mr-2 text-black' : 'border rounded-lg p-2 mr-2 text-white'}>Chart1</button>
                        <button name='2' key={2} onClick={clickedButtonHandler} className={isActive === '2' ? 'border bg-white rounded-lg p-2 mr-2 text-black' : 'border rounded-lg p-2 mr-2 text-white'}>Chart2</button>
                        <button name='3' key={3} onClick={clickedButtonHandler} className={isActive === '3' ? 'border bg-white rounded-lg p-2 mr-2 text-black' : 'border rounded-lg p-2 mr-2 text-white'}>Chart3</button>
                        <button name='4' key={4} onClick={clickedButtonHandler} className={isActive === '4' ? 'border bg-white rounded-lg p-2 mr-2 text-black' : 'border rounded-lg p-2 mr-2 text-white'}>Chart4</button>
                    </div>

                </div>
            </nav>
            <div className='bg-gray-600 h-screen flex justify-center items-center'>
                {isActive === '1' && (
                    <ChartOne></ChartOne>

                )}
                {isActive === '2' && (

                    <ChartTwo></ChartTwo>

                )}

                {isActive === '3' && (

                    <ChartThree></ChartThree>

                )}
                {isActive === '4' && (

                    <ChartFour />

                )}
            </div>
        </>
    )
}

export default BodyElement