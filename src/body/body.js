import React, { Component } from 'react'
import'./body.css'
import Card from '../card/card'
import Rasm1 from '../img/body/rasm1.png'
import Rasm2 from '../img/body/Rectangle 34.png'
import Rasm3 from '../img/body/Rectangle 37.png'
import Rasm4 from '../img/body/Rectangle 38.png'
import Rasm5 from '../img/body/Rectangle 43.png'
import Rasm6 from '../img/body/Rectangle 44.png'
import Rasm7 from '../img/body/Rectangle 45.png'
import Rasm8 from '../img/body/Rectangle 46.png'


export default class Body extends Component {
  render() {
    return (
      <div className='body-wrapper'>
          <p className='body-yangiliklar'>Yangiliklar</p>
          <div className='body-top'>
               <Card img={Rasm1}
               title1='Markazimiz xodimining katta' 
               title2='yutug`i' 
               p1='lorem adcli adlvnc adlivn adljcn qaduce'
               p2='lorem adcli adlvnc adlivn adljcn qaduce'
               p3='lorem adcli adlvnc adlivn adljcn qaduce'
               p4='lorem adcli adlvnc adlivn adljcn qaduce'
               p5='lorem adcli adlvnc adlivn adljcn qaduce'
               date='23-fevral 2021-yil'
               batafsil='Batafsil'
               />
                <Card img={Rasm2}
               title1='Technocorp hisobot tayorlovchi' 
               title2='vositani ishlab chiqmoqda' 
               p1='lorem adcli adlvnc adlivn adljcn qaduce'
               p2='lorem adcli adlvnc adlivn adljcn qaduce'
               p3='lorem adcli adlvnc adlivn adljcn qaduce'
               p4='lorem adcli adlvnc adlivn adljcn qaduce'
               p5='lorem adcli adlvnc adlivn adljcn qaduce'
               date='23-fevral 2021-yil'
               batafsil='Batafsil'
               />
                <Card img={Rasm3}
               title1='Markazimiz xodimining katta' 
               title2='yutug`i' 
               p1='lorem adcli adlvnc adlivn adljcn qaduce'
               p2='lorem adcli adlvnc adlivn adljcn qaduce'
               p3='lorem adcli adlvnc adlivn adljcn qaduce'
               p4='lorem adcli adlvnc adlivn adljcn qaduce'
               p5='lorem adcli adlvnc adlivn adljcn qaduce'
               date='23-fevral 2021-yil'
               batafsil='Batafsil'
               />
             
          </div>  
          <div className='body-bottom'>
               <Card img={Rasm4}
                 title1='Markazimiz xodimining katta' 
                 title2='yutug`i' 
                 p1='lorem adcli adlvnc adlivn adljcn qaduce'
                 p2='lorem adcli adlvnc adlivn adljcn qaduce'
                 p3='lorem adcli adlvnc adlivn adljcn qaduce'
                 p4='lorem adcli adlvnc adlivn adljcn qaduce'
                 p5='lorem adcli adlvnc adlivn adljcn qaduce'
                 date='23-fevral 2021-yil'
                 batafsil='Batafsil'
                 />
             <Card img={Rasm5}
               title1='Markazimiz xodimining katta' 
               title2='yutug`i' 
               p1='lorem adcli adlvnc adlivn adljcn qaduce'
               p2='lorem adcli adlvnc adlivn adljcn qaduce'
               p3='lorem adcli adlvnc adlivn adljcn qaduce'
               p4='lorem adcli adlvnc adlivn adljcn qaduce'
               p5='lorem adcli adlvnc adlivn adljcn qaduce'
               date='23-fevral 2021-yil'
               batafsil='Batafsil'
               />
             <Card img={Rasm6}
               title1='Markazimiz xodimining katta' 
               title2='yutug`i' 
               p1='lorem adcli adlvnc adlivn adljcn qaduce'
               p2='lorem adcli adlvnc adlivn adljcn qaduce'
               p3='lorem adcli adlvnc adlivn adljcn qaduce'
               p4='lorem adcli adlvnc adlivn adljcn qaduce'
               p5='lorem adcli adlvnc adlivn adljcn qaduce'
               date='23-fevral 2021-yil'
               batafsil='Batafsil'
               />
          </div>  
      </div>
    )
  }
}
