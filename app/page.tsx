import HeroPart from '../Components/HomeStyleOne/HeroPart'
import Content from '../Components/HomeStyleOne/Content'
import TheStory from '../Components/HomeStyleOne/TheStory'
import SpecialMenu from '../Components/HomeStyleOne/SpecialMenu'
import BestQualityFood from '../Components/HomeStyleOne/BestQualityFood'
import FreshFood from '../Components/HomeStyleOne/FreshFood'
import QutationBg from '../Components/HomeStyleOne/QtationBg'
import OurMenu from '../Components/HomeStyleOne/OurMenu'
import Reserve1 from '../Components/HomeStyleOne/Reserve1'
import Footer from '../Components/HeaderFooter/Footer'

export default function Home() {
  return (
    <div>
      <HeroPart/> 
      <Content/>
      <TheStory/>
      <SpecialMenu/> 
      <BestQualityFood/>
      <FreshFood/>
      <QutationBg/>
       <OurMenu/>
      <Reserve1/>
      <Footer/>
    </div>
  );
}
