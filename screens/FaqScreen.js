import { View, Text , StyleSheet, TouchableOpacity , ScrollView, SafeAreaView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../utils/auth-context';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import Icon2 from 'react-native-vector-icons/Entypo';

const CONTENT1 = [
  {
    title: 'WHEN WAS OGSO FOUNDED ?',
    content:
    ` OGSO was founded in 2015 by Thomas Seidensticker.` ,
        },
  {
    title: 'WHERE IS OGSO LOCATED?',
    content:
      `Head Office: OGSO Europe Ltd., Strait Street Block 45 Flat 19, 1434 Valletta – Malta.Product and Digital Departments: OGSO Tunisie s.a.r.l, Rue des Iles Canaries, Access Building 2ème étage - 1053 Le Lac II Tunis – Tunisia.
      `,
  },
]
  const CONTENT2 = [


  {  
  title: 'HOW CAN I FIND A SPECIFIC SKI MODEL?',
    content:
      `As all retailers are independently owned, we cannot track their inventories. Any Authorized OGSO Retailer may be able to special order the product you are in search of if they do not currently carry it. Please inquire of your nearest OGSO Authorized Retailer.
      `  ,
  },
  {
  title:`WHICH SKIS DO YOU RECOMMEND FOR ME? `,
    content:
    `Finding the right equipment can be a tricky business. Take a look at our website first to find out more about OGSO Skis and their special technologies.Ski weight, width, length and camber is a very individual issue depending on the style, capabilities, age, height, weight, purpose and situation.There is no real rules nor limits.Nevertheless, we advise following:Take a heavier + longer ski if you don’t climb Take a lighter + shorter ski if you climb Take a longer + camber ski if you go fast Take a shorter + rocker ski if you like to turn a lot Width of ski is chosen according to snow conditions. All OGSO Skis are designed for off-piste usage. We strongly recommend to speak to an OGSO Authorized Retailer who can offer you the best possible advice based on experience. Use the Dealer Locator for the contact details of dealers near to you.
    `,
},
{
  title: `I JUST PURCHASED AN OGSO PRODUCT,HOW CAN I BE SURE ITS GENUINE? `,
  content:
    ` Buying an OGSO product from an Authorized Retailer,means you can be sure your product is genuine.   
    `,
},
{
  title: 'WHERE CAN I DEMO OGSO SKIS?',
  content:
    `Most Authorized OGSO Retailers have demos available. Please visit your local Authorized OGSO Retailer for demo information.
    `,
},
{
  title: `HOW DO I DEFINE THE MOUNTING POINT FOR MY BINDINGS?`,
  content:
    `Follow the indications “Middle foot” of the technical specs and measure the ski in centimeters from the tail including the shock absorber.
     The mounting of the bindings can be adapted to your style and technical level. If you are a freestyler, mount the bindings a little more forward, 
     but it will tire your thighs a little more. Mount the binding a little back, if you ski really ultra-competitive and aggressive, charging at 
     all time and you have a strong and inclined boot and your upper body is pushing well forward.Freestyler: +1 Normal skier: 0 Middle Boot Off-piste or multi-purpose: 0 Middle Boot Pro rider: -1    
    `,
},
{
  title: `
     WHY IS SUMMER STORAGE PREPARATION OF SKIS SO IMPORTANT AND WHAT DOES IT INVOLVE?`,
  content:
    `Why: The base should be prepared with a layer of wax prior to the upcoming summer break so it has optimum protection against outside influences. How: Before the wax is applied you should remove any dirt, dust and old pieces of wax from the base. Here you can use cleaners (wax removers) which are available from sports retailers. IMPORTANT: do not leave the iron in one position for too long (risk of overheating). During the summer break the skis should be stored horizontally with the bindings facing downwards at a constant temperature in a room which is as dark and dry as possible. Just before the season starts all you have to do is scrape off the wax.`,
},
{
  title: 'HOW CAN I GET SOME OGSO STICKERS?',
  content:
    `In order to get some stickers, please send us a pre-stamped envelope with your address on it at our office: Strait Street Block 45 Flat 19, 1434 Valletta – Malta. Or, we might send you some with your order.
    `,
},
];
const CONTENT3 = [
  {
    title: `HOW CAN I MAKE A WARRANTY CLAIM?`,
    content:
      `Head over to our claim form page, nice and easy. It’s here.
      ` ,
        },
  {
    title: `IF I PURCHASED MY PRODUCT FROM  AN OGSO RESELLER, HOW DO I RETURN IT TO AFTER-SALES SERVICE?`,
    content:
      `According to our warranty policy, the reseller is responsible for all after-sales services.If you are facing an issue with a reseller, please contact us from here.`,
  },
]
const CONTENT4 = [
  {
    title: `I AM A SKIING INSTRUCTOR/SKI CLUB OFFICIAL/TRAINER. AM I ENTITLED TO ANY PRODUCT DISCOUNTS?`,
    content:
      `There is a chance you could be. Please get in touch with our customer service through the form.They will forward your request to the relevant country and get in touch to let you know.
      ` ,
        },
  {
    title: `WHAT SHOULD I DO IF I CANNOT FIND THE ANSWER TO MY QUESTION HERE?`,
    content:
      `If the FAQ has not answered your question, please get in touch with us via the contact form.
      `,
  },
  {
    title: `HOW CAN I RECEIVE THE LATEST INFORMATION ABOUT OGSO AND ITS PRODUCTS?`,
    content:
      `To receive the latest information, simply subscribe to our newsletter by entering your email address in the appropriate field at the bottom of our home page.
      `,
  },
  {
    title: `HOW CAN I UNSUBSCRIBE FROM THE OGSO NEWSLETTER?`,
    content:
      `To unsubscribe from the Newsletter, simply click on the unsubscribe link at the bottom of the Newsletter.
      `,
  },
]


const Weather = ({navigation}) => {


  const renderHeader = (section, _, isActive) => {
    //Accordion Header view
    return (
      <Animatable.View
        duration={100}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={styles.headerText}> <Icon2 name="controller-record" style={styles.icon}></Icon2> {section.title}</Text>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    //Accordion Content view
    return (
      <Animatable.View
        duration={50}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={{ textAlign: 'justify',color: '#666666',
          fontFamily: 'MuseoSans_500',
          fontSize: 15,
          fontWeight: '100',
          fontStyle: 'normal',
          lineHeight: 23, }}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  };

  
  const [collapsed, setCollapsed] = useState(true);
  const [activeSections, setActiveSections] = useState([]);
  const [activeSections1, setActiveSections1] = useState([]);
  const [activeSections2, setActiveSections2] = useState([]);
  const [activeSections3, setActiveSections3] = useState([]);
  const [activeSections4, setActiveSections4] = useState([]);
  const [multipleSelect, setMultipleSelect] = useState(false);

  const toggleExpanded = () => {
    //Toggling the state of single Collapsible
    setCollapsed(!collapsed);
  };

  const setSections = (sections) => {
    //setting up a active section state
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };
  const setSections1 = (sections1) => {
    //setting up a active section state
    setActiveSections1(sections1.includes(undefined) ? [] : sections1);
  };
  const setSections2 = (sections2) => {
    //setting up a active section state
    setActiveSections2(sections2.includes(undefined) ? [] : sections2);
  };
  const setSections3 = (sections3) => {
    //setting up a active section state
    setActiveSections3(sections3.includes(undefined) ? [] : sections3);
  };
  const setSections4 = (sections4) => {
    //setting up a active section state
    setActiveSections4(sections4.includes(undefined) ? [] : sections4);
  };


  const [data , setData] = useState(null)


  const Auth = useContext(AuthContext)



useEffect(()=>{

},[])




  return (
<SafeAreaView style={{flex : 1 }}>
  <View style={styles.container}>
  <View style={{flexDirection :'row'  , justifyContent : 'space-between'   }}>
        <TouchableOpacity   onPress={()=>navigation.navigate('Home')}>
      <Icon name='chevron-left' style={{ color : 'black' , fontSize: 50 }} />
        </TouchableOpacity>
          
        <TouchableOpacity  onPress={()=>navigation.navigate('profile')}>
        <Avatar.Image 
            source={{
              uri: Auth.getData().image,
            }}
            size={50}
          />
        </TouchableOpacity>

       </View>
       
     <View>
            <Text style={styles.notification}>FAQ</Text>
          </View>
          <ScrollView 
          contentContainerStyle={{flexGrow: 1,paddingBottom:100}}>
       <Text style={styles.privacyPolicy}> ABOUT OGSO </Text>
         <Accordion 
           activeSections={activeSections}
   
           //for any default active section
           sections={CONTENT1}
           //title and content of accordion
           touchableComponent={TouchableOpacity}
           expandMultiple={multipleSelect}
           //Do you want to expand mutiple at a time or single at a time
           renderHeader={renderHeader}
           //Header Component(View) to render
           renderContent={renderContent}
           //Content Component(View) to render
           duration={100}
           //Duration for Collapse and expand
           onChange={setSections}
           //setting the state of active sections
         />
       <Text style={styles.privacyPolicy}> OGSO PRODUCT </Text>
       <Accordion 
           activeSections={activeSections1}
           //for any default active section
           sections={CONTENT2}
           //title and content of accordion
           touchableComponent={TouchableOpacity}
           expandMultiple={multipleSelect}
           //Do you want to expand mutiple at a time or single at a time
           renderHeader={renderHeader}
           //Header Component(View) to render
           renderContent={renderContent}
           //Content Component(View) to render
           duration={100}
           //Duration for Collapse and expand
           onChange={setSections1}
           //setting the state of active sections
         />
         <Text style={styles.privacyPolicy}> WARRANTY </Text>
       <Accordion 
           activeSections={activeSections2}
           //for any default active section
           sections={CONTENT3}
           //title and content of accordion
           touchableComponent={TouchableOpacity}
           expandMultiple={multipleSelect}
           //Do you want to expand mutiple at a time or single at a time
           renderHeader={renderHeader}
           //Header Component(View) to render
           renderContent={renderContent}
           //Content Component(View) to render
           duration={100}
           //Duration for Collapse and expand
           onChange={setSections2}
           //setting the state of active sections
         />
         <Text style={styles.privacyPolicy}> PURCHASE </Text>
       <Accordion 
           activeSections={activeSections3}
           //for any default active section
           sections={CONTENT4}
           //title and content of accordion
           touchableComponent={TouchableOpacity}
           expandMultiple={multipleSelect}
           //Do you want to expand mutiple at a time or single at a time
           renderHeader={renderHeader}
           //Header Component(View) to render
           renderContent={renderContent}
           //Content Component(View) to render
           duration={100}
           //Duration for Collapse and expand
           onChange={setSections3}
           //setting the state of active sections
         />
                <Text style={styles.privacyPolicy}> SUPPORT </Text>
       <Accordion 
           activeSections={activeSections4}
           //for any default active section
           
           sections={CONTENT4}
           //title and content of accordion
           touchableComponent={TouchableOpacity}
           expandMultiple={multipleSelect}
           //Do you want to expand mutiple at a time or single at a time
           renderHeader={renderHeader}
           //Header Component(View) to render
           renderContent={renderContent}
           //Content Component(View) to render
           duration={100}
           //Duration for Collapse and expand
           onChange={setSections4}
           //setting the state of active sections
         />
         
       </ScrollView>
    </View>


    </SafeAreaView>
  )
}

export default Weather



const styles = StyleSheet.create({
    container :{
     flex : 1 ,
     backgroundColor :'white',
     padding : 20
     
    },
    notification: {
      color: '#000000',
      fontFamily: 'Esoris',
      fontSize: 28,
      fontWeight: '100',
      fontStyle: 'normal',
      lineHeight: 36,
      paddingHorizontal : 20,
      marginVertical : 20,
    },
    icon: {
      color: "rgba(128,128,128,1)",
      fontSize: 13,
      color :"#eb5c26",
    },
    title: {
    
      color: '#000000',
      fontFamily: 'MuseoSans_500',
      fontSize: 14,
      fontWeight: 'bold',
      fontStyle: 'normal',
      textAlign: 'left',
      lineHeight: 14,
    },
    header: {
      marginTop:10,
      marginLeft : 20,
      color: '#000000',
      fontFamily: 'MuseoSans_500',
      fontSize: 14,
     
      fontWeight: '100',
      fontStyle: 'normal',
      textAlign: 'left',
      marginBottom : 10,
      
      
    },
    headerText: {
      color: '#000000',
      fontSize: 15,
      fontFamily: 'MuseoSans_500',
      fontStyle: 'normal',
     
      },
    textHeader: {

      marginBottom : 20,
      color: '#000000',
      fontFamily: 'MuseoSans_500',
      fontSize: 40,
      fontWeight: '100',
      fontStyle: 'normal',
      textAlign: 'left',
      lineHeight: 23,
    },
    content: {
      marginLeft :38,
      color: 'gray',
      fontFamily: 'MuseoSans_500',
      fontSize:100,
      fontStyle: 'normal',
      textAlign: 'left',
      lineHeight: 23,
    },
    active: {
      marginLeft :38,
      color: 'gray',
      fontFamily: 'Museo',
      fontSize:100,
      fontStyle: 'normal',
      textAlign: 'left',
      lineHeight: 23,
    },
    inactive: {
      marginLeft :38,
      color: 'gray',
      fontFamily: 'Museo',
      fontSize:100,
      fontStyle: 'normal',
      textAlign: 'left',
      lineHeight: 23,
    },
    selectors: {
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    selector: {
      backgroundColor: '#ffffff',
      padding: 10,
    },
    activeSelector: {
      fontWeight: 'bold',
    },
    selectTitle: {
      fontSize: 14,
      fontWeight: '500',
      padding: 10,
      textAlign: 'center',
    },
    multipleToggle: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 30,
      alignItems: 'center',
    },
    privacyPolicy: {
      marginVertical :30,
      paddingLeft:20,
      color: '#000000',
      fontFamily: 'MuseoSans_700',
      fontSize: 17,
      fontStyle: 'normal',
      textAlign: 'left',
    },
    multipleToggle__title: {
      fontSize: 16,
      marginRight: 8,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      alignSelf:'center',
      top : 20,
    
    }
})



