'use client'
import Head from 'next/head';
import { colorCombination, variants, ctaData } from './constant';
import React, { useState } from 'react';

import Popup from './popUp/popUp';



export default function Home() {

  const [selectedColor, setSelectedColor] = useState('amethyst');
  const [selectedVariant, setSelectedVariant] = useState(colorCombination[0].allVariant);
  const [variantIndex, setVariantIndex] = useState(0);
  const [selectedScooter, setSelectedScooter] = useState('pro');
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [message, setPopUpMessage] = useState('');


  const onColorSelected = (color) => {
    setSelectedColor(color);
    const filterVariant = colorCombination.filter(itm => itm.color === color)[0].allVariant;
    setSelectedVariant(filterVariant);
  }

  const handleNextClick = () => {
    if(variantIndex === 2){
      setVariantIndex(0);
    } else {
      setVariantIndex(variantIndex + 1);
    }
  }

  const handlePrevClick = () => {
    if(variantIndex === 0){
      setVariantIndex(2);
    } else {
      setVariantIndex(variantIndex - 1);
    }
  }

  const changeScooterName = (scooterName) => {
    setSelectedScooter(scooterName);
  }

  const handleDeliverClick = () => {
    setPopUpMessage('Enter pincode functionality need to be implemented');
    setIsPopUpOpen(true);
  }

  const onClickInfo = () => {
    setPopUpMessage('Information popUp need to be implemented');
    setIsPopUpOpen(true);
  }

  const scooterData = variants.filter(itm => itm.scooter === selectedScooter)[0];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Static Page Layout with Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid grid-cols gap-8">
      <Popup isOpen={isPopUpOpen} message={message} onClose={() => setIsPopUpOpen(!isPopUpOpen)} />
        <div className='flex'>
          <div className='scooter-image'>
            <div onClick={handlePrevClick} className="slick-prev"></div>
            <div className="border border-gray-300 rounded-lg h-screen">
              <img src={selectedVariant[variantIndex]} alt="Desktop Slider" className="w-full h-full object-cover" />
            </div>
            <div onClick={handleNextClick} className='slick-next'></div>
          </div>
          <div className='right-container'>
            <div className='upper-content'>
              <div className='choose-scooter flex'>
                <div>
                  <img id="generic_backbutton" src="https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/images/back_arrow_icon.svg" alt="Back" class="back-arrow-np" />
                </div>
                <div onClick={handleDeliverClick} className='pincodeContainer'>
                  <div className='dispatch-by'>DELIVERING TO</div>
                  <div className='dispatch-date'>
                    Pincode
                    <img class="est-dispatch-img" src="https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/images/DownArrowBlack.png" alt="down-arrow" />
                  </div>
                </div>
              </div>
              <div class="cv-desktop-color-name-wrapper">
                <div class="cv-desktop-color">color</div>
                <div class="cv-desktop-color">•</div>
                <div class="cv-desktop-color-name">Midnight Blue</div>
              </div>
              <div className='flex gap-5 colorsIcon'>
                {colorCombination.map((itm, indx) => {
                  return <img key={indx} onClick={() => onColorSelected(itm.color)} className={selectedColor === itm.color ? 'selectedColor' : 'colorSelection'} src={itm.url} />
                })}
              </div>
              <div className='choose-model'>
                <div className='choose-model-header'>CHOOSE MODEL AND VARIANT</div>
                <div className='modalSelection flex gap-2'>
                  {
                    variants.map((itm, indx) => <div key={indx} onClick={() => changeScooterName(itm.scooter)} className={selectedScooter === itm.scooter ? 'selectedScooter' : 'scooter'} ><img src={itm.url} /></div>)
                  }
                </div>
              </div>
              <div class="new-extended-warranty-wrapper"><div class="new-extended-warranty-left"><div><img class="new-extended-warranty-icon" src="https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/purchase/tick.svg" alt="" /></div><div>8 Year Battery Warranty included!</div></div><div><img class="new-extended-warranty-info-icon" src="https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/newPurchase/infoIcon.svg" alt="" /></div></div>
              <div className="variant-details-container">
                <div className='variant-details-sub-container'>
                  <div>{scooterData.variantName} 2nd Generation</div>
                  <div className='border-width'></div>

                  <div className='details-container'>
                    <div className='title-container'>
                      <div className='title'>CERTIFIED RANGE</div>
                      <div className='title'>TOP SPEED</div>
                      <div className='title'>0-40 KM/h</div>
                    </div>
                    <div className='title-container-val'>
                      <div className='title-val-1'>{scooterData.range}</div>
                      <div className='title-val-2'>{scooterData.topSpeed}</div>
                      <div className='title-val-3'>{scooterData.zeroForty}</div>
                    </div>
                  </div>
                </div>
                <div className="estimated-dispatch-container">
                  <div className='flex gap-3'>
                    Estimated delivery by 17th Jul 2024!
                    <img onClick={onClickInfo} className="deliveryInfoIcon" src="https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/newPurchase/InfoIconLight.svg" alt="info icon" />
                  </div>
                </div>
              </div>
              <ul className="CTAWrapper">
                {ctaData.map((itm, indx) =>
                (
                  <li key={indx} class="CTAliWrapper CTAliWrapper1">
                    <div class="CTAlistWrapper">
                      <div class="CTAlistWrapper_Img">
                        <img src={itm.url} alt="icon" />
                      </div>
                      <div class="CTAlistWrapper_Desc">
                        <span class="CTAlistWrapper_Desc_Title">{itm.title}</span>
                        <span class="CTAlistWrapper_Desc_SubTitle ">{itm.subTitle}</span>
                      </div>
                      <div class="CTAlistWrapper_Arrow">
                        <img src="https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/colourVariantCTA/rightArrow.svg" alt="arrow-icon" />
                      </div>
                    </div>
                  </li>
                )
                )}
              </ul>
            </div>
            <div className='footer'>
              <div className='footer-data'>
                <div className='flex gap-1 left-footer-data'>
                    <div className='amount'>₹1,28,999</div>
                    <div onClick={onClickInfo}><img src="https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/newPurchase/infoIcon.svg"></img></div>
                </div>
                <div className='right-footer-data'>
                  <div onClick={handleDeliverClick} className='btn-reserve'>Continue</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
