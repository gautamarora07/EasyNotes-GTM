import React from 'react'
import { Link, useParams } from 'react-router-dom'




export const QP = () => {

  const iframeStyle = {height : '75vh', width : '85vw',outline : 'none' , border : '5px solid blueviolet', borderRadius : '20px', overflow : 'hidden'};

  const returnStyle = { borderRadius : '10px' , padding : '1rem', margin : '1rem' , cursor : 'pointer', color : 'white', backgroundColor : 'blueviolet'}

  let { id } = useParams(); id = id.toUpperCase();
  
  const FOLDER_ID = {
   "S1S1" : "1E1zq_R7iZpqkS23x9m2IYRNxGyLycDig"  ,
   "S2S1" : "1A3b8iF5k3S8h5Cu2A_LCMHr5dpJb8jKY"  ,
   "S2S2" : "1o5azBFi0O1-dxi1YvjLd1r5nv01BtEA7"  ,
   "S2F" : "110EQeMfCtFK-nDXABYZhGmjnpiE-xEDz" ,
   "S3S1" : "1akbX7q-396_SWTKNolm7tJUh6a2jRA1Q" ,
   "S3S2" : "1si9ULEN6x5bocVqpRJZv2tnz2WQFIeFS" ,
   "S3F" : "1qSt6lcMqdFe9qiTc-RdhcTx1l1qiIsmS" ,
   "S4S1" : "1spwp2-2Sh1RIk1nrXxHl9p0gGe9_3_Ph" ,
   "S4S2" : "1rXny1ioRoPTGiwdRBOncM46WDN0XAn1k",
   "S4F" : "1-dl8GxTvPssF1yiGxLe8sAICaFH5__wv" ,
   "S5S1" : "1yt1Ay75k1Zf13wdJWA9kskQxfr-qXMcZ",
   "S5S2" : "1yveAluLwj5ssILrt3w_kdjqRnpYYzODz",
   "S5F" : "1yz0bM_hQQG_QMKToPw-15jxWkvCWO5Tl"  
}

  if(!FOLDER_ID[id]) return <><span style={{padding : '1rem', fontSize : '4rem'}}>Not available ! :(  <br/>
  <Link style={{fontSize : '1rem', textDecoration : 'none'}} to={'/PYQs'}>GO BACK</Link>  </span>  
</>

  const src = "https://drive.google.com/embeddedfolderview?id=" + FOLDER_ID[id]  + "#grid" ;  
 

  return ( 
    <>   
      <div style={{display : 'flex', justifyContent : 'center' , alignItems : 'center', flexDirection  : 'column'}} >
        <span className="goBack" style={returnStyle} >
          <Link style={{color : 'white' , textDecoration : 'none'}} to={'/PYQs'}>GO BACK</Link>  
        </span>

        <iframe title='S2S1' src={src} style={iframeStyle}></iframe>
      </div>
    </>
  )
}

/*
{ "S1S1" : "1E1zq_R7iZpqkS23x9m2IYRNxGyLycDig" } ,
{ "S2S1" : "1A3b8iF5k3S8h5Cu2A_LCMHr5dpJb8jKY" } ,
{ "S2S2" : "1o5azBFi0O1-dxi1YvjLd1r5nv01BtEA7" } ,
{ "S2F" : "110EQeMfCtFK-nDXABYZhGmjnpiE-xEDz"} ,
{ "S3S1" : "1akbX7q-396_SWTKNolm7tJUh6a2jRA1Q"} ,
{ "S3S2" : "1si9ULEN6x5bocVqpRJZv2tnz2WQFIeFS"} ,
{ "S3F" : "1qSt6lcMqdFe9qiTc-RdhcTx1l1qiIsmS"} ,
{ "S4S1" : "1spwp2-2Sh1RIk1nrXxHl9p0gGe9_3_Ph"} ,
{ "S4S2" : "1rXny1ioRoPTGiwdRBOncM46WDN0XAn1k"} ,
{ "S4F" : "1-dl8GxTvPssF1yiGxLe8sAICaFH5__wv"} ,
{ "S5S1" : "1yt1Ay75k1Zf13wdJWA9kskQxfr-qXMcZ"},
{ "S5S2" : "yveAluLwj5ssILrt3w_kdjqRnpYYzODz"},
{ "S5F" : "1yz0bM_hQQG_QMKToPw-15jxWkvCWO5Tl"},

 */