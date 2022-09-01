import React from 'react';
import {
  Player,
  PortalToElement,
  ProductName,
  useAttribute,
} from '@threekit-tools/treble';

import Tiles from './components/Tiles';
import Accordion from './components/Accordion';
import ColorSwatch from './components/ColorSwatch';

const { AccordionItem } = Accordion;

const GoldMaxH2 = () => {
  const [sideDrawerState] = useAttribute('Side Drawers');
  const [topDrawerState] = useAttribute('Top Drawers');
  if (!sideDrawerState || !topDrawerState) return <></>;

  return (
    <>
      <div className="tk-treble-player">
        <Player />
      </div>
      <div className="my-6">
        <PortalToElement to="tk-treble-form" strict={true}>
          <ProductName className="my-12" title="Gold Max H2" />
          <Accordion>
            <AccordionItem label="Side Drawers">
              <Tiles attribute="Side Drawers" />
            </AccordionItem>
            {sideDrawerState.value === 'Yes' ? (
              <AccordionItem label="Side Drawers Color">
                <ColorSwatch attribute="Side Drawers Color" size="65px" />
              </AccordionItem>
            ) : (
              <></>
            )}
            {sideDrawerState.value === 'Yes' ? (
              <AccordionItem label="Extra Drawers">
                <Tiles attribute="Extra Drawers" />
              </AccordionItem>
            ) : (
              <></>
            )}
            {sideDrawerState.value === 'Yes' ? (
              <AccordionItem label="Extra Drawers Color">
                <ColorSwatch attribute="Extra Drawers Color" size="65px" />
              </AccordionItem>
            ) : (
              <></>
            )}
            <AccordionItem label="Top Drawers">
              <Tiles attribute="Top Drawers" />
            </AccordionItem>
            {topDrawerState.value === 'Yes' ? (
              <AccordionItem label="Top Drawers Color">
                <ColorSwatch attribute="Top Drawers Color" size="65px" />
              </AccordionItem>
            ) : (
              <></>
            )}
            <AccordionItem label="Bottom Drawers Color">
              <ColorSwatch attribute="Bottom Drawers Color" size="65px" />
            </AccordionItem>
            <AccordionItem label="TV">
              <Tiles attribute="TV" />
            </AccordionItem>
            <AccordionItem label="Handles">
              <Tiles attribute="Handles" />
            </AccordionItem>
            <AccordionItem label="Sound System">
              <Tiles attribute="Sound System" />
            </AccordionItem>
          </Accordion>
        </PortalToElement>
      </div>
    </>
  );
};

export default GoldMaxH2;
